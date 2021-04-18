<template>
    <div id="feedback" style="display: none;">

        <div class="overlay">
            <form id="feedback-form" action="https://formspree.io/f/mdopdvln" method="POST" class="form-wrapper WOW animate__fadeInUp">

                <div style="display: block; width: 100%;">
                    <div class="title-form">Заполните форму</div>
                    <div class="button-close">
                        <span style="font-family: 'GoogleSans'" class="closebtn" @click="toggleForm">&times;</span>
                    </div>

                    <div class="data-input">
                        <div class="left-block">
                            <div class="form-group">
                                <label class="form-label">Имя:</label>
                                <input name="name" type="text" class="input-form" placeholder="Как вас зовут?" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Контакты:</label>
                                <input name="number" type="text" class="input-form" placeholder="Укажите способ связи" required>
                            </div>
                            <div class="form-group">
                                <label for="services" class="form-label">Выберите размер рамки:</label>
                                <select name="frame" class="input-form">
                                    <option value="A4">Рамка 20х30см (А4) - 1000₽</option>
                                    <option value="A3">Рамка 30х40см (А3) - 1300₽</option>
                                    <option value="A2">Рамка 40х50см (А2) - 1800₽</option>
                                    <option value="A1">Рамка 50х70см (А1) - 2300₽</option>
                                    <option value="PDF">Формат PDF - 500₽</option>
                                </select>
                            </div>
                        </div>

                        <div class="right-block">
                            <div class="form-group">
                                <label for="services" class="form-label">Выберите дизайн карты:</label>
                                <select name="design" class="input-form">
                                    <option value="Классическая">Классическая</option>
                                    <option value="Персональная">Персональная</option>
                                    <option value="Флуоресцентная">Флуоресцентная</option>
                                    <option value="Галактика">Галактика</option>
                                    <option value="C фотографией">C фотографией</option>
                                    <option value="Детская">Детская</option>
                                    <option value="Стороны света">Стороны света</option>
                                    <option value="Фото города">Фото города</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Напишите свою фразу:</label>
                                <input name="text" type="text" class="input-form" placeholder="Эти звёзды я дарю тебе" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Укажите место и дату события:</label>
                                <input name="location" type="text" class="input-form" placeholder="Санкт-Петербург, 21.05.2018" required>
                            </div>
                        </div>
                    </div>

                    <input type="submit" id="my-form-button" class="feedback-button" value="Отправить">
                    <span class="form-status" id="my-form-status"></span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        components: {
        },
        data() {
            return {};
        },
        computed: {

        },
        methods: {
            toggleForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
        mounted() {

            // get the form elements defined in your form HTML above

            var form = document.getElementById("feedback-form");
            var button = document.getElementById("my-form-button");
            var status = document.getElementById("my-form-status");

            // Success and Error functions for after the form is submitted

            function success() {
                form.reset();
                button.style = "display: none ";
                status.innerHTML = "Спасибо, мы скоро c Вами свяжемся!";
            }

            function error() {
                status.innerHTML = "Произошла ошибка при отправке!";
            }

            // handle the form submission event
            console.log(form)
            form.addEventListener("submit", function(ev) {
                ev.preventDefault();
                var data = new FormData(form);
                ajax(form.method, form.action, data, success, error);
            });


            // helper function for sending an AJAX request

            function ajax(method, url, data, success, error) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url);
                xhr.setRequestHeader("Accept", "application/json");
                xhr.onreadystatechange = function() {
                    if (xhr.readyState !== XMLHttpRequest.DONE) return;
                    if (xhr.status === 200) {
                        success(xhr.response, xhr.responseType);
                    } else {
                        error(xhr.status, xhr.response, xhr.responseType);
                    }
                };
                xhr.send(data);
            }
        }
    };
</script>

