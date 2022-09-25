<template>
    <div class="score">
        <div id="player-score">0</div>
        <div id="computer-score">0</div>
    </div>
    <div class="home-button"><nuxtLink to="/gamesPage" @click="endGame();" class="home-button-text">Go back</nuxtLink></div>
    <div class="ball" id="ball"></div>
    <div class="paddle left" id="player-paddle"></div>
    <div class="paddle right" id="computer-paddle"></div>
</template>
<script setup lang="ts">
import { endGame } from '~~/pages/games/pongLogic';
</script>
<style>
    @import "../../assets/css/build/pages/games/pong.css";
</style>