import Vue from 'vue'
import Router from 'vue-router'
import Header from './layouts/Header';
import Footer from './layouts/Footer';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Home.vue')
            },
            meta: {
                title: 'Cosmomap Карта звёздного неба',
                description: 'Cosmomap - это карта с точным расположением звёзд на небе в момент вашего важного события! Укажите место и дату Вашего важного события и на основе полученных данных мы создадим Ваше звёздное небо!',
            },
            children: [],
        },
    ]
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    let meta = document.createElement('meta');
    meta.name = "description";
    meta.content = to.meta.description;
    document.getElementsByTagName('head')[0].appendChild(meta);

    next()
});
export default router;