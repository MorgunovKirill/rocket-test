import React, { createContext, useState, useEffect } from "react";
import {createApi} from "unsplash-js";
import { keys } from "./keys";

export const Context = createContext();

export const unsplash = createApi({ accessKey: keys.ACCESS_KEY });

const AppStateProvider = ({ children }) => {
    const [searchQueries, setSearchQueries] = useState(
        JSON.parse(window.localStorage.getItem("searchQueries")) || []
    );
    const [likedImages, setLikedImages] = useState(
        JSON.parse(window.localStorage.getItem("likedImages")) || []
    );
    const [collections, setCollections] = useState([]);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(2);
    const [selectedPost, setSelectedPost] = useState({});
    const [loading, setLoading] = useState(false);
    const [currentSearchQuery, setCurrentSearchQuery] = useState("");
    const [additionalPosts, setAdditionalPosts] = useState([]);

    const fetchData = async () => {
        setLoading(true);
        const imagesData = await unsplash.photos.list(1, 25);
        setPosts(imagesData.response.results);
        setAdditionalPosts([]);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    const fetchAdditionalPosts = async () => {
        const additionalImagesData = await unsplash.photos.list(page, 25);
        setAdditionalPosts([...additionalPosts, additionalImagesData.response.results]);
        setPage((page) => page + 1);
    };

    const resetAdditionalPosts = () => {
        setAdditionalPosts([]);
    };
    const fetchCollections = async () => {
        const collectionsData = await unsplash.collections.list(
            1,
            10,
            "popular"
        );

        setCollections(collectionsData.response.results);
    };

    const fetchPhotosFromSearchRequest = async (searchQuery) => {
        setLoading(true);
        setCurrentSearchQuery(searchQuery);
        const imagesData = await unsplash.search.getPhotos(searchQuery, 1, 25);
        setPosts(imagesData.response.results);
        setTimeout(() => {
            setLoading(false);
        }, 500);
        return;
    };

    const fetchAdditionalFromSearchRequest = async () => {
        setLoading(true);
        const imagesData = await unsplash.search.getPhotos(
            currentSearchQuery,
            page,
            25
        );
        setAdditionalPosts([...additionalPosts, imagesData.response.results]);
        setPage((page) => page + 1);
    };

    const getCollectionPhotos = async (collectionId) => {
        const photosData = await unsplash.collections.getPhotos(
            collectionId,
            1,
            24
        );
        setPosts(photosData.response.results);
    };

    const addPhotoToFavorites = (post) => {
        setLikedImages([...likedImages, post]);
        window.localStorage.setItem(
            "likedImages",
            JSON.stringify([...likedImages, post])
        );
    };

    const getPhotoDetails = async (id) => {
        const photoDetailsData = await unsplash.photos.get(id);
        setSelectedPost(photoDetailsData.response.results);
    };

    const resetPageCount = () => {
        setPage(2);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        fetchCollections();
    }, []);

    return (
        <div>
            <Context.Provider
                value={{
                    searchQueries,
                    setSearchQueries,
                    currentSearchQuery,
                    likedImages,
                    setLikedImages,
                    collections,
                    setCollections,
                    posts,
                    setPosts,
                    fetchData,
                    fetchCollections,
                    getCollectionPhotos,
                    addPhotoToFavorites,
                    getPhotoDetails,
                    selectedPost,
                    fetchPhotosFromSearchRequest,
                    loading,
                    additionalPosts,
                    fetchAdditionalPosts,
                    resetPageCount,
                    resetAdditionalPosts,
                    fetchAdditionalFromSearchRequest,
                }}
            >
                {children}
            </Context.Provider>
        </div>
    );
};

export default AppStateProvider;
