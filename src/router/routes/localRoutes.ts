import {AppRouteRecordRaw} from "../type";
import {ComponentCanstants} from "@/router/constants";
import {HomeFilled, Menu} from "@element-plus/icons-vue";
//无需权限的路由
const localRoutes = [
    {
        path: "/",
        redirect: "/home",
        component: ComponentCanstants["FOREGROUND_LAYOUT"],
        meta: {
            title: "主页",
        },
        children: [
            {
                path: "home",
                name: "Home",
                meta: {
                    title: "Home",
                    icon: HomeFilled,
                },
                component: ComponentCanstants["HOME_PAGE"],
            },
            {
                path: "students",
                name: "Students",
                meta: {
                    title: "Students",
                },
                component: ComponentCanstants["STUDENTS_PAGE"],
            },
            {
                path: "news",
                name: "News",
                meta: {
                    title: "News",
                },
                component: ComponentCanstants["NEWS_PAGE"],
            },
            {
                path: "about",
                name: "about",
                meta: {
                    title: "About",
                },
                component: ComponentCanstants["ABOUT_PAGE"],
            },
            {
                path: "academics",
                name: "Academics",
                meta: {
                    title: "Academics",
                },
                component: ComponentCanstants["ACADEMIC_PAGE"],
            },
            {
                path: "admission",
                name: "Admission",
                meta: {
                    title: "Admission",
                },
                component: ComponentCanstants["ADMISSION_PAGE"],
            },
            {
                path: "campus",
                name: "Campus",
                meta: {
                    title: "Campus Life",
                },
                component: ComponentCanstants["CAMPUS_PAGE"],
            },
            {
                path: "students",
                name: "Students",
                meta: {
                    title: "students",
                    hasCover:true
                },
                component: ComponentCanstants["STUDENTS_PAGE"],
            },
            {
                path: "community",
                name: "Community",
                meta: {
                    title: "community",
                    hasCover:true
                },
                component: ComponentCanstants["COMMUNITY_PAGE"],
            },
            {
                path: "article/:id?",
                name: "Article",
                meta: {
                    title: "Article",
                },
                component: ComponentCanstants["ARTICLE_PAGE"],
            }
        ],
    },
] as AppRouteRecordRaw[];

export default localRoutes;


