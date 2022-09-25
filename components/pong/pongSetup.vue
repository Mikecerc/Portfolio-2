<template>
    <div id="start-menu">
        <div class="card">
            <h2>Pong!</h2>
            <div class="difficulty">
                <p>Click here to select the difficulty</p>
                <div class="flex">
                    <div><button class="button button-selected" @click="diffButton(0)">Easy</button></div>
                    <div><button class="button" @click="diffButton(1)">Hard</button></div>
                    <div><button class="button" @click="diffButton(2)">Bonkers</button></div>
                </div>
            </div>
            <div class="start">
                <p>Click to start</p>
                <button class="button" @click="startGame()">Start!</button>
            </div>
            <div class="return-to-games">
                <nuxtLink to="/gamesPage" class="home-button-text" style="right: 1%">Go back</nuxtLink>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { diffButton, startGame } from "~~/pages/games/pongLogic";
</script>
<style>
    @import "../../assets/css/build/pages/games/pong.css";
</style>
