<template>
    <div class="footer-container">
        <div class="footer-desktop">
            <div><a href="https://www.github.com/mikecerc" target="_blank" class="social-footer-icons"><i
                        class="fa fa-github" aria-hidden="true"></i></a></div>
            <div>
                <nuxtLink to="./pages/contact.html" class="social-footer-icons"><i class="fa fa-envelope"
                        aria-hidden="true"></i></nuxtLink>
            </div>
            <div>
                <nuxtLink to="./pages/resume.html" class="social-footer-icons"><i class="fa fa-file-word-o"
                        aria-hidden="true"></i></nuxtLink>
            </div>
            <div>
                <nuxtLink too="./pages/games.html" class="social-footer-icons"><i class="fa fa-gamepad"
                        aria-hidden="true"></i></nuxtLink>
            </div>

        </div>
    </div>
</template>
<style>
@import "../../assets/css/build/layout/footer.css";
</style>