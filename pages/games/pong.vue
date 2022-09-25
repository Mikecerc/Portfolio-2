<template>
    <div class="game-content">
        <div id="start-menu" v-show="hasStarted == false && hasLost == false && hasWon == false">
           <PongSetup /> 
        </div>
        <div id="game" v-show="hasStarted == true && hasLost == false && hasWon == false">
           <Pong /> 
        </div>
        <div id="lose" v-show="hasStarted == false && hasLost == true && hasWon == false">
           <Lose /> 
        </div>
        <div id="win" v-show="hasStarted == false && hasLost == false && hasWon == true">
           <Win /> 
        </div>
    </div>
</template>
<script setup lang="ts">
import PongSetup from '../../components/pong/pongSetup.vue';
import Pong from '../../components/pong/pong.vue';
import Lose from '../../components/pong/lose.vue';
import Win from '../../components/pong/win.vue';
import { hasStarted, hasLost, hasWon } from './pongLogic';
definePageMeta({
    layout: "game",
});
</script>
<style>
   @import "../../assets/css/build/pages/games/pong.css";
</style>