<style scoped>
    .WOW {
        animation: fadeInUp;
        animation-duration: 0.3s;
    }
    *{
        box-sizing: border-box;
    }
    .button-close {
        transition: 0.3s;
        position: absolute;
        z-index: 100;
        right: 20px;
        top: 15px;
    }
    .closebtn {
        color: white;
        font-weight: bold;
        font-size: 40px;
        line-height: 24px;
        cursor: pointer;
        transition: opacity .2s ease-in;
    }
    .closebtn:hover {
        opacity: 0.8;
        transition: opacity .2s ease-in;
    }
    .closebtn::selection {
        outline: none;
        background: transparent;
    }
    #feedback {
        height: 100%;
        width: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.4);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
    }
    .overlay {
        height: 100%;
        width: 850px;
        top: 300px;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        overflow: auto;
        z-index: 100;
        position: fixed;
    }
    .form-wrapper {
        display: flex;
        padding: 50px 50px;
        background: url(../assets/icons/feedback-background.svg) 50%;
        background-size: cover;
        background-position: bottom;
        border-radius: 5px;
    }
    .data-input {
        display: flex;
    }
    .left-block {
        width: 50%;
    }
    .right-block {
        width: 50%;
        margin-left: 30px;
    }
    .title-form {
        text-align: center;
        margin-bottom: 30px;
        font-size: 30px;
        font-weight: 700;
        color: white;
    }
    .form-group {
        margin-bottom: 21px;
        display: flex;
        flex-direction: column;
    }
    .form-group-bottom {
        display: flex;
        flex-direction: column;
    }
    .form-label {
        font-family: "FuturaPT";
        color: white;
        font-size: 20px;
        font-weight: normal;
        margin-bottom: 10px;
    }
    .input-form {
        padding: 0 15px;
        height: 45px;
        font-family: "FuturaPT";
        color: #212121;
        font-size: 20px;
        font-weight: normal;
        background-color: white;
        border-radius: 5px;
        border: none;
    }
    .input-form:focus {
        outline: none;
        border: 3px solid #aa5cff;
    }
    .input-form:hover {
        outline: none;
        border: 3px solid #aa5cff;
    }
    .input-form::-webkit-input-placeholder {
        color: rgba(23, 28, 22, 0.71);
        font-family: "FuturaPT";
    }
    .form-group input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .feedback-button {background-image: linear-gradient(to right, rgba(53,224,209,1) 0%, rgba(151,173,226,1) 20%, rgba(238,128,241,1) 50%)}
    .feedback-button {
        display: flex;
        margin: auto;
        justify-content: center;
        width: 180px;
        height: 60px;
        margin-top: 30px;
        color: white;
        font-size: 20px;
        font-family: "FuturaPT";
        font-weight: bold;
        border: none;
        border-radius: 50px;
        transition: 0.5s;
        background-size: 200% auto;
        text-decoration: none;
    }
    .feedback-button:hover {
        cursor: pointer;
        background-position: right center; /* change the direction of the change here */
        text-decoration: none;
    }
    .feedback-button::selection {
        outline: none;
        background: transparent;
    }
    .feedback-button:focus {
        outline: none;
    }
    .form-status{
        font-size: 20px;
        font-family: "FuturaPT";
        font-weight: normal;
        color: #ffffff;
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
    .overlay::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
    .feedback-man > img {
        margin-left: 50px;
        width: 280px;
    }
    @media screen and (max-width: 1680px) {
        .overlay {
            top: 350px;
        }
    }
    @media screen and (max-width: 1536px) {
        .overlay {
            top: 150px;
        }
        .title-form {
            font-size: 21px;
        }
        .form-label {
            font-size: 16px;
        }
        .input-form {
            font-size: 16px;
        }
        .feedback-button {
            font-size: 16px;
            width: 150px;
            height: 50px;
        }
    }
    @media screen and (max-width: 1366px) {

    }
    @media screen and (max-width: 1024px) {
        .data-input {
            display: block;
        }
        .overlay {
            width: 550px;
            top: 10px;
        }
        .title-form {
            font-size: 18px;
            text-align: center;
        }
        .left-block {
            width: 100%;
        }
        .right-block {
            width: 100%;
            margin-left: 0;
        }
        .feedback-button {
            display: flex;
            justify-content: center;
            margin: auto;
            margin-top: 30px;
        }
    }
    @media screen and (max-width: 800px) {
        .overlay {
            top: 450px;
        }
    }
    @media screen and (max-width: 600px) {
        .overlay {
            top: 0px;
            width: auto;
        }
        .form-submit {
            width: 135px;
            height: 35px;
        }
        div .content-wrapper {
            font-size: 20px;
        }
        div .form-wrapper {
            padding: 30px 35px 30px 35px;
            width: 100%;
            height: 100vh;
            align-items: center;
        }
        .input-form {
            font-size: 14px;
        }
        .title-form {
            font-size: 16px;
        }
        .button-close {
            right: 30px;
            top: 25px;
        }
    }
    @media screen and (max-width: 520px) {
        div .overlay {
            width: 100%;
            top: 0px;
        }
        div .form-wrapper {
            padding: 30px 35px 30px 35px;
            width: 100%;
            height: 100vh;
            align-items: center;
        }
        div .form-label {
            font-size: 16px;
        }
        div .form-status {
            font-size: 16px;
        }
        .closebtn {
            font-size: 32px;
            line-height: 0px;
        }
    }
    @media screen and (max-width: 416px) {
        div .form-label {
            font-size: 14px;
        }
        div .form-status {
            font-size: 14px;
        }
        .button-close {
            right: 30px;
            top: 25px;
        }
    }
    @media screen and (max-width: 375px) {
        div .form-wrapper {
            padding: 30px 35px 30px 35px;
            width: 100%;
            height: auto;
        }
        .input-form {
            font-size: 14px;
        }
        .feedback-button {
            width: 150px;
            font-size: 14px;
        }
    }
</style>