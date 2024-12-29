# Simple Node.js Project

## Objective
This project aims to help you learn how to initialize a Node.js project, install dependencies, and use npm scripts.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Creating the Main File](#creating-the-main-file)
- [Running the Project](#running-the-project)
- [Conclusion](#conclusion)

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- Basic knowledge of JavaScript and command line usage.

## Installation

### Step 1: Initialize a New Node.js Project
Open your terminal and run the following command to initialize a new Node.js project:
npm init
### Step 2: Install Dependencies
Install the required dependencies using npm:
npm install axios
Install nodemon as a development dependency:
npm install nodemon --save-dev
### Step 3: Add Custom Scripts
Open the package.json file and add the following scripts under the "scripts" section:
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
}
### Step 4: Create index.js
Create a file named index.js in the root directory of your project. This file will fetch and log data from a public API 
Running the Project
### Step 5: Run the Project
You can run the project using either of the following commands:
For production mode:
npm start
For development mode (with automatic restarts on file changes):
npm run dev
### Conclusion
This project serves as a simple introduction to managing a Node.js application with npm. I learned how to initialize a project, install dependencies, and set up scripts for development and production environments.

