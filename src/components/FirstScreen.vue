<template>
    <div class="background" id="top">
        <div class="first-screen">
            <fs-header></fs-header>
            <div class="title-container">
                <div>
                    <div class="title">Ваша персональная звёздная карта</div>
                    <div class="description">Cosmomap - это карта с точным расположением
                        звёзд на небе в момент Вашего важного события!</div>
                    <div class="woman-flying levitate"><img src="@/assets/icons/woman-flying.svg"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FsHeader from "@/components/FsHeader";
    export default {
        name: "FirstScreen",
        components: {FsHeader}
    }
</script>

<style scoped>
.background {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: url(../assets/icons/first-background.svg);
    background-size: cover;
    background-position: bottom;
}
.first-screen {
    width: 100%;
    padding: 50px 100px;
}
.title-container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
.title {
    text-align: center;
    font-size: 3vw;
    color: white;
    font-weight: 700;
}
.description {
    width: 60%;
    margin: auto;
    margin-top: 10px;
    text-align: center;
    font-size: 1.5vw;
    color: white;
    font-weight: normal;
}
.woman-flying {
    width: 550px;
    margin: auto;
    margin-top: 30px;
}
@keyframes do-levitation {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(0, 0.5em);
    }
}
.levitate {
    animation: do-levitation 1.0s alternate ease-in-out infinite;
}
@media only screen and (max-width : 1536px) {
    .woman-flying {
        width: 450px;
    }
    .title-container {
        margin-top: 30px;
    }
}
@media only screen and (max-width : 1366px) {
    .woman-flying {
        width: 350px;
    }
    .title {
        text-align: center;
        font-size: 2vw;
    }
    .description {
        font-size: 1vw;
    }
}
@media only screen and (max-width : 1024px) {
    .woman-flying {
        width: 400px;
    }
    .title-container {
        margin-top: 30px;
    }
}
@media only screen and (max-width : 900px) {
    .first-screen {
        padding: 50px;
    }
    .woman-flying {
        width: 300px;
        margin-bottom: 50px;
    }
    .background {
        height: auto;
    }
}
@media only screen and (max-width : 600px) {
    .title {
        font-size: 25px;
    }
    .description {
        font-size: 18px;
        width: 100%;
    }
}
@media only screen and (max-width : 375px) {
    .first-screen {
        padding: 50px 0;
    }
    .title {
        font-size: 18px;
    }
    .description {
        font-size: 14px;
        width: 80%;
    }
}
</style>