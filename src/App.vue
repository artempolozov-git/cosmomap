<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div id="app-content">
      <transition name="app-router-fade" mode="out-in">
        <router-view :key="defaultViewKey"></router-view>
      </transition>
    </div>
    <router-view name="footer"></router-view>
    <feedback></feedback>
  </div>
</template>
<script>

  import Feedback from "@/components/Feedback";
  export default {
    components: {
      Feedback

    },
    computed: {
      defaultViewKey: function() {
        return this.$route.name;
      }
    }
  }
</script>
<style>
  html, body {
    height: 100%;
  }
  body {
    margin: initial;
    font-family: FuturaPT;
  }
  #app {
    flex-direction: column;
    min-height: 100%;
  }
  @font-face {
    font-family: FuturaPT;
    src: url('./assets/FuturaPT-Medium.ttf');
    font-weight: bold;
  }
  @font-face {
    font-family: FuturaPT;
    src: url('./assets/FuturaPT-Book.ttf');
    font-weight: normal;
  }
  @font-face {
    font-family: FuturaPT;
    src: url('./assets/FuturaPT-Light.ttf');
    font-weight: 500;
  }
  #app-content {
    flex: 1 0 auto;
    max-width: 1920px;
    align-self: center;
  }
</style>