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
                </div>
            </div>
        </div>
    </div>
</template>
<style>
</style>