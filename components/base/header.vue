<template>
    <div id="header-container">
        <div class="logo"></div>
        <nav class="navbar-desktop">
            <div class="navbar-links">
                <ul>
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
    </div>
</template>
<style>
@import "../../assets/css/build/layout/header.css";
</style>
