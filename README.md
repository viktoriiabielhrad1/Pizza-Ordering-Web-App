Pizza Ordering Web App
-
A full‑stack food ordering system built with Next.js and MongoDB, deployed on Vercel.
The app provides a complete ordering workflow including browsing products, viewing details,
adding items to cart, checkout, order confirmation, and user authentication.

Overview
-
The project implements a modern pizza ordering experience with a global layout, responsive pages,
dynamic routing, and persistent data storage. Wireframes guided the design of all pages: Home,
Menu, Product View, Cart, Checkout, Login, Register, and Thank You.

Features
-
Global Layout;
Shared header, navigation tabs, and footer;
Logo and contact information;
Styled MUI Tabs for navigation;
Background image and consistent UI across all pages;

Home Page
-
Promotional pizza deals;
Product previews with images and descriptions;
"Order Now" buttons linking to dynamic product pages;

Menu (Dashboard)
-
Displays all pizzas and drinks;
"More Info" links to product details;

Product View Page
-
Dynamic routing using query parameters;
Product image, description, size selection, quantity controls;
Add‑to‑cart functionality;

Cart Page
-
Lists all items added by the user;
Quantity, size, price, and remove option;
Total calculation and checkout button;

Checkout Page
-
Delivery address input;
Payment method selection;
Order summary and confirmation button;

Thank You Page
-
Order number;
Estimated delivery time;
Navigation back to home;

Authentication
-
Login and Register pages;
User creation stored in MongoDB;
Login history stored in the login collection;

Database (MongoDB)
-
Collections used:
products – pizza/drink details, sizes, images;
users – registration data;
orders – items, totals, timestamps;
cart – cart items;
login – login activity tracking.

Technologies
-
Next.js ;
React;
MongoDB;
MUI components;
CSS modules and inline styling;
Vercel deployment --> https://pizzaordering-plum.vercel.app/

Purpose
-
This project demonstrates full‑stack development using Next.js, dynamic routing, UI design, 
and MongoDB integration. It covers the complete workflow of a food ordering system from browsing
products to placing an order.
