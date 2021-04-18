<template>
    <div class="burger-mobile">
        <Slide right :closeOnNavigation="true" noOverlay>
            <span class="bm-cross-button cross-style" style="/* right: 250px; */"></span>
            <div v-scroll-to="'#about'">Карта звёздного неба</div>
            <div v-scroll-to="'#price'">Цены</div>
            <div v-scroll-to="'#design'">Дизайн</div>
            <div v-scroll-to="'#instagram'">Фотографии</div>
            <div v-scroll-to="'#review'">Отзывы</div>
            <div v-scroll-to="'#delivery'">Доставка</div>
        </Slide>
    </div>
</template>

<script>
    import { Slide } from 'vue-burger-menu'
    export default {
        name: "FsBurgerMenu",
        components: {
            Slide // Register your component
        }
    }
</script>

<style scoped>
    .bm-burger-button {
        cursor: pointer;
        height: 25px;
        position: absolute;
        top: 25px;
        width: 35px;
        left: auto;
        right: 100px;
    }
    .bm-burger-bars {
        background-color: #333333;
    }
    .line-style {
        position: absolute;
        height: 20%;
        left: 0;
        right: 0;
    }
    .cross-style {
        position: absolute;
        top: 12px;
        right: 2px;
        cursor: pointer;
    }
    .bm-cross {
        background: #333333;
        height: 25px;
    }
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }
    .bm-menu {
        height: 100%; /* 100% Full-height */
        width: 0; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1000; /* Stay on top */
        top: 0;
        left: 0;
        background-color: white; /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
        box-shadow: 1px 1px 2px 1px rgba(204,204,204,1);
    }
    .bm-overlay {
        background: rgba(0, 0, 0, 0);
    }
    .bm-item-list {
        color: #333333;
        margin-left: 10%;
        font-size: 16px;
        cursor: pointer;
    }
    .bm-item-list > * {
        display: flex;
        text-decoration: none;
        padding: 16px;
        width: 300px;
        cursor: pointer;
        transition: color .2s ease-in;
    }
    .bm-item-list > *:hover {
        color: #aa5cff;
        transition: color .2s ease-in;
    }
    .bm-item-list > * > span {
        margin-left: 10px;
        font-weight: 700;
        color: white;
    }
    @media only screen and (max-width : 1536px) {
        .bm-item-list > * {
            font-size: 16px;
        }
    }
    @media only screen and (max-width : 800px) {
        .bm-item-list > * {
            font-size: 14px;
        }
    }
    @media only screen and (max-width : 600px) {
        .burger-mobile {
            display: none;
        }
    }
</style>