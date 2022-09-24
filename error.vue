<template>
    <div class="page-container">
        <div class="page-background">
            <div class="page stars">
                <div class="content">
                    <div class="header">
                        <BaseHeader />
                    </div>
                    <div class="page-content">
                        <Views404 />
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
@import "./assets/css/build/pages/404.css";
</style>
<script setup lang="ts">
useHead({
    title: "404 Not Found",
});
const props = defineProps({
    error: Object,
});
const handleError = () => clearError({ redirect: "/" });
</script>
