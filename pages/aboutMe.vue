<template>
    <div class="content-wrapper">
        <div id="about me info" class="card">
            <h1>About Me!</h1>
            <p>
                Hey, I'm Michael. I tinker with various electronics and programming languages. Electrical engineering is my passion and I've
                made / am working on a lot of cool projects, which you can check out
                <nuxtLink to="/projects" style="color: white;">here</nuxtLink>.
            </p>
            <br />
            <p>
                I'm currently a sophomore in Collage and am the former lead of the FRC team
                <a style="color: white;" href="https://lightningrobotics.com" target="_blank">862</a>'s electrical subgroup
            </p>
            <br />
            <p>
                Besides electronics, I also enjoy programming. Currently I have some experience with javascript (including node.js), typescript, python,
                html, css, sass, vuejs, nuxtjs, java, and c++/arduino, although I'm still learning. I'm currently, however, most comfortable
                with javascript and typescript. 
                Additionally I'm familiar with linux, git, github, docker, and proxmox!
            </p>
        </div>

        <div id="about me links" class="card">
            <h3>A little more info</h3>
            <h4 style="text-align: left; padding-left: 80px">Github</h4>
            <p style="padding: 0px 50px">
                On my <a href="https://github.com/mikecerc/" style="color: white;" target="_blank">Github</a>, I have all of the code to my projects. Feel free to
                check it out, it's public.
            </p>
            <img
                src="https://github-readme-stats.vercel.app/api?username=mikecerc&show_icons=true&theme=dracula&count_private=true&title_color=5f356b"
                style="padding: 20px; height: 25vh;"
            />
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mikecerc&langs_count=10&show_icons=true&theme=dracula&count_private=true&title_color=5f356b&layout=compact" 
            style="height: 30vh; padding: 20px;"
            />

            <br />
            <h4 style="text-align: left; padding-left: 80px">Resume</h4>
            <p>If you would like to view my resume you may do so by clicking <nuxtLink style="color: white;" to="/resume">here</nuxtLink>.</p>
            <br />
            <h4 style="text-align: left; padding-left: 80px">Contact Me</h4>
            <p>If you have any questions or inquiries, feel free to reach out by <nuxtLink style="color: white;" to="/contact">emailing me</nuxtLink>.</p>
        </div>
    </div>
</template>
<style>
    @import "../assets/css/build/pages/aboutMe.css"
</style>
