<template>
    <div class="about-container" id="about" data-aos="fade-up"
         data-aos-anchor-placement="top-bottom">
        <div class="about">
            <div class="title-map">Что такое карта звёздного неба?</div>
            <div class="description-map">Карта звёздного неба- это идеальный подарок на любой случай!
                Укажите место и дату Вашего важного события и на основе полученных данных мы создадим Ваше звёздное небо!
            </div>
            <div class="map">
                <div class="map-photo"></div>
                <div>
                    <div class="icon-about">
                        <div class="icon"><img src="@/assets/icons/constellation.svg"></div>
                        <span class="about-map">
                            Каждый плакат уникален! Настоящие созвездия,
                            рассчитанные на основе предоставленных Вами данных!
                        </span>
                    </div>
                    <div class="icon-about">
                        <div class="icon"><img src="@/assets/icons/printer.svg"></div>
                        <span class="about-map">
                            Печать на высококачественной матовой бумаге,
                            устойчивой к ультрафиолетовому излучению!
                        </span>
                    </div>
                    <div class="icon-about">
                        <div class="icon"><img src="@/assets/icons/magic-wand.svg"></div>
                        <span class="about-map">
                           Создайте персональный дизайн звёздной карты
                            с Вашей фразой!
                        </span>
                    </div>
                    <a target="_blank" href="https://www.instagram.com/cosmomap/" class="btn-grad">Заказать карту</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutMap",
        methods:{
            toggleForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
    }
</script>

<style scoped>
.about-container {
    display: flex;
    justify-content: center;
}
.title-map {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    color: #212121;
}
.description-map {
    text-align: center;
    width: 60%;
    margin: auto;
    margin-top: 15px;
    color: #212121;
    font-size: 20px;
    font-weight: normal;
}
.about {
    display: block;
}
.map {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.map-photo {
    margin-right: 30px;
    width: 400px;
    height: 550px;
    background: url(../assets/photo/about-map.webp);
    background-size: cover;
    background-position: bottom;
    border-radius: 5px;
}
.icon {
    width: 100px;
}
.icon-about {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}
.about-map {
    width: 400px;
    margin-left: 15px;
    color: #212121;
    font-size: 20px;
    font-weight: normal;
}
.btn-grad {background-image: linear-gradient(to right, rgba(53,224,209,1) 0%, rgba(151,173,226,1) 20%, rgba(238,128,241,1) 50%)}
.btn-grad {
    display: flex;
    justify-content: center;
    align-items: center;
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
@media only screen and (max-width : 1536px) {
    .title-map {
        font-size: 30px;
    }
    .description-map {
        font-size: 18px;
    }
    .map-photo {
        width: 400px;
        height: 550px;
    }
    .icon {
        width: 70px;
    }
    .about-map {
        font-size: 18px;
    }
    .btn-grad {
        font-size: 16px;
        width: 150px;
        height: 50px;
    }
}
@media only screen and (max-width : 800px) {
    .title-map {
        font-size: 18px;
    }
    .description-map {
        font-size: 14px;
        width: 70%;
    }
    .about-map {
        font-size: 14px;
        width: 300px;
    }
    .btn-grad {
        font-size: 14px;
        width: 130px;
        height: 40px;
    }
    .icon {
        width: 50px;
    }
    .map-photo {
        width: 300px;
        height: 450px;
    }
}
@media only screen and (max-width : 800px) {
    .icon-about {
        margin-bottom: 15px;
    }
    .title-map {
        font-size: 18px;
    }
    .description-map {
        font-size: 14px;
        width: 80%;
    }
    .about-map {
        font-size: 14px;
        width: 200px;
    }
    .map-photo {
        width: 190px;
        height: 290px;
        margin-right: 15px;
    }
}
@media only screen and (max-width : 375px) {
    .description-map {
        width: 100%;
    }
    .map-photo {
        display: none;
    }
    .btn-grad {
        margin: auto;
    }
}
</style>