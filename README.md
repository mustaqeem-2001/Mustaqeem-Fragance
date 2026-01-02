# Purpose

This is a simple front-end web app that displays a list of ittar (fragrance) products.
Users can filter items by price and size (ML) and browse them using pagination.
It’s built using React and Vite, which handle rendering, component structure, and a fast development workflow. The app dynamically processes inputs to display information on the screen using React state and events, replacing the old DOM-manipulation logic from the previous version. HTML and CSS are still used for the page structure and styling.


# Major Features

Display ittar products from a data file
Filter products by: Minimum price & Maximum price
Bottle size (ML)
Pagination (9 items per page)
Responsive layout for mobile, tablet, and desktop
Fixed WhatsApp contact button

# How It Works

Product data is stored in data.js
JavaScript dynamically:
Renders items to the DOM
Filters data based on user input
Handles page navigation
CSS handles layout, styling, and media queries
HTML provides the page structure and form controls


# Technologies Used

React
Vite
Google Fonts
Font Awesome (CDN)
HTML – JSX components ultimately render HTML
CSS – styling and layout
JavaScript (ES6+) – logic inside React components

# Dependencies

Node.js (v20+ recommended)
NPM
React & React DOM
Vite
All dependencies are installed via `npm install`.

# How to Run Locally

Clone the repository: git clone https://github.com/mustaqeem-2001/mustaqeems-fragance.git
Enter terminal within project folder and run the following commands in order:
1) Run `npm install`
2) Run `npm run dev`
