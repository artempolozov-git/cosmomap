<template>
    <div class="about-map">
        <about-map></about-map>
        <price-map></price-map>
    </div>
</template>

<script>
    import AboutMap from "@/components/AboutMap";
    import PriceMap from "@/components/PriceMap";
    export default {
        name: "HomeAbout",
        components: {PriceMap, AboutMap}
    }
</script>

<style scoped>
.about-map {
    display: block;
    padding: 100px 100px;
    background: url(../assets/icons/price-background.svg) 50%;
    background-size: cover;
    background-position: bottom;
}
@media only screen and (max-width : 1536px) {
.about-map {
        padding: 70px 70px;
    }
}
@media only screen and (max-width : 1280px) {
.about-map {
    background: url(../assets/icons/price-background.svg) 50%;
    background-size: cover;
    background-position: top;
    }
}
@media only screen and (max-width : 1024px) {
    .about-map {
        padding: 50px 50px;
        background: url(../assets/icons/price-background.png) 50%;
        background-size: cover;
        background-position: top;
    }
}
@media only screen and (max-width : 600px) {
    .about-map {
        background: url(../assets/icons/price-background-mobile.svg) 50%;
        background-size: cover;
    }
}
@media only screen and (max-width : 375px) {
    .about-map {
        background-position: top;
    }
}
</style>