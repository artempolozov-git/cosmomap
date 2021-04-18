<template>
    <div class="header">
        <div class="logotype"><img src="@/assets/icons/cosmomap-logo.svg"></div>
        <a target="_blank" class="instagram-logotype" href="https://www.instagram.com/cosmomap/"><img src="@/assets/icons/instagram-logo.svg"></a>
        <div class="empty"></div>
        <fs-burger-menu></fs-burger-menu>
    </div>
</template>

<script>
    import FsBurgerMenu from "@/components/FsBurgerMenu";
    export default {
        name: "FsHeader",
        components: {FsBurgerMenu}
    }
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
}
.logotype > img {
    width: 250px;
}
.empty{
    width: 250px;
}
.instagram-logotype {
    width: 40px;
    margin: auto;
    transition: opacity .2s ease-in;
}
.instagram-logotype:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease-in;
}
@media only screen and (max-width : 1536px) {
    .logotype > img {
        width: 200px;
    }
    .empty{
        width: 200px;
    }
    .instagram-logotype {
        width: 35px;
    }
}
@media only screen and (max-width : 1366px) {
    .logotype > img {
        width: 170px;
    }
    .instagram-logotype {
        width: 25px;
    }
}
@media only screen and (max-width : 1024px) {
    .instagram-logotype {
        display: none;
    }
    .logotype > img {
        width: 180px;
    }
}
@media only screen and (max-width : 800px) {
    .logotype > img {
        width: 150px;
    }
}
@media only screen and (max-width : 600px) {
    .empty {
        display: none;
    }
    .header {
        justify-content: center;
    }
}
</style>