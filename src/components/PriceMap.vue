<template>
    <div class="price" id="price" data-aos="fade-up"
         data-aos-anchor-placement="top-bottom">
        <div class="title-map">Цены</div>
        <div class="description-map">Оригинальные и неповторимые карты звёздного неба,
            приятно удивят Вас своими ценами!</div>
        <div class="map-slider">
       <hooper :itemsToShow="3" :centerMode="true" :wheelControl="false">
            <slide>
                <div class="map">
                    <div class="title-slider">Карта звёздного неба<br>
                        размер рамки 21х30см (А4)</div>
                    <div class="preview-a4"><img src="@/assets/icons/A4.svg"></div>
                    <div class="map-price">1000₽</div>
                </div>
            </slide>
            <slide>
                <div class="map">
                    <div class="title-slider">Карта звёздного неба<br>
                        размер рамки 30х40см (А3)</div>
                    <div class="preview-a3"><img src="@/assets/icons/A3.svg"></div>
                    <div class="map-price">1600₽</div>
                </div>
            </slide>
            <slide>
                <div class="map">
                    <div class="title-slider">Карта звёздного неба<br>
                        размер рамки 40х50см (А2)</div>
                    <div class="preview-a2"><img src="@/assets/icons/A4.svg"></div>
                    <div class="map-price">1800₽</div>
                </div>
            </slide>
            <slide>
                <div class="map">
                    <div class="title-slider">Карта звёздного неба<br>
                        размер рамки 50х70см (А1)</div>
                    <div class="preview-a1"><img src="@/assets/icons/A4.svg"></div>
                    <div class="map-price">2300₽</div>
                </div>
            </slide>
            <slide>
                <div class="map">
                    <div class="title-slider">Карта звёздного неба<br>
                        Формат PDF для печати</div>
                    <div class="preview-pdf"><img src="@/assets/icons/pdf.svg"></div>
                    <div class="map-price">500₽</div>
                </div>
            </slide>
           <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
        </div>

        <div class="map-slider-mobile">
            <hooper :itemsToShow="1" :centerMode="true" :wheelControl="false">
                <slide>
                    <div class="map">
                        <div class="title-slider">Карта звёздного неба<br>
                            размер рамки 21х30см (А4)</div>
                        <div class="preview-a4"><img src="@/assets/icons/A4.svg"></div>
                        <div class="map-price">1000₽</div>
                    </div>
                </slide>
                <slide>
                    <div class="map">
                        <div class="title-slider">Карта звёздного неба<br>
                            размер рамки 30х40см (А3)</div>
                        <div class="preview-a3"><img src="@/assets/icons/A3.svg"></div>
                        <div class="map-price">1300₽</div>
                    </div>
                </slide>
                <slide>
                    <div class="map">
                        <div class="title-slider">Карта звёздного неба<br>
                            размер рамки 40х50см (А2)</div>
                        <div class="preview-a2"><img src="@/assets/icons/A4.svg"></div>
                        <div class="map-price">1800₽</div>
                    </div>
                </slide>
                <slide>
                    <div class="map">
                        <div class="title-slider">Карта звёздного неба<br>
                            размер рамки 50х70см (А1)</div>
                        <div class="preview-a1"><img src="@/assets/icons/A4.svg"></div>
                        <div class="map-price">2300₽</div>
                    </div>
                </slide>
                <slide>
                    <div class="map">
                        <div class="title-slider">Карта звёздного неба<br>
                            Формат PDF для печати</div>
                        <div class="preview-pdf"><img src="@/assets/icons/pdf.svg"></div>
                        <div class="map-price">500₽</div>
                    </div>
                </slide>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
        </div>
        <a class="btn-grad" target="_blank" href="https://www.instagram.com/cosmomap/">Заказать карту</a>
    </div>
</template>

