<template>
    <div class="page-container">
        <div class="page-background">
            <div class="page stars">
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
                        <img class="object_earth_close" src="../assets/images/earth.svg" />
                        <img class="object_moon_close" src="../assets/images/moon.svg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
</style>
