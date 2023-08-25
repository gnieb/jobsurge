.# JobWave
[Back-End Twin Server Here](https://github.com/gnieb/jobwave-server)

## About
This application was originally developed to help me get a job at a company I REALLY wanted to work for, but they didn't have the jobs posted yet that fit my qualifications. 
**Enter JobWave.**

### Built With

* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)



## Features In Progress

- Deployment
- display to dos by timefrme

## Features Completed 

- react-router-dom v6 routes
- Home Page created with placeholder encouraging quotes and reminders 
- Jobs Page created with job placeholders, waiting for web scraper data
- Ability to add more advice collected from different developers to the collection of wisdom I've gathered.
- SVG lightning icon

## Usage

### Installation
1. Fork and Clone this repo and the back-end repo
   ```sh
   git clone https://github.com/gnieb/jobwave
   git clone https://github.com/gnieb/jobwave-server 
   ```

2. CD into client directory and install npm packages
    ```sh
    cd client
    ```
    ```sh
    npm install
    ```
3. Start the Application
    ```sh
    npm start
    ```
4. Create Server virtual environment 
    ```sh
    pipenv install
    pipenv shell
    ```
5. Start the server
    ```sh
    python app.py
    ```

## Features in Progress
- replace SVG with a small wave
- implement default theme via CSS config
- implement loading state for the JOBS page... the web driver takes ignificant time and resources to pull the data, and I want a nice user experience that shows it's doing something! 



Note: Selenium uses the binary driver to control the web browser of choice. This Python package provides binary drivers for the following supported web browsers: Chrome, Chromium, Brave, Firefox, IE, Edge, and Opera. Note that Safari is not supported.