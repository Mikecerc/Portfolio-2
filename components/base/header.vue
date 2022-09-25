<template>
    <div id="header-container">
        <div class="logo"></div>
        <nav class="navbar-desktop">
            <div class="navbar-links">
                <ul>
                    <li class="spacer"></li>
                    <li>
                        <div><nuxtLink class="link" to="/">Home</nuxtLink></div>
                    </li>
                    <li>
                        <div><nuxtLink class="link" to="/projects">Projects</nuxtLink></div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="dropbtn">Documentation<i class="fa fa-caret-down"></i></button>
                            <div class="dropdown-content">
                                <div><nuxtLink to="/docs/batteryLog">Digital Battery Logging (frc)</nuxtLink></div>
                                <div><nuxtLink to="/docs/batteryMonitoring">Automated Battery Monitoring</nuxtLink></div>
                                <div><nuxtLink to="/docs/discordBots">Discord Bots</nuxtLink></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div><nuxtLink class="link" to="/aboutMe">about Me</nuxtLink></div>
                    </li>
                </ul>
            </div>
        </nav>
        <nav class="navbar-mobile">
            <button class="mobile-main-dropdown" @click="showMenu()">
                <i v-show="(menuOut == false)" class="fa fa-bars"></i>
                <i v-show="(menuOut == true)" class="fa fa-times"></i>
            </button>
            <div v-show="(menuOut == true)" class="mobile-navbar-container">
                <ul>
                    <li>
                        <div><nuxtLink @click="showMenu()" class="link" to="/">Home</nuxtLink></div>
                    </li>
                    <li>
                        <div><nuxtLink @click="showMenu()" class="link" to="/projects">Projects</nuxtLink></div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="dropbtn">Documentation<i class="fa fa-caret-down"></i></button>
                            <div class="dropdown-content">
                                <div><nuxtLink to="/docs/batteryLog" @click="showMenu()">Digital Battery Logging (frc)</nuxtLink></div>
                                <div><nuxtLink to="/docs/batteryMonitoring" @click="showMenu()">Automated Battery Monitoring</nuxtLink></div>
                                <div><nuxtLink to="/docs/discordBots" @click="showMenu()">Discord Bots</nuxtLink></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div><nuxtLink class="link" to="/aboutMe" @click="showMenu()">about Me</nuxtLink></div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<style>
@import "../../assets/css/build/layout/header.css";
</style>
<script setup lang="ts">
import { Ref } from "vue";
let menuOut: Ref<boolean> = ref(false);
function showMenu(): void {
    menuOut.value = !menuOut.value;
}
</script>
