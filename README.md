<p align="center">
  <h3 align="center">Selfmade Dynamic project</h3>

  <p align="center">
    A website build up entirely from OBJECTS and JS!
    <br />
    <a href="https://techcollege.dk"><strong>This company requested this »</strong></a>
    <br />
    <br />
  </p>
</p>



<!-- Whats going on in the markdown file -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Integration](#integration-of-the-project)
  * [Editing](#editing-of-the-project)
* [Usage](#usage)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

This is a project that I made because i wanted to work with JS Objects. I also wanted to work with new things in Javascript and i pushed it in here.
* Loops
* Tag Formatting
* Template Strings

### Built With
This project is built with basic HTML and CSS and uses Javascript for building everything and its mother
* JS
* HTML
* CSS (Small styling)



<!-- GETTING STARTED -->
## Getting Started

Before you get started, theres some things you need to do.
Among other things you 


### Installation


1. Clone repositoriet
```sh
git clone https://github.com/Darkrenga/Dynamic-js-page.git
```

2. Enter your ID in `app.js`
```JS
const YOURWRAPPERIDHERE = 'id_name';
```


### Intergration of the project

Her er hvad du skal gøre for at integrer projektet
* HTML
```HTML
  <nav id="mainNav">
    <ul id="myUl">
    </ul>
  </nav>
  <main id="main">

  </main>
```
Links I bunden af documentet
``` HTML
<script src="../JS/linkSwitch.js"></script>
<script src="../JS/app.js"></script>
```




### Editing the project
If you wanna edit something on the pages, you gotta change `LinkSwitch.js`
Here's how:
```JS
let links = [
    {
        //Add this on the page you want to be your landingpage
        landingPage: true,
        contentType: "page",

        // This is for the anchors, your links
        linkInfo: {
            //Name of your link
            linkName: "home",

            //The text you want the link to show
            linkText: "Home"
        },

        // The title of the page, It accepts from Header 1, 2 and 3
        title: {
          //What format you want it to be displayed as
            format: "Header 1",
            
            //The content of the title, the text itself
            content: "HomePage"
        },

        //Subheader, Anything from Header 1, 2, 3 and Paragraph
        subHeader: {
            //What tag you want to be used
            format: "Paragraph",

            //What text you want it to contain
            content: "I'm the subheader of the landing page",
            
        } 
    },
]

```

* View
Go to `app.js` and find the function contentCreation which stands for all the view


<!-- USAGE EXAMPLES -->
## Usage

Her kan du beskrive hvordan du kan bruge it projekt, altså hvordan kan det bruges og indenfor hvilke rammer, exempler på code og demoer passer her ind, beskrivelse af din MVC passer også godt 

_Skal der bruges mere viden kan du refere til [Documentation](https://reactjs.org/docs/getting-started.html)_




<!-- CONTACT -->
## Contact

Navn - [@tgb_Darkrenga](https://twitter.com/tgb_darkrenga) - dpj1@outlook.dk

Project Link: [https://github.com/Darkrenga/Dynamic-js-page](hhttps://github.com/Darkrenga/Dynamic-js-page)
 