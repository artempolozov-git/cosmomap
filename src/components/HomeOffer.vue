<template>
    <div class="gradientBackground">
        <div>
            <div class="offer">Подпишитесь на наc в Instagram и получите
                дополнительный подарок при заказе карты!</div>
            <a target="_blank" class="button" href="https://www.instagram.com/cosmomap/">Подписаться</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeOffer",
    }
</script>

<style scoped>
.gradientBackground {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: gradientBackground 15s ease infinite;
    background: linear-gradient(228deg, #35e0d1, #97ade2, #ee80f1, #4057ff, #aa5cff, #ff3f68);
    background-size: 500% 500%;
    height: 300px;
    width: 100%;
}
@keyframes gradientBackground {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
.offer {
    width: 60%;
    margin: auto;
    font-size: 30px;
    font-weight: 700;
    color: white;
    text-align: center;
}
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin-top: 30px;
    width: 180px;
    height: 60px;
    border-radius: 50px;
    border: 3px solid #fff;
    text-decoration: none;
    transition: opacity .2s ease-in;
}
.button:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: opacity .2s ease-in;
}
@media only screen and (max-width : 1536px) {
    .offer {
        font-size: 27px;
    }
    .button {
        font-size: 16px;
        width: 150px;
        height: 50px;
    }
    .gradientBackground {
        height: 250px;
    }
}
@media only screen and (max-width : 800px) {
    .offer {
        font-size: 18px;
    }
    .button {
        font-size: 14px;
        width: 130px;
        height: 40px;
    }
    .gradientBackground {
        height: 200px;
    }
}
@media only screen and (max-width : 375px) {
    .offer {
        font-size: 16px;
        width: 80%;
    }
}
</style>