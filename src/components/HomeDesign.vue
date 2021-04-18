<template>
    <div class="home-design" id="design">
        <div class="design-padding">
        <div class="title-container" data-aos="fade-up"
             data-aos-anchor-placement="top-bottom">
            <div class="title-map">Дизайн</div>
            <div class="description-map">Создайте свой уникальный дизайн карты звёздного неба!
                Выберите цвет рамки, размер и дизайн карты.</div>
            <div class="map-slider">
                <hooper group="group1" :wheelControl="false" :centerMode="true">
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Классическая»</div>
                            <div class="desing-map"><img src="@/assets/icons/classic.svg"></div>
                            <div class="desing-description">Выберите черную или белую рамку для своей карты!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Персональная»</div>
                            <div class="desing-personal"><img src="@/assets/icons/personal.svg"></div>
                            <div class="desing-description">Вы можете выбрать
                                любой цвет фона!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Флуоресцентная»</div>
                            <div class="desing-personal"><img src="@/assets/icons/fluorescent.svg"></div>
                            <div class="desing-description">Звёзды светятся
                                в темноте!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Галактика»</div>
                            <div class="desing-map"><img src="@/assets/icons/galactic.svg"></div>
                            <div class="desing-description">Добавьте впечатляющий снимок
                                галактики телескопа Хаббл!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «C фотографией»</div>
                            <div class="desing-personal"><img src="@/assets/icons/photo.svg"></div>
                            <div class="desing-description">Добавьте на фон Вашу
                                любимую фотографию!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Детская»</div>
                            <div class="desing-personal"><img src="@/assets/icons/kids.svg"></div>
                            <div class="desing-description">Создадим эксклюзивный
                                дизайн детской карты!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Стороны света»</div>
                            <div class="desing-personal"><img src="@/assets/icons/compas.svg"></div>
                            <div class="desing-description">Вы можете добавить
                                компас к любому дизайну!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Фото города»</div>
                            <div class="desing-personal"><img src="@/assets/icons/city.svg"></div>
                            <div class="desing-description">Добавьте на фон
                                фотографию города!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Дополнительно»</div>
                            <div class="desing-personal"><img src="@/assets/icons/additionally.svg"></div>
                            <div class="text-additionally">Вы можете добавить млечный путь, атмосферу,
                                сетку и названия созвездий на любую карту!</div>
                        </div>
                    </slide>
                    <!--<slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Парная»</div>
                            <div class="desing-couple"><img src="@/assets/icons/couple.svg"></div>
                            <div class="desing-description">Сделайте парную карту с Вашей датой
                                и датой Вашей второй половинки!</div>
                        </div>
                    </slide>-->
                </hooper>

                <hooper style="height: auto;" group="group1" :itemsToShow="5" :centerMode="true" :wheelControl="false">
                    <slide>
                        <div class="desing-preview"><img src="@/assets/icons/classic.svg"></div>
                    </slide>
                    <slide>
                        <div class="personal-preview"><img src="@/assets/icons/personal.svg"></div>
                    </slide>
                    <slide>
                        <div class="personal-preview"><img src="@/assets/icons/fluorescent.svg"></div>
                    </slide>
                    <slide>
                        <div class="desing-preview"><img src="@/assets/icons/galactic.svg"></div>
                    </slide>
                    <slide>
                        <div class="personal-preview"><img src="@/assets/icons/photo.svg"></div>
                    </slide>
                    <slide>
                        <div class="personal-preview"><img src="@/assets/icons/kids.svg"></div>
                    </slide>
                    <slide>
                        <div class="personal-preview"><img src="@/assets/icons/compas.svg"></div>
                    </slide>
                    <slide>
                        <div class="personal-preview"><img src="@/assets/icons/city.svg"></div>
                    </slide>
                    <slide>
                        <div class="personal-preview"><img src="@/assets/icons/additionally.svg"></div>
                    </slide>
                    <!--<slide>
                        <div class="couple-preview"><img src="@/assets/icons/couple.svg"></div>
                    </slide>-->
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                </hooper>
            </div>

            <div class="map-slider-mobile">
                <hooper :itemsToShow="0.5" :centerMode="true" :wheelControl="false">
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Классическая»</div>
                            <div class="desing-personal"><img src="@/assets/icons/classic-mobile.svg"></div>
                            <div class="desing-description">Выберите черную или белую рамку для своей карты!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Персональная»</div>
                            <div class="desing-personal"><img src="@/assets/icons/personal.svg"></div>
                            <div class="desing-description">Вы можете выбрать
                                любой цвет фона!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Флуоресцентная»</div>
                            <div class="desing-personal"><img src="@/assets/icons/fluorescent.svg"></div>
                            <div class="desing-description">Звёзды светятся
                                в темноте!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Галактика»</div>
                            <div class="desing-personal"><img src="@/assets/icons/galactic-mobile.svg"></div>
                            <div class="desing-description">Добавьте впечатляющий снимок
                                галактики телескопа Хаббл!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «C фотографией»</div>
                            <div class="desing-personal"><img src="@/assets/icons/photo.svg"></div>
                            <div class="desing-description">Добавьте на фон Вашу
                                любимую фотографию!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Детская»</div>
                            <div class="desing-personal"><img src="@/assets/icons/kids.svg"></div>
                            <div class="desing-description">Создадим эксклюзивный
                                дизайн детской карты!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Стороны света»</div>
                            <div class="desing-personal"><img src="@/assets/icons/compas.svg"></div>
                            <div class="desing-description">Вы можете добавить
                                компас к любому дизайну!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Фото города»</div>
                            <div class="desing-personal"><img src="@/assets/icons/city.svg"></div>
                            <div class="desing-description">Добавьте на фон
                                фотографию города!</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="map">
                            <div class="title-slider">Карта звёздного неба<br>
                                «Дополнительно»</div>
                            <div class="desing-personal"><img src="@/assets/icons/additionally.svg"></div>
                            <div class="text-additionally">Добавьте млечный путь, атмосферу,
                                сетку<br>и названия созвездий на любую карту!</div>
                        </div>
                    </slide>
                    <hooper-pagination slot="hooper-addons"></hooper-pagination>
                </hooper>
            </div>
        </div>
        <a class="btn-grad" target="_blank" href="https://www.instagram.com/cosmomap/">Заказать карту</a>
        </div>
        <instagram-gallery></instagram-gallery>
    </div>
