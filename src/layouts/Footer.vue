<template>
    <div class="footer-container">
        <div class="logotype" title="Наверх" v-scroll-to="'#top'"><img src="@/assets/icons/cosmomap-logo.svg"></div>
        <div class="navigation-stroke">
            <div class="nav" v-scroll-to="'#about'">Карта звёздного неба</div>
            <div class="nav" v-scroll-to="'#price'">Цены</div>
            <div class="nav" v-scroll-to="'#design'">Дизайн</div>
            <div class="nav" v-scroll-to="'#instagram'">Фотографии</div>
            <div class="nav" v-scroll-to="'#review'">Отзывы</div>
            <div class="nav-last" v-scroll-to="'#delivery'">Доставка</div>
        </div>
        <div class="icon-links">
            <a target="_blank" class="inst" href="https://www.instagram.com/cosmomap/"><img src="@/assets/icons/instagram-logo.svg"></a>
            <a target="_blank" class="email" href="mailto:cosmomap@mail.ru"><img src="@/assets/icons/email.svg"></a>
        </div>
        <a class="develop" href="https://rampix.ru/">Разработка сайта- rampix.ru</a>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
.footer-container {
    padding: 100px 100px 50px;
    background: url(../assets/icons/footer-background.svg) 50%;
    background-size: cover;
}
.logotype {
    display: flex;
    justify-content: center;
    transition: opacity .2s ease-in;
}
.logotype > img {
    width: 250px;
}
.logotype:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease-in;
}
.navigation-stroke {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
.nav {
    color: white;
    font-size: 20px;
    font-weight: normal;
    margin-right: 50px;
    transition: color .2s ease-in;
}
.nav:hover {
    cursor: pointer;
    color: #AA5CFF;
    transition: color .2s ease-in;
}
.nav-last {
    color: white;
    font-size: 20px;
    font-weight: normal;
    transition: color .2s ease-in;
}
.nav-last:hover {
    cursor: pointer;
    color: #AA5CFF;
    transition: color .2s ease-in;
}
.icon-links {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
.inst {
    width: 30px;
    margin-right: 30px;
    transition: opacity .2s ease-in;
}
.inst:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease-in;
}
.email {
    width: 30px;
    transition: opacity .2s ease-in;
}
.email:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease-in;
}
.develop {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    color: #858585;
    font-size: 20px;
    font-weight: normal;
    text-decoration: none;
    transition: color .2s ease-in;
}
.develop:hover {
    color: white;
    transition: color .2s ease-in;
}
@media only screen and (max-width : 1536px) {
    .logotype > img {
        width: 200px;
    }
    .nav {
        font-size: 18px;
    }
    .nav-last {
        font-size: 18px;
    }
    .email {
        width: 30px
    }
    .inst {
        width: 30px
    }
    .develop {
        font-size: 18px;
    }
}
@media only screen and (max-width : 800px) {
    .logotype > img {
        width: 150px;
    }
    .navigation-stroke {
        display: none;
    }
    .email {
        width: 20px
    }
    .inst {
        width: 20px
    }
    .develop {
        font-size: 14px;
    }
}
@media only screen and (max-width : 600px) {
    .footer-container {
        padding: 50px 30px;
    }
    .icon-links {
        margin-top: 20px;
    }
    .develop {
        margin-top: 20px;
    }
}
</style>