<script>
    import { Hooper, Slide,Navigation as HooperNavigation, Pagination as HooperPagination
    } from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        name: "PriceMap",
        components: {
            Hooper,
            Slide,
            HooperNavigation,
            HooperPagination,
        },
        data() {
            return {
                hooperSettings: {
                    itemsToShow: 3,
                    centerMode: true,
                    wheelControl: false,
                }
            };
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
.price {
    margin-top: 150px;
}
.title-map {
    margin-bottom: 15px;
    font-size: 30px;
    font-weight: 700;
    color: white;
    text-align: center;
}
.description-map {
    width: 28%;
    margin: auto;
    color: white;
    font-size: 20px;
    font-weight: normal;
    text-align: center;
}
.map-slider {

}
.map-slider-mobile {
    display: none;
}
.title-slider {
    margin-top: 60px;
    font-size: 20px;
    font-weight: 700;
    color: white;
    text-align: center;
    text-transform: uppercase;
}
.title-slider-none {
    display: none;
}
.preview-a4 {
    width: 400px;
    margin: auto;
    margin-top: 30px;
}
.preview-a3 {
    width: 440px;
    margin: auto;
    margin-top: 30px;
}
.preview-a2 {
    width: 460px;
    margin: auto;
    margin-top: 30px;
}
.preview-a1 {
    width: 490px;
    margin: auto;
    margin-top: 30px;
}
.preview-pdf {
    width: 220px;
    margin: auto;
    margin-top: 30px;
}
.map-price {
    margin-top: 30px;
    font-size: 25px;
    font-weight: 700;
    color: white;
    text-align: center;
    text-transform: uppercase;
}
.btn-grad {background-image: linear-gradient(to right, rgba(53,224,209,1) 0%, rgba(151,173,226,1) 20%, rgba(238,128,241,1) 50%)}
.btn-grad {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
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
.hooper-slide.is-current {
    transform: scale(1.2);
}
.hooper-slide is-active is-current {
    width: 500px;
}
.hooper {
    height: 580px;
    outline: none;
    border: none;
}
.hooper-next {
    outline: none;
    border: none;
}
.hooper-prev {
    outline: none;
    border: none;
}
@media only screen and (max-width : 1680px) {
    .preview-a4 {
        width: 330px;
    }
    .preview-a3 {
        width: 380px;
    }
    .preview-a2 {
        width: 400px;
    }
    .preview-a1 {
        width: 420px;
    }
    .preview-pdf {
        width: 190px;
    }
    .hooper {
        height: 540px;
    }
}
@media only screen and (max-width : 1536px) {
    .title-map {
        font-size: 30px;
    }
    .description-map {
        font-size: 18px;
    }
    .title-slider {
        font-size: 18px;
    }
    .map-price {
        font-size: 21px;
    }
    .preview-a4 {
        width: 300px;
    }
    .preview-a3 {
        width: 350px;
    }
    .preview-a2 {
        width: 370px;
    }
    .preview-a1 {
        width: 400px;
    }
    .preview-pdf {
        width: 170px;
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
@media only screen and (max-width : 1366px) {
    .preview-a4 {
        width: 270px;
    }
    .preview-a3 {
        width: 320px;
    }
    .preview-a2 {
        width: 340px;
    }
    .preview-a1 {
        width: 350px;
    }
    .preview-pdf {
        width: 150px;
    }
    .hooper {
        height: 450px;
    }
}
@media only screen and (max-width : 1280px) {
    .preview-a4 {
        width: 250px;
    }
    .preview-a3 {
        width: 300px;
    }
    .preview-a2 {
        width: 310px;
    }
    .preview-a1 {
        width: 320px;
    }
    .preview-pdf {
        width: 130px;
    }
    .hooper {
        height: 450px;
    }
}
@media only screen and (max-width : 1024px) {
    .price {
        margin-top: 100px;
    }
    .preview-a4 {
        width: 200px;
    }
    .preview-a3 {
        width: 210px;
    }
    .preview-a2 {
        width: 220px;
    }
    .preview-a1 {
        width: 230px;
    }
    .preview-pdf {
        width: 110px;
    }
    .hooper {
        height: 380px;
    }
}
@media only screen and (max-width : 800px) {
    .title-map {
        font-size: 18px;
    }
    .description-map {
        font-size: 14px;
        width: 100%;
    }
    .title-slider {
        font-size: 14px;
    }
    .map-price {
        font-size: 16px;
    }
    .btn-grad {
        font-size: 14px;
        width: 130px;
        height: 40px;
    }
    .preview-a4 {
        width: 170px;
    }
    .preview-a3 {
        width: 180px;
    }
    .preview-a2 {
        width: 190px;
    }
    .preview-a1 {
        width: 200px;
    }
    .preview-pdf {
        width: 100px;
    }
    .hooper {
        height: 360px;
    }
}
@media only screen and (max-width : 800px) {
    .price {
        margin-top: 50px;
    }
    .map-slider {
        display: none;
    }
    .map-slider-mobile {
        display: block;
    }
    .preview-a4 {
        width: 250px;
    }
    .preview-a3 {
        width: 270px;
    }
    .preview-a2 {
        width: 290px;
    }
    .preview-a1 {
        width: 310px;
    }
    .preview-pdf {
        width: 130px;
    }
    .hooper {
        height: 450px;
    }
    .hooper-pagination {
        bottom: 20px;
    }
    .hooper-indicator {
        width: 23px;
        height: 5px;
    }
}
@media only screen and (max-width : 375px) {
    .price {
        margin-top: 50px;
    }
    .map-slider {
        display: none;
    }
    .map-slider-mobile {
        display: block;
    }
    .preview-a4 {
        width: 190px;
    }
    .preview-a3 {
        width: 200px;
    }
    .preview-a2 {
        width: 210px;
    }
    .preview-a1 {
        width: 220px;
    }
    .preview-pdf {
        width: 100px;
    }
    .hooper {
        height: 400px;
    }
    .hooper-pagination {
        bottom: 20px;
    }
    .hooper-indicator {
        width: 23px;
        height: 5px;
    }
}
</style>