<template>
    <div class="gallery" id="instagram" data-aos="fade-up"
         data-aos-anchor-placement="top-bottom">
        <a target="_blank" class="instagram-title" href="https://www.instagram.com/cosmomap/">
            <img src="@/assets/icons/instagram-black.svg">
            <div>cosmomap</div>
        </a>
        <div class="instagram-description">Подписывайтесь на нас в instagram, узнавайте
            об акциях и учавствуйте в розыгрышах карт!
        </div>
        <div class="instagram-gallery">
            <div class="instagram-photo-one"></div>
            <div class="instagram-photo-two"></div>
            <div class="instagram-photo-three"></div>
            <div class="instagram-photo-four"></div>
            <div class="instagram-photo-five"></div>
            <div class="instagram-photo-six"></div>
            <div class="instagram-photo-seven"></div>
            <div class="instagram-photo-eight"></div>
            <div class="instagram-photo-nine"></div>
        </div>
        <a target="_blank" class="btn-grad" href="https://www.instagram.com/cosmomap/">Подписаться</a>
    </div>
</template>

<script>
    export default {
        name: "InstagramGallery"
    }
</script>

<style scoped>
.gallery {
    padding: 100px 100px;
}
.instagram-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}
.instagram-title:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease-in;
}
.instagram-title > img {
    width: 33px;
    margin-right: 10px;
}
.instagram-title > div {
    font-size: 30px;
    font-weight: bold;
    color: #212121;
    text-align: center;
}
.instagram-description {
    width: 30%;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    color: #212121;
    font-size: 20px;
    font-weight: normal;
    text-align: center;
}
.instagram-gallery {
    margin-top: 50px;
    padding:0 300px 0 300px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 55px;
    grid-row-gap: 55px;
}
.instagram-photo-one {
    height: 300px;
    background: url(../assets/photo/nine.webp);
    background-size: cover;
    border-radius: 5px;
}
.instagram-photo-two {
    height: 300px;
    background: url(../assets/photo/eight.webp);
    background-size: cover;
    border-radius: 5px;
}
.instagram-photo-three {
    height: 300px;
    background: url(../assets/photo/seven.webp);
    background-size: cover;
    border-radius: 5px;
}
.instagram-photo-four {
    height: 300px;
    background: url(../assets/photo/six.webp);
    background-size: cover;
    border-radius: 5px;
}
.instagram-photo-five {
    height: 300px;
    background: url(../assets/photo/five.webp);
    background-size: cover;
    border-radius: 5px;
}
.instagram-photo-six {
    height: 300px;
    background: url(../assets/photo/four.webp);
    background-size: cover;
    border-radius: 5px;
}
.instagram-photo-seven {
    height: 300px;
    background: url(../assets/photo/three.webp);
    background-size: cover;
    border-radius: 5px;
}
.instagram-photo-eight {
    height: 300px;
    background: url(../assets/photo/two.webp);
    background-size: cover;
    border-radius: 5px;
}
.instagram-photo-nine {
    height: 300px;
    background: url(../assets/photo/one.webp);
    background-size: cover;
    border-radius: 5px;
}
.btn-grad {background-image: linear-gradient(to right, rgba(53,224,209,1) 0%, rgba(151,173,226,1) 20%, rgba(238,128,241,1) 50%)}
.btn-grad {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 50px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    width: 180px;
    height: 60px;
    border-radius: 50px;
    transition: 0.5s;
    background-size: 200% auto;
    text-decoration: none;
}
.btn-grad:hover {
    cursor: pointer;
    background-position: right center; /* change the direction of the change here */
    text-decoration: none;
}
@media only screen and (max-width : 1680px) {
    .instagram-gallery {
        padding: 0 200px 0 200px;
    }
}
@media only screen and (max-width : 1536px) {
    .instagram-title > img {
        width: 33px;
    }
    .instagram-title > div {
        font-size: 30px;
    }
    .instagram-description {
        font-size: 18px;
    }
    .instagram-gallery {
        padding: 0 150px 0 150px;
    }
    .btn-grad {
        font-size: 16px;
        width: 150px;
        height: 50px;
    }
}
@media only screen and (max-width : 1366px) {
    .instagram-gallery {
        padding: 0 100px 0 100px;
        grid-column-gap: 50px;
        grid-row-gap: 50px;
    }
}
@media only screen and (max-width : 1280px) {
    .instagram-gallery {
        padding: 0 50px 0 50px;
    }
}
@media only screen and (max-width : 1024px) {
    .instagram-description {
        width: 50%;
    }
    .instagram-gallery {
        padding: 0;
    }
    .instagram-photo-one,.instagram-photo-two,.instagram-photo-three,
    .instagram-photo-four,.instagram-photo-five,.instagram-photo-six,.instagram-photo-seven,.instagram-photo-eight,.instagram-photo-nine {
        height: 240px;
    }
}
@media only screen and (max-width : 800px) {
    .instagram-title > img {
        width: 20px;
    }
    .instagram-title > div {
        font-size: 18px;
    }
    .instagram-description {
        font-size: 14px;
    }
    .instagram-description {
        width: 50%;
    }
    .instagram-gallery {
        padding: 0;
        grid-column-gap: 25px;
        grid-row-gap: 25px;
    }
    .instagram-photo-one,.instagram-photo-two,.instagram-photo-three,
    .instagram-photo-four,.instagram-photo-five,.instagram-photo-six,.instagram-photo-seven,.instagram-photo-eight,.instagram-photo-nine {
        height: 180px;
    }
    @media only screen and (max-width: 800px) {
    .btn-grad {
        font-size: 14px;
        width: 130px;
        height: 40px;
    }
    }
}
@media only screen and (max-width : 600px) {
    .gallery {
        padding: 30px 10px;
    }
    .instagram-gallery {
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }
    .instagram-photo-one,.instagram-photo-two,.instagram-photo-three,
    .instagram-photo-four,.instagram-photo-five,.instagram-photo-six,.instagram-photo-seven,.instagram-photo-eight,.instagram-photo-nine {
        height: 150px;
    }
}
@media only screen and (max-width : 375px) {
    .instagram-description {
        width: 80%;
    }
    .instagram-photo-one,.instagram-photo-two,.instagram-photo-three,
    .instagram-photo-four,.instagram-photo-five,.instagram-photo-six,.instagram-photo-seven,.instagram-photo-eight,.instagram-photo-nine {
        height: 112px;
    }
    .instagram-gallery {
        margin-top: 30px;
    }
}
</style>