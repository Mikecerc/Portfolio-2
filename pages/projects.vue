<template>
    <div class="wrapper">
        <div class="card">
            <h1 class="projects-header">Projects</h1>
            <div class="flex-container">
                <div class="project-spacer"></div>
                <div class="button">
                    <button class="project-button project-button-selected" @click="handleClick(0)">Digital Battery Log</button>
                </div>
                <div class="button">
                    <button class="project-button project-button-deselected" @click="handleClick(1)">Battery Monitoring</button>
                </div>
                <div class="button">
                    <button class="project-button project-button-deselected" @click="handleClick(2)">Discord bots</button>
                </div>
                <div class="button">
                    <button class="project-button project-button-deselected" @click="handleClick(3)">Electronic fireworks display</button>
                </div>
                <div class="project-spacer"></div>
            </div>
            <div id="batteryLog" v-if="project == 0">
                <h2 style="text-align: left; padding-left: 20px">Digital Battery Logger</h2>
                <p style="padding: 0px 50px">
                    Being part of an frc team's electrical subgroup for 4 years, I've picked up on a few things that can be improved. One
                    thing that our team does is record when we use batteries, along with their stats (internal resistance and state of
                    charge). This practice is generally a good idea, as it allows us to track the usage of a specific battery at a
                    competition so we can avoid using batteries again too quickly. Additionally, we can use this data to express how a
                    specific battery is performing overall through out the season. For many years, we've been recording this information by
                    hand, which has its issues, such as poor handwriting, inability to find a pen, running out of room, et cetera. So, the
                    idea of turing this digital was fostered. The idea was to use a raspberry pi and a touchscreen display to record this
                    data. Accomplishing this was quite straightforward. The graphical interface was created with html, css, and javascript
                    and run via an http server. Using http requests, the data is recorded in a MongoDb database. A big feature that I wanted
                    was to be able to have the logs automatically synced to a google spreadsheet. This was done by using the google sheets
                    API. It's super convenient to have it auto sync to a spreadsheet, so we no longer have to manually transcribe the data
                    for record-keeping purposes.
                </p>
            </div>
            <div id="batteryMonitoring" v-else-if="project == 1">
                <p>Under Construction</p>
            </div>
            <div id="discordBots" v-else-if="project == 2">
                <p>Under Construction</p>
            </div>
            <div id="fireworks" v-else-if="project == 3">
                <p>Under Construction</p>
            </div>
        </div>
    </div>
</template>
<script setup>
let project = ref(0);
let isClient;
onMounted(() => (isClient = true));
const handleClick = (button) => {
    let ary = [];
    Object.entries(document.querySelector(".flex-container").children).forEach((element) => {
        if (element[1].firstElementChild) {
            ary.push(element[1].firstElementChild);
        }
    });
    ary.forEach((e, index) => {
        e.classList.remove("project-button-selected");
        e.classList.add("project-button-deselected");
        if (index == button) {
            e.classList.add("project-button-selected");
            e.classList.remove("project-button-deselected");
        }
    });
    project.value = button;
};
</script>
<style>
@import "../assets/css/build/pages/projects.css";
</style>
