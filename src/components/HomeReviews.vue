<template>
    <div class="reviews" id="review" data-aos="fade-up"
         data-aos-anchor-placement="top-bottom">
        <div class="title-review">Отзывы</div>
        <div class="description-review">Мы очень рады получать от Вас обратную связь!</div>
        <div class="reviews-block">
            <div class="first-review">
                <div class="avatar"></div>
                <div class="review-container">
                    <div class="name">Анастасия</div>
                    <div class="like"><img src="@/assets/icons/like.svg"></div>
                    <div class="review-text">Спасибо за те эмоции, которые подарили мне 💖
                        Бесконечно благодарна Вам за такую красоту.
                        Работа сделана стильно, быстро и качественно!
                    </div>
                </div>
            </div>
            <div class="first-review">
                <div class="avatar-evgenia"></div>
                <div class="review-container">
                    <div class="name">Евгения</div>
                    <div class="like"><img src="@/assets/icons/like.svg"></div>
                    <div class="review-text">Огромное Вам спасибо! В живую смотрится даже лучше чем я себе представляла! 👍
                        Я просто в восторге! Обязательно обращусь к Вам ещё с другой памятной датой.
                    </div>
                </div>
            </div>
            <div class="first-review">
                <div class="avatar-anna"></div>
                <div class="review-container">
                    <div class="name">Анна</div>
                    <div class="like"><img src="@/assets/icons/like.svg"></div>
                    <div class="review-text">Забрала свою карту звездного неба.Она нереально красивая 😊
                        Отдельное спасибо за прекрасный подарок внутри!
                        Всё сделано быстро и с любовью!
                    </div>
                </div>
            </div>
            <div class="first-review">
                <div class="avatar-anastasia"></div>
                <div class="review-container">
                    <div class="name">Анастасия</div>
                    <div class="like"><img src="@/assets/icons/like.svg"></div>
                    <div class="review-text">Здравствуйте, мой парень в восторге 😍 я тоже!
                        Спасибо за оперативность и качество работы!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeReviews"
    }
</script>

<style scoped>
.reviews {
    display: block;
    padding: 0px 200px;
}
.review-container {
    width: 70%;
    margin-left: 30px;
}
.title-review {
    font-size: 30px;
    font-weight: 700;
    color: #212121;
    text-align: center;
}
.description-review {
    margin-top: 15px;
    color: #212121;
    font-size: 20px;
    font-weight: normal;
    text-align: center;
}
.reviews-block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    margin-top: 50px;
}
.first-review {
    display: flex;
    align-items: center;
    padding: 50px;
    height: 150px;
    background-color: #EFEFEF;
    border-radius: 100px;
}
.avatar {
    background: url(../assets/photo/anastasia.webp);
    background-size: cover;
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.avatar-evgenia {
    background: url(../assets/photo/evgenia.webp);
    background-size: cover;
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.avatar-anna {
    background: url(../assets/photo/anna.webp);
    background-size: cover;
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.avatar-anastasia {
    background: url(../assets/photo/nastya.webp);
    background-size: cover;
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.name {
    font-size: 20px;
    color: #212121;
    font-weight: bold;
}
.review-text {
    width: 100%;
    font-size: 20px;
    color: #212121;
    font-weight: normal;
}
.like {
    width: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
}
@media only screen and (max-width : 1680px) {
    .reviews {
        padding: 0px 100px;
    }
}
@media only screen and (max-width : 1536px) {
    .title-review {
        font-size: 30px;
    }
    .description-review {
        font-size: 18px;
    }
    .name {
        font-size: 18px;
    }
    .review-text {
        font-size: 18px;
    }
    .like {
        width: 25px;
    }
    .avatar,.avatar-anastasia,.avatar-evgenia,.avatar-anna {
        width: 120px;
        height: 120px;
    }
}
@media only screen and (max-width : 1536px) {
    .reviews {
        padding: 0px 60px;
    }
}
@media only screen and (max-width : 1024px) {
    .reviews-block {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 1fr);
    }
}
@media only screen and (max-width : 800px) {
    .title-review {
        font-size: 18px;
    }
    .description-review {
        font-size: 14px;
    }
    .name {
        font-size: 14px;
    }
    .review-text {
        font-size: 14px;
    }
    .like {
        width: 20px;
    }
    .avatar,.avatar-anastasia,.avatar-evgenia,.avatar-anna {
        width: 100px;
        height: 100px;
    }
    .first-review {
        height: 100px;
    }
}
@media only screen and (max-width : 600px) {
    .first-review {
        padding: 35px;
    }
    .reviews {
        padding: 0px 10px;
    }
    .reviews-block {
        grid-column-gap: 30px;
        grid-row-gap: 30px;
    }
}
@media only screen and (max-width : 550px) {
    .avatar,.avatar-anastasia,.avatar-evgenia,.avatar-anna {
        display: none;
    }
    .review-container {
        width: 100%;
        margin-left: 0;
        text-align: center;
    }
    .like {
        display: none;
    }
    .review-text {
        margin-top: 10px;
    }
    .reviews-block {
        margin-top: 30px;
    }
}
</style>