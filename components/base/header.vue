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
            <transition name="mobile-navbar">
                <ul v-show="menuOut == true" class="mobile-navbar-link-container">
                    <li>
                        <div><nuxtLink @click="showMenu()" class="link" to="/">Home</nuxtLink></div>
                    </li>
                    <li>
                        <div><nuxtLink @click="showMenu()" class="link" to="/projects">Projects</nuxtLink></div>
                    </li>
                    <li class="dropdown">
                        <button class="dropbtn" @click="openDropdown()">
                            Documentation<i :class="{ 'fa fa-caret-down': dropOut == true, 'fa fa-caret-right': dropOut == false }"></i>
                        </button>
                    </li>
                    <transition name="mobile-dropdown-item">
                        <ul class="mobile-dropdown-items-container" v-show="dropOut == true">
                            <li>
                                <div>
                                    <nuxtLink to="/docs/batteryLog" class="link drop" @click="showMenu()"
                                        >Digital Battery Logging (frc)</nuxtLink
                                    >
                                </div>
                            </li>
                            <li>
                                <div>
                                    <nuxtLink to="/docs/batteryMonitoring" class="link drop" @click="showMenu()"
                                        >Automated Battery Monitoring</nuxtLink
                                    >
                                </div>
                            </li>
                            <li>
                                <div>
                                    <nuxtLink to="/docs/discordBots" class="link drop" @click="showMenu()">Discord Bots</nuxtLink>
                                </div>
                            </li>
                        </ul>
                    </transition>
                    <li>
                        <div><nuxtLink class="link" to="/aboutMe" @click="showMenu()">about Me</nuxtLink></div>
                    </li>
                </ul>
            </transition>
            <div class="mobile-main-dropdown" @click="showMenu()" :class="{ open: menuOut == true }">
                <span class="menu-bars"></span>
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
let dropOut: Ref<boolean> = ref(false);
function showMenu(): void {
    menuOut.value = !menuOut.value;
}
function openDropdown() {
    dropOut.value = !dropOut.value;
}
</script>
