<template>
    <div>
        <div class="card">
            <h1>Games!</h1>
            <p>Play some web based games below!</p>
            <nuxtLink class="games-button" to="/games/pong">Pong</nuxtLink>
        </div>
    </div>
</template>
<script setup>
    definePageMeta({
    layout: "default",
});
</script>
<style>@import "../assets/css/build/pages/games.css"</style>
