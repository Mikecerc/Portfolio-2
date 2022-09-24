<template>
    <div id="start-menu">
        <div class="card">
            <h2>Pong!</h2>
            <div class="difficulty">
                <p>Click here to select the difficulty</p>
                <div class="flex">
                    <div>
                        <button class="button button-selected" id="diff-button1" type="button" onclick="return diffButton(1)">Easy</button>
                    </div>
                    <div><button class="button" id="diff-button2" type="button" onclick="return diffButton(2)">Hard</button></div>
                    <div><button class="button" id="diff-button3" type="button" onclick="return diffButton(3)">Bonkers</button></div>
                </div>
            </div>
            <div class="start">
                <p>Click to start</p>
                <button class="button" id="start-button" type="button" onclick="return startGame()">Start!</button>
            </div>
            <div class="return-to-games">
                <a href="../games.html" target="_self" class="home-button-text" style="right: 1%">Go back</a>
            </div>
        </div>
    </div>
</template>
