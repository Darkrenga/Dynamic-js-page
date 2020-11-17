//GLOBAL VARIABLES
const YOURWRAPPERIDHERE = "main"

const CONTENTWRAPPER = document.getElementById(YOURWRAPPERIDHERE);
let myUl = document.getElementById("myUl");
let headerTag;
let contentTag
let j = -1;


//==============================   Calling my functions   ==============================//
navCreation();
checkForLandingPage();


// Creates the nav bar
//Works totally fine, creates the navbar and everything in it. 
//Just need to work out how im gonna change out the pages at the onclick


//The only thing you can edit in this function is what happens 
//on the click, currently it calls a build function of the page
//you wanted to go to
function navCreation() {
    for (const link of links) {
        let li = document.createElement("li");
        li.classList.add("navList");
        j++;
        let anchor = document.createElement("a");
        anchor.setAttribute("id", link.linkInfo.linkName);
        anchor.setAttribute("value", j);
        anchor.innerHTML = link.linkInfo.linkText;
        anchor.onclick = function() {
            let indexInArray = this.getAttribute("value");
            contentCreation(indexInArray);
        }
        
        myUl.appendChild(li);
        li.appendChild(anchor);
    }
}




//On load this function is called and it finds the {  }  with landingPage set to true
//Dont change anything here as it only calls the creation of landingpage
let i = -1;
function checkForLandingPage() {
    for (const item of links) {
        i++;
        if(item.landingPage) {
            contentCreation(i);
        }
    }
}


//Creates the content of a certain page
//Also creates my view
function contentCreation(index) {
    let item = links[index];
    let page = `<div class="pageWrapper">`
    checkForHeadingTag(item.title.format);
    page += `<${headerTag} class="header">${item.title.content}</${headerTag}>`

    page += `</div>`
    CONTENTWRAPPER.innerHTML = page;
}



/**
 * Checks for:
 * 
 * h1
 * 
 * h2
 * 
 * anything else then that and it returns null
 * 
 * @param {obj} titleFormat Takes the path to the thing you want checked
 */
function checkForHeadingTag(titleFormat) {
    if(titleFormat === "Header 1") {
        headerTag = "h1";
    } else if (titleFormat === "Header 2") {
        headerTag = "h2";
    } else if (titleFormat === "Header 3") {
        headerTag = "h3";
    } else {
        headerTag = null; // Sets it at null if there isnt a viable header
    }
    return headerTag;
}



function tagFormatting(titleFormat) {
    if(titleFormat === "Header 1") {
        contentTag = "h1";
    } else if (titleFormat === "Header 2") {
        contentTag = "h2";
    } else if(titleFormat === "Header 3") {

    }else if(titleFormat === "Paragraph") {
        contentTag = "p";
    } else {
        contentTag = null; // Sets it at null if there isnt a viable header
    }
    return contentTag;
}