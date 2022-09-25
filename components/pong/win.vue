<template>
    <div id="win">
        <div class="card">
            <h2>You Win!</h2>
            <div class="flex">
                <div><a class="end-link" @click="resetGame()">Play Again</a></div>
                <div><nuxtLink class="end-link" to="/gamesPage">Go back</nuxtLink></div>
            </div>
        </div>
    </div>
</template>
<style>
    @import "../../assets/css/build/pages/games/pong.css";
</style>
<script setup lang="ts">
    import { resetGame } from '~~/pages/games/pongLogic';
</script>