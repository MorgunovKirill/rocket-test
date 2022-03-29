import Favorite from "./components/Favorite/Favorite";
import History from "./components/History/History";

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
]
