<template>
    <div class="page-container">
        <div class="page-background">
            <div class="stars">
                <div class="content">
                    <div class="header">
                        <BaseHeader />
                    </div>
                    <div class="page-content">
                        <slot />
                    </div>
                    <div class="footer">
                        <BaseFooter />
                    </div>
                    <div class="background">
                        <div class="glowing_stars">
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                        </div>
                        <div class="earth-moon">
                            <img class="object_earth_close" src="http://salehriaz.com/404Page/img/earth.svg"
                                width="30%">
                            <img class="object_moon_close" src="http://salehriaz.com/404Page/img/moon.svg" width="23%">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style>
@import "../assets/css/build/main.css";
@import "../assets/css/build/layout/background.css";
@import "../assets/css/build/layout/footer.css"
</style>