</template>

<script>
    import { Hooper, Slide,Navigation as HooperNavigation, Pagination as HooperPagination} from 'hooper';
    import 'hooper/dist/hooper.css';
    import InstagramGallery from "@/components/InstagramGallery";

    export default {
        name: "HomeDesign",
        components: {
            InstagramGallery,
            Hooper,
            Slide,
            HooperNavigation,
            HooperPagination,
        },
        methods:{
            toggleForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
    }
</script>

<style scoped>
.home-design {
    display: block;
    background: url(../assets/icons/design-background.svg);
    background-size: cover;
    background-position: bottom;
}
.design-padding {
    padding: 100px 100px;
}
.stars-background {
    position: absolute;
    right: 0;
}
.map-slider-mobile {
    display: none;
}
.title-container {
    text-align: center;
}
.title-map {
    font-size: 30px;
    font-weight: 700;
    color: white;
}
.description-map {
    width: 30%;
    margin: auto;
    margin-top: 15px;
    color: white;
    font-size: 20px;
    font-weight: normal;
}
.map-slider {

}
.title-slider {
    margin-top: 40px;
    font-size: 23px;
    font-weight: 700;
    color: white;
    text-align: center;
    text-transform: uppercase;
}
.desing-map {
    width: 700px;
    margin: auto;
    margin-top: 30px;
}
.desing-couple {
    width: 600px;
    margin: auto;
    margin-top: 30px;
}
.desing-preview {
    width: 260px;
    margin: auto;
    margin-top: 30px;
}
.couple-preview {
    width: 230px;
    margin: auto;
    margin-top: 30px;
}
.desing-personal{
    width: 330px;
    margin: auto;
    margin-top: 30px;
}
.personal-preview {
    width: 120px;
    margin: auto;
    margin-top: 30px;
}
.desing-description {
    margin-top: 20px;
    font-size: 20px;
    font-weight: normal;
    color: white;
    text-align: center;
}
.text-additionally {
    width: 30%;
    margin: auto;
    margin-top: 20px;
    font-size: 20px;
    font-weight: normal;
    color: white;
    text-align: center;
}
.hooper {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 650px;
    outline: none;
    border: none;
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
/*.hooper-navigation path{
    fill: green !important;
}*/
@media only screen and (max-width : 1536px) {
    .home-design {
        background: url(../assets/icons/design-background.png);
        background-size: cover;
        background-position: top;
    }
    .title-map {
        font-size: 30px;
    }
    .description-map {
        font-size: 18px;
    }
    .title-slider {
        font-size: 18px;
    }
    .desing-description {
        font-size: 18px;
    }
    .text-additionally {
        font-size: 18px;
        width: 30%;
    }
    .desing-map {
        width: 500px;
    }
    .desing-personal {
        width: 240px;
    }
    .desing-preview {
        width: 200px;
    }
    .personal-preview {
        width: 95px;
    }
    .hooper {
        height: 500px;
    }
    .btn-grad {
        font-size: 16px;
        width: 150px;
        height: 50px;
    }
}
@media only screen and (max-width : 1024px) {
    .description-map {
        width: 50%;
    }
    .desing-map {
        width: 400px;
    }
    .desing-personal {
        width: 200px;
    }
    .desing-preview {
        width: 150px;
    }
    .personal-preview {
        width: 70px;
    }
    .hooper {
        height: 430px;
    }
}
@media only screen and (max-width : 800px) {
    .home-design {
        background: url(../assets/icons/design-background.svg);
        background-size: cover;
        background-position: bottom;
    }
    .title-map {
        font-size: 18px;
    }
    .description-map {
        font-size: 14px;
    }
    .title-slider {
        font-size: 14px;
    }
    .desing-description {
        font-size: 14px;
    }
    .text-additionally {
        font-size: 14px;
        width: 70%;
    }
    .description-map {
        width: 50%;
    }
    .desing-map {
        width: 370px;
    }
    .desing-personal {
        width: 170px;
    }
    .desing-preview {
        width: 100px;
    }
    .personal-preview {
        width: 50px;
    }
    .hooper {
        height: 390px;
    }
    .btn-grad {
        font-size: 14px;
        width: 130px;
        height: 40px;
    }
}
@media only screen and (max-width : 800px) {
    .description-map {
        width: 100%;
    }
    .design-padding {
        padding: 50px 100px;
    }
}
@media only screen and (max-width : 600px) {
    .home-design {
        background: url(../assets/icons/design-background-mobile.svg);
        background-size: cover;
        background-position: bottom;
    }
    .map-slider {
        display: none;
    }
    .map-slider-mobile {
        display: block;
    }
    .desing-map {
        width: 250px;
    }
    .desing-description {
        width: 40%;
        margin: auto;
    }
    .desing-personal {
        width: 250px;
    }
    .hooper {
        height: 520px;
    }
    .text-additionally {
        font-size: 14px;
        width: 100%;
    }
    .hooper-pagination {
        bottom: -10px;
    }
    .hooper-indicator {
        width: 23px;
        height: 5px;
    }
}
@media only screen and (max-width : 375px) {
    .desing-description {
        width: 35%;
        margin: auto;
    }
    .design-padding {
        padding: 50px 50px;
    }
    .desing-map {
        width: 150px;
    }
    .desing-personal {
        width: 150px;
    }
    .hooper {
        height: 400px;
    }
}
</style>