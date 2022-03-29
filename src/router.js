import Favorite from "./components/Favorite/Favorite";
import History from "./components/History/History";
import DetailedPhotoPage from "./components/DetailedPhotoPage/DetailedPhotoPage";

export const routes = [
    {
        path: '/favorites',
        exact: true,
        component: Favorite,
        title: "Favorite",
        id: 2
    },
    {
        path: '/history',
        exact: true,
        component: History,
        title: "history",
        id: 3
    },
    {
        path: "/photo/:id",
        name: "Photo",
        Component: DetailedPhotoPage,
        id: 4
    },
]
