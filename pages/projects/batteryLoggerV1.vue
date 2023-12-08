<template>
    <div class="wrapper">
        <div class="card--dark">
            <h2 style="text-align: center; padding-left: 20px">Digital Battery Logger</h2>
            <p style="padding: 0px 50px">
                Being part of an FRC team's electrical subgroup for 4 years, I've picked up on a few things that can be
                improved.
                One
                thing that our team does is record when we use batteries, along with their stats (internal resistance and
                state of
                charge). This practice is generally a good idea, as it allows us to track the usage of a specific battery at
                a
                competition so we can avoid using batteries again too quickly. Additionally, we can use this data to express
                how a
                specific battery is performing overall through out the season. For many years, we've been recording this
                information
                by
                hand, which has its issues, such as poor handwriting, inability to find a pen, running out of room, et
                cetera. So,
                the
                idea of turing this digital was fostered. The idea was to use a raspberry pi and a touchscreen display to
                record
                this
                data. Accomplishing this was quite straightforward. The graphical interface was created with html, css, and
                javascript
                and run via an http server. Using http requests, the data is recorded in a MongoDb database. A big feature
                that I
                wanted
                was to be able to have the logs automatically synced to a google spreadsheet. This was done by using the
                google
            sheets
            API. It's super convenient to have it auto sync to a spreadsheet, so we no longer have to manually
            transcribe the
            data
            for record-keeping purposes.
        </p>
    </div>
</div></template>