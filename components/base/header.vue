<template>
    <div id="header-container">
        <div class="logo"></div>
        <nav class="navbar">
            <div class="navbar-links">
                <ul>
                    <li>
                        <div><nuxtLink to="/index.html">Home</nuxtLink></div>
                    </li>
                    <li>
                        <div><nuxtLink to="/projects.html">Projects</nuxtLink></div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="dropbtn">Documentation<i class="fa fa-caret-down"></i></button>
                            <div class="dropdown-content">
                                <div><nuxtLink to="/docs/batteryLog.html">Digital Battery Logging (frc)</nuxtLink></div>
                                <div><nuxtLink to="/docs/batteryMonitoring.html">Automated Battery Monitoring</nuxtLink></div>
                                <div><nuxtLink to="/docs/discordBots.html">Discord Bots</nuxtLink></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div><nuxtLink to="/aboutMe.html">about Me</nuxtLink></div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<style>
@import "../../assets/css/build/layout/header.css";
</style>
