---
title: Code
layout: default
header-text: Programming related items
---

# Relevant links

<div class="proflinks">
    <a class="proflink" href="http://www.codepen.io/adrfig96">Codepen</a>
    <a class="proflink" href="http://www.github.com/adrfig966">Github</a>
</div>

# Projects

<h3 class="project-title">React-based Crpyto Charts</h3>

<a href="http://charts.afigueroa.xyz" target="_blank">Available here</a>

<div class="mockup-container">
    <img class="mockup-image" height="450px" src="https://res.cloudinary.com/dwdubcw9r/image/upload/v1566852182/iPhoneScreen1_ucliws.png">
    <img class="mockup-image" height="450px" src="https://res.cloudinary.com/dwdubcw9r/image/upload/v1566852182/iPhoneScreen2_wjq0j1.png">
</div>

<div class="project-description">
    <div>
        Technical details:
        <ul>
            <li>Coin Gecko API was used for data.</li>
            <li>ChartJS was used for charts.</li>
            <li>From-scratch suggestions box.</li>
            <li>Uses Parcel to bundle assets and allow usage of PostCSS (autoprefixer).</li>
        </ul>
    </div>
    <div>
        I mainly made this because I wanted to figure out how to have a chart on mobile and make it manageable with a big dataset. I ended up prototyping something on CodePen involving the canvas used by the charting library, some container divs, and some JQuery. While I'm not into crypto, it was an easy choice for relevant and free to use data. I chose Coin Gecko as it didn't require authorization and I didn't want to make a proxy server to secure my API keys for a simple project like this.
    </div>

</div>

<h3 class="project-title">React-based S-K-A-T-E Game Tracking</h3>

<a href="http://skate.afigueroa.xyz" target="_blank">Available here</a>
<img class="screenshot-image" height="200px" src="https://res.cloudinary.com/dwdubcw9r/image/upload/v1566846216/SKATEScreen_xucgha.png">

<div class="project-description">
    <div>
        Features:
        <ul>
            <li>Supports up to 10 players, manages turns.</li>
            <li>Automatically adjusts turns as players are removed</li>
            <li>Plain react, only core modules used.</li>
        </ul>
        Future plans:
        <ul>
            <li>Ability to choose who goes first or randomize it</li>
            <li>Ability to continue game with same players after gameover</li>
            <li>Track a session of games using WebStorage</li>
            <li>Input validation :(</li>
        </ul>
    </div>
    <div>
        For starters, if you don't know what a game of SKATE is I suggest you look at this:
        <a href="https://en.wikipedia.org/wiki/Game_of_Skate">Wikipedias description of SKATE</a>
        This idea was something I thought of to solve a problem that I often come across when I'm asked to play a game involving multiple people. As if I didn't already dislike playing with multiple people, it's also very frustrating when people forget their letters. I have seen similar traditional apps before but they are all either on Android or iOS. I wanted something simple that's available in the browser. I plan to make it possible for offline use as well.
    </div>
</div>

### This site!
<div>
    <ul>
        <li>Built with Jekyll</li>
        <li>Regular HTML, CSS, and JS since GH pages doesn't support plugins well.</li>
        <li>I'll likely move it to my VPS where my projects are hosted, for more customizability, once I figure out an easy way to commit changes.</li>
    </ul>
</div>