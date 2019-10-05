---
title: Code
layout: default
header-text: Code-related works
---

# Relevant links

<div class="proflinks">
    <a class="proflink" href="http://www.codepen.io/adrfig96">Codepen</a> | 
    <a class="proflink" href="http://www.github.com/adrfig966">Github</a>
</div>

# Projects
### (Click on images to view full size)

<div class="project-title noselect" data-tab-target="tab1">
    <div class="tab-button-icon">-</div>I'mBoard (Message board system)
</div>

<div class="tab-container" id="tab1" data-tab-group=1 data-tab-open>
    <h3 style="text-align:center;">Note: This project is not done yet, I will add a link when live. For live projects see sections after this one. </h3>
    <div class="mockup-container">
        <img class="mockup-image" src="https://res.cloudinary.com/dwdubcw9r/image/upload/v1570240153/BoardMobile1_p37occ.png">
        <figcaption>Browser screenshots below</figcaption>
    </div>
    <div class="project-description" style="padding-bottom: 10px;">
        <div>
            <h3>Technical Details</h3>
            <ul>
                <li>Back-end server is built on NodeJS using the Express framework</li>
                <li>MongoDB provides a database</li>
                <li>Mongoose is used as an ODM library for Mongo</li>
                <li>Nunjucks is used for front-end templating</li>
                <li>Multer helps with file uploading and validation</li>
                <li>Bootstrap takes care of nearly all of the front end</li>
                <li>MomentJS is used to make formatting post date/time easier</li>
            </ul>
            <h3>Features</h3>
            <ul>
                <li>Fully responsive sizing.</li>
                <li>Each section has a limited amount of posts. Posts are deleted as new posts are made. The deletion is based on the date the post was made and the amount of replies. A new post with few replies will be deleted before an old post with many replies</li>
                <li>Input validation for all fields including file uploads.</li>
                <li>Post time is converted to user's local time.</li>
                <li>Users will automatically be redirected to their responses which will be scrolled to and highlighted.</li>
                <li>>> in a response, before a comment ID, will create a link that will act smimilar to the previous bullet. Useful for replying to other comments.</li>
            </ul>
        </div>
        <div>
            <h3>About</h3>
            This project came about when I was looking in to make a CRUD application that allowed file upload. I considered a few options, such as an Instagram or Twitter clone. Ultimately, I landed on the idea of a messageboard that works like traditional <a href="www.google.com">textboards</a>. These work in a way that saves space in that they delete old/less popular posts when a new post is created. This is appealing to me because I will be running the server on my 5$ VPS soon and using the disk storage to save user images.
            <br><br>
            I first began looking into how to achieve file uploads in Node and quickly found Multer. It was straight forward, so it was an easy choice. The next tool I needed was a templating engine. I found that I really enjoyed the the features of this sites templating engine so I wanted something similar. One thing I did not anticipate was the ridiculous amount of templating engines for Express. It took a good amount of time before I found Nunjucks, an engine very similar to Liquid. MongoDB and Mongoose were an obvious choice as I had already used them in the past. I chose to use Bootstrap to build a front end quicker and focus more on other features. The challenging aspects were mostly found in the deletion of posts in a priority-queue-like manner and removing of the image corresponding to said post.
            <h3>Features left to finish</h3>
            <ul>
                <li>A homepage</li>
                <li>Post excerpt (currently shows entire post in post listing)</li>
                <li>More styling</li>
                <li>Custom file input UI</li>
                <li>Demo script to set database contents on a schedule</li>
                <li>A separate front end after initial version is completed</li>
            </ul>
        </div>
    </div>
    <div class="mockup-container">
        <img class="mockup-image" src="https://res.cloudinary.com/dwdubcw9r/image/upload/v1570240154/BoardMockup1_lgvns2.png">
        <br>
        <figcaption>The post listing for a board section.</figcaption><br>
        <img class="mockup-image" src="https://res.cloudinary.com/dwdubcw9r/image/upload/v1570240153/BoardMockup2_pcmlxn.png">
        <br>
        <figcaption>An example of simple comment replies. By pressing the highlighted comment ID, users can view the comment being refered to in the reply.</figcaption><br>
        <img class="mockup-image" src="https://res.cloudinary.com/dwdubcw9r/image/upload/v1570240153/BoardMockup3_ku1ldq.png"><br>
        <figcaption>Creating a new post is done via a modal. The modal provides input validation, including a bar indicative of file size capacity used.</figcaption>
    </div>
