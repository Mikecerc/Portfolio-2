<template>
    <div class="wrapper">
        <div class="card--dark">
            <h1>Battery Logger V2</h1>
            <p style="padding: 0px 100px;">
                    There were a lot of things I didnt like about the first version of the battery logger. While it was
                technically functional, there were a lot of downfalls.
                During the design stage, we went back and forth on whether or not to use a touchscreen. Ultimatly, we
                decided to use one, however most of the program was built
                with the intention of using a number keypad. While it still worked, it was less than ideal. Additionally, I
                had been building my programming skills, and I wanted
                to rewrite the program with a javascript framework, to make usability more practical and the design eaiser.
                I also wanted to add a few features, such as the ability to configure
                settings from the app, and the ability to view more complex logs from the app and filter them. So I decided
                to redesign the app from the ground up. The hardware platorm remained
                the same - a raspberry pi and a touchscreen display - however the software couldn't be more different. For
                version 2, I decided to use nuxtJs 3.0, a subset of vueJs,
                as well as electron to package the app into an appImage executable.
            </p>
            <br>
            <p style="padding: 0px 100px;">
                Getting Nuxt to play nice with electron was a bit of a challenge. What I was trying to do hasn't really been
                documented well so there was a lot of configurations options
                I had to play around with in order to get it to function. I also had to learn how to use the electron API,
                which was a bit of a challenge. The architecture is roughly represented by the following:
                all of the data runs through Electron's InterProcess Communication (IPC) system. The main process is
                responsible for handling the database and the electron app, and the renderer process is responsible for
            hosting the nuxt app.
            There are data stores on both the front and backend of the program, communincating through IPC.
        </p>
        <p>
            You can read the documentation on this project <a style="color: white;"
                href="https://github.com/frc-862/Digital-Battery-Log-v2">here</a> for detailed installation instructions
            as well as architecture overview
        </p>
    </div>
</div></template>