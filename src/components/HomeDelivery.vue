<template>
    <div class="delivery-container" id="delivery" data-aos="fade-up"
         data-aos-anchor-placement="top-bottom">
        <div class="delivery">
            <div class="title-map">Доставка</div>
            <div class="description-map">Ваш заказ будет оформлен в стильную подарочную упаковку
                с приятным для Вас подарком. Затем в надежную упаковку для отправки.
            </div>
            <div class="map">
                <div class="map-photo"></div>
                <div>
                    <div class="icon-about">
                        <div class="icon"><img src="@/assets/icons/time.svg"></div>
                        <span class="about-map">
                            Срок изготовления карты: 1-2 дня.
                            В формате PDF, карта будет выслана Вам в течении 2 часов.
                        </span>
                    </div>
                    <div class="icon-about">
                        <div class="icon"><img src="@/assets/icons/delivery.svg"></div>
                        <span class="about-map">
                            Доставка осуществляется службой CDEK и Почтой России.
                            Средняя стоимость 200-400₽, в зависимости от размера карты и города.
                        </span>
                    </div>
                    <div class="icon-about">
                        <div class="icon"><img src="@/assets/icons/truck.svg"></div>
                        <span class="about-map">
                            Средний срок доставки 3-6 дней по России.
                            После отправления Вы получите трек-номер для отслеживания посылки.
                        </span>
                    </div>
                    <a class="btn-grad" target="_blank" href="https://www.instagram.com/cosmomap/">Заказать карту</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeDelivery",
        methods:{
            toggleForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
    }
</script>

<style scoped>
.delivery-container {
    padding: 100px 100px;
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
.delivery {
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
    background: url(../assets/photo/pack.webp);
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
    width: 500px;
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
        width: 450px;
    }
    .btn-grad {
        font-size: 16px;
        width: 150px;
        height: 50px;
    }
}
@media only screen and (max-width : 1024px) {
    .about-map {
        width: 350px;
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
@media only screen and (max-width : 600px) {
    .delivery-container {
        padding: 50px 100px;
    }
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