</div>

<div class="project-title noselect" data-tab-target="tab2">
    <div class="tab-button-icon">+</div>React-based Crpyto Charts
</div>

<div class="tab-container" id="tab2" data-tab-group=1>
    <a href="http://charts.afigueroa.xyz" target="_blank">Available here</a>
    <div class="mockup-container">
        <img class="mockup-image" src="https://res.cloudinary.com/dwdubcw9r/image/upload/v1570240156/Mockup2_cjxh3t.png">
        <img class="mockup-image" src="https://res.cloudinary.com/dwdubcw9r/image/upload/v1570240155/Mockup1_zbzrz7.png">
    </div>
    <div class="project-description">
        <div>
            <h3>Technical Details</h3>
            <ul>
                <li>Coin Gecko API provided data</li>
                <li>ChartJS was used for charts</li>
                <li>From-scratch suggestions box</li>
                <li>Uses Parcel to bundle assets</li>
                <li>Babel is used to transpile JS</li>
                <li>PostCSS is used to enable Autoprefixer, this elminates the need for vendor prefixes</li>
            </ul>
            <h3>Features</h3>
            <ul>
                <li>Responsive</li>
                <li>Horizontal zooming function</li>
                <li>Hideable options to maximize screen space for chart</li>
            </ul>
        </div>
        <div>
            <h3>About</h3>
            I mainly made this because it seemed like a challenge to get a chart to look good on mobile and make it manageable with a big dataset. I ended up prototyping something on CodePen involving the canvas element used by the charting library, container divs, and some JQuery. In the end I found that flex-box worked the best when having hideable elements. While I'm not into crypto, it was an easy choice for relevant and free to use data. I chose Coin Gecko as it didn't require authorization and I didn't want to make a proxy server to secure my API keys for a simple project like this.
        </div>
    </div>
</div>

<div class="project-title noselect" data-tab-target="tab3">
    <div class="tab-button-icon">+</div>React-based S-K-A-T-E Game Tracking
</div>

<div class="tab-container" id="tab3" data-tab-group=1>
    <a href="http://skate.afigueroa.xyz" target="_blank">Available here</a>
    <div class="mockup-container">
        <img class="mockup-image" src="https://res.cloudinary.com/dwdubcw9r/image/upload/v1570240157/Mockup3_yyiege.png">
    </div>
    <div class="project-description">
        <div>
            <h3>Features</h3>
            <ul>
                <li>Plain React, only core modules used</li>
                <li>Supports up to 10 players, manages turns</li>
                <li>Automatically adjusts turns as players are removed</li>
                <li>Uses Parcel to bundle assets</li>
            </ul>
            <h3>Future plans</h3>
            <ul>
                <li>Ability to choose who goes first or randomize</li>
                <li>Ability to continue game with same players after gameover</li>
                <li>Track a session of game stats using WebStorage</li>
                <li>Input validation (yikes)</li>
            </ul>
        </div>
        <div>
            <h3>About</h3>
            For starters, if you don't know what a game of SKATE is, you can have a look at this:
            <a href="https://en.wikipedia.org/wiki/Game_of_Skate">Wikipedias description of SKATE</a>.
            This idea was something I thought of to solve a problem that I often come across when I'm asked to play a game involving multiple people. As if I didn't already dislike playing with multiple people, it's also very frustrating when people forget their letters. I have seen similar traditional apps before but they are all either on Android or iOS. I wanted something simple that's available in the browser. I plan to make it possible for offline use as well.
        </div>
    </div>
</div>

<div class="project-title noselect" data-tab-target="tab4">
    <div class="tab-button-icon">+</div>This site
</div>

<div class="tab-container" id="tab4" data-tab-group=1>
    <div>
        <ul>
            <li>Built with Jekyll, a static-site generator built on Ruby</li>
            <li>Fully responsive</li>
            <li>Liquid is used as a templating engine to dynamically render content using layout files</li>
            <li>Regular HTML, CSS, and JS</li>
        </ul>
    </div>
</div>