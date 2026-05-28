# Life Systems Lab

## Project Description

Life Systems Lab is a Bootstrap website about building simple, repeatable systems for real life.

The idea behind this site is simple: systems reduce chaos. When the structure is clear, you do not have to rely on motivation to do what needs to get done.

This site focuses on five areas:

* Fitness
* Focus
* Family
* Learning
* Productivity

Each section shows how structure can make daily execution easier. The goal was to build a clean, responsive website while using Bootstrap components and Bootstrap utilities as much as possible.

## Live Website

GitHub Pages Link:
[Add live GitHub Pages link here]

## Repository

GitHub Repository Link:
[Add repository link here]

## Screenshot

![Life Systems Lab homepage](screenshot.png)

## Technologies Used

* HTML5
* CSS3
* Bootstrap 5
* JavaScript
* Google Fonts
* GitHub Pages

## Bootstrap Integration

Bootstrap 5 was added through a CDN.

I used Bootstrap for the main structure of the site, including the layout, spacing, navigation, buttons, cards, grid system, and responsive behavior.

The Bootstrap JavaScript bundle is also included so the interactive components work correctly.

## Bootstrap Components Used

This project uses five Bootstrap components:

1. Carousel
   The carousel is used in the Core Life Systems section. It shows different systems like fitness, focus, family, and learning.

2. Modal
   The modal opens from the hero section button. It explains what a life system is without sending the user to another page.

3. Accordion
   The accordion is used in the System Breakdown section. It keeps the information organized and lets the user open one idea at a time.

4. Tabs
   The tabs are used in the Build Your Own System section. They break the process into three simple steps: identify the problem, create a rule, and track the result.

5. Dropdown
   The dropdown is part of the navigation bar. It gives quick access to the different system categories.

## Project Structure

```text
life-systems-lab/
├── index.html
├── styles.css
├── scripts.js
├── README.md
└── peter-herrmann-unsplash.jpg
```

## How to Run Locally

1. Clone the repository:

```bash
git clone [Add repository link here]
```

2. Open the project folder.

3. Open `index.html` in your browser.

You can also run the project with the Live Server extension in VS Code.

## Custom CSS Explanation

Most of the layout is handled by Bootstrap. I used Bootstrap containers, rows, columns, spacing classes, cards, buttons, nav classes, and responsive utilities instead of writing everything from scratch.

The custom CSS is mostly for the look and feel of the site.

Custom CSS was used for:

* The forest background image
* The dark green and gold color palette
* The Google Font pairing
* The glass-style panels
* The fixed navigation style
* Button color changes
* Card hover effects
* Accordion and tab color changes
* A small mobile adjustment for the background image

I kept the custom CSS focused on design choices that Bootstrap does not handle exactly the way I wanted. Bootstrap handles the structure. The custom CSS gives the site its identity.

## Most Challenging Component

The carousel was the most challenging component.

It has a lot of nested parts. The indicators, active slide, carousel items, controls, and data attributes all have to connect correctly. If one piece is off, the carousel either breaks or does not behave the way it should.

It also took more attention because I wanted it to fit the design of the page instead of looking like a default Bootstrap example.

## Easiest Component

The modal was the easiest component.

Bootstrap makes the modal pretty simple. Once the button has the correct `data-bs-toggle` and `data-bs-target` attributes, Bootstrap handles most of the behavior.

The modal opens, closes, adds the backdrop, and works without needing custom JavaScript.

## How Bootstrap Improved the Code

Bootstrap made the project faster and cleaner.

Instead of building every layout piece manually, I could use Bootstrap’s grid, containers, spacing utilities, buttons, cards, navbar, and responsive classes.

That kept the code more organized and reduced the amount of CSS I had to write.

Bootstrap also helped with the interactive components. The carousel, modal, accordion, tabs, and dropdown all worked through Bootstrap’s built-in JavaScript bundle. That meant I did not need to write custom JavaScript for every interaction.

## Bootstrap Features I Liked

I liked the grid system and spacing utilities the most.

The grid made the layout easier to control on desktop, tablet, and mobile. The spacing utilities also made it faster to adjust margins, padding, and alignment directly in the HTML.

I also liked that Bootstrap gives you working components quickly. Once I understood the structure, I could build faster.

## Bootstrap Features I Disliked

The main thing I disliked is how nested some Bootstrap components can get.

The carousel and navbar especially have a lot of required classes and structure. They work well, but the HTML can get crowded fast.

I also noticed that if you want a site to have its own personality, you still need custom CSS. Bootstrap gives you the structure, but the default styling can look generic if you do not customize it.

## Responsive Design

The site was built to work on desktop and mobile.

Responsive design choices include:

* A navbar that collapses on smaller screens
* Cards that stack on mobile
* Flexible Bootstrap grid layout
* Tabs that adjust on smaller screens
* Responsive containers and spacing
* A mobile background adjustment so the image works better on small screens

## Project Reflection

This project helped me understand where frameworks are useful.

Bootstrap is good for structure, speed, and consistency. It gave me the layout system and the interactive components without having to build everything from zero.

At the same time, I learned that a framework does not replace design decisions. I still had to decide how the site should feel, what the sections should say, and where custom CSS made sense.

The biggest lesson was learning the difference between using Bootstrap for structure and using custom CSS for identity.

Overall, the project showed me that frameworks can speed up development while still leaving room for a custom design.
