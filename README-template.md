# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

The challenge here was to create a notifications page from scratch while matching both the challenge requirements and the design specs below. While not included in the challenge, I've also added behavior to mark individual notifications as read and reduce the unread notifications number when clicking on any links within an unread notification.

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop View](assets/images/screenshot.png)
![Mobile View](assets/images/mobilescreenshot.png)
![Desktop Design Spec](design/desktop-design.jpg)
![Mobile Design Spec](design/mobile-design.jpg)
![Active States Spec](design/active-states.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/odbaruch/notifications-project)
- Live Site URL: [Add live site URL here](https://notifications-project.vercel.app/)

## My process

### Built with

- Semantic HTML5
- CSS
- Flexbox
- JavaScript

### What I learned

#### HTML

Semantic HTML concepts: I started out by using as many semantic elements as I could and then paring them down when they were unnecessary. For example, I originally had the heading wrapped in `<header>` tags and the body of the notifications wrapped in a `<section>`. Upon further reading into the use of these tags, I concluded that they would be confusing to a screen reader as they separate the body of the notifications from their context which is provided by the heading.  
I settled on wrapping the entire section in a `<main>` tag and separating out the heading and body using `<div>` tags:  
```<body>
    <main>
      <div class="notifications-heading">
        <h1 class="notifications-title">
          Notifications
        </h1>
        <div class="notifications-number" id="notifications-number">
          3
        </div>
        <button class="notifications-read" type="button" onclick="clearNotifications()">
          Mark all as read
        </button>
      </div>
      <div class="notifications">
        <div class="notification-card unread">
          <div class="profile-picture-section">
            <img class="profile-picture" src="assets/images/avatar-mark-webber.webp">
          </div>
          <div class="notification-text-section">
            <p class="notification-text">
              <a class="name" href="#">Mark Webber</a> reacted to your recent post <a class="post" href="#">My first tournament today!</a>
              <span class="notification-text-dot"></span>
            </p>
            <time class="notification-timestamp">1m ago</time>
          </div>
        </div>```

 

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
