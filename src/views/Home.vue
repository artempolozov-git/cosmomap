<template>
    <div>
        <first-screen></first-screen>
        <home-about></home-about>
        <home-offer></home-offer>
        <home-design></home-design>
        <home-reviews></home-reviews>
        <home-delivery></home-delivery>
    </div>
</template>

<script>
    import FirstScreen from "@/components/FirstScreen";
    import HomeAbout from "@/components/HomeAbout";
    import HomeOffer from "@/components/HomeOffer";
    import HomeDesign from "@/components/HomeDesign";
    import HomeReviews from "@/components/HomeReviews";
    import HomeDelivery from "@/components/HomeDelivery";
    export default {
        name: "Home",
        components: {HomeDelivery, HomeReviews, HomeDesign, HomeOffer, HomeAbout, FirstScreen}
    }
</script>

<style scoped>

</style>