# JobSurge ⚡
[Server Repo](https://github.com/gnieb/jobwave-server)

![homepage](homescreenshot.png)
![to_dos](todoscreenshot.png)

## About
**SURGE [ v ]:** 
**to move suddenly and powerfully forward or upward.** 

This application is a career dashboard. It was originally developed to help me get a job at a company I REALLY wanted to work for, but at that time, they didn't have the jobs posted that fit my qualifications. 
=> **Enter JobSurge.**
I needed to develop a career dashboard to help me navigate my job search, organize my priorities, and categorize my goals by Day, Week, Month, and Year. JobSurge was built to navigate my transition from Human Resources into tech. 

### Built With

* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)


## Features Completed 


- DASHBOARD FEATURE on home page which displays To Do lists, One random quote from the library of advice from experienced Software Engineers, and a daily reminder to stay hydrated
- JOBS FEATURE - jobs from a company in which I am very interested in working are displayed with links to the job position and application using Selenium's headless Chrome web driver to scrape dynamic data from the company's website.
- - **Note:** Selenium uses the binary driver to control the web browser of choice. This Python package provides binary drivers for the following supported web browsers: Chrome, Chromium, Brave, Firefox, IE, Edge, and Opera. Note that Safari is not supported.
- ADVICE MISC- A library of advice collected from fellow Software Engineers. Ability to add new advice to the collection as I meet more S.E's and gain more wisdom in the industry.
- TO DO FEATURE: Career search to-do's displayed by priority timeframe, with full CRUD actions:
- - able to cross it off for the dopamine hit and show everything you got done that day. 
- - able to remove a to do completely from dashboard when complete
- LOADING - the JOBS feature can take some time to display on the web page due to the headless web driver scraping the data from the other website. For a more pleasant user experience, there are cute little bubbles in the middle of the page to let the user know that something is happening, just a few more seconds!

## Features in Progress
- implement default theme via CSS config


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


