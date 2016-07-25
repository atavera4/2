// Project:  My Resume Website
// Author: Ariel Taveras
//  Date: June 2016.



// Below are HTML String variables used for editing the site.


// These are for the stuff that goes on top of the web page.
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLCurrentDate = "<h4 id='date'>%data%</h4>";
var HTMLCurrentTime = "<h4 id='time'>%data%</h4>";
var HTMLCurrentWeather = "<h4 id='weather'>%data%</h4>";


// These are for the Links to my social media and online contact info.
var HTMLlinkedin = "<a href='http://%data%'>Linkedin.com</a>";
var HTMLResumePDF = "<a href='file:///%data%'>Resume PDF</a>";
var HTMLEmailContact = "<a href='file:///%data%'>E-mail</a>";
var HTMLPhoneContact = "";

// description.
var HTMLBioDescription = "<div id='BioDescription'><%data%</dev>";

// These are for the text that goes on top of the photos placed on the bootstrap grid.

var Projects1 = "<div id='projects1'>%data%</div>";
var Projects2 = "<div id='projects2'>%data%</div>";
var Projects3 = "<div id='projects3'>%data%</div>";


//Display the links on screen.
function ShowLinks()
{
  var link1 = HTMLlinkedin.replace("%data%","Linkedin.com");
  var link2 = HTMLResumePDF.replace("%data%","Users/Ariel/Desktop/Ariel%20Site/Resume.pdf");
  var link3 = HTMLEmailContact.replace("%data%","Users/Ariel/Desktop/Ariel%20Site/C_Projects.html");
  $("#linkedin").append(link1);
  $("#ResumePDF").append(link2);
  $("#email").append(link3);

}
ShowLinks();


// This object is for the description and bio.
var bio =
{
  "name":"Ariel Taveras",
  "School":"Binghamton University",
  "Degree":"B.S Computer Engineering",
  "Degree2":"M.S Electrical and Computer Enginering",
  "age":"23",
  "address":"",
  "phone":""
}

bio.display = function()
{
  for(info in bio)
  {
    var description = HTMLBioDescription.replace("%data%", info);
    $("#description").append(description);
  }
}


var Resume =
{
  "resume":
  [
    {
      "role":"Embedded Systems and Firmware Engineering Intern",
      "organization":"Crestron Electronics",
      "location":"Rockleigh, NJ",
      "date":"May 2015 - August 2015"
    },
    {
      "role":"Undergraduate Course Assistant",
      "organization":"Binghamton Univerisity",
      "location":"Binghamton NY",
      "date":"?????"
    },
    {
      "role":"Undergraduate Course Assistant",
      "organization":"Binghamton Univerisity",
      "location":"Binghamton NY",
      "date":"?????"
    }
  ]
}


// Functions for changing the Appearance/Theme of the site.

//Black Theme
function ClickThemes()
{
  // document.getElementById("Main").classList.remove("TransparentImage");
  document.getElementById("Main").className = "";
  document.getElementById("Main").className = "container TransparentBackgroundBlack";
  document.getElementById("BodyBG").className = "";
  document.getElementById("BodyBG").className = "BodyBackground2";
  document.getElementById("PanelColor").className = "";
  document.getElementById("PanelColor").className = "panel-heading PanelColorThemeBlack"
  document.getElementById("PanelColorTop").className = "";
  document.getElementById("PanelColorTop").className = "panel PanelColorTopThemeBlack";
  document.getElementById("navbar").className = "";
  document.getElementById("navbar").className = "navbar navbar-default";

}
//White Theme
function ClickThemes2()
{
  // document.getElementById("Main").classList.remove("TransparentImage");
  document.getElementById("Main").className = "";
  document.getElementById("Main").className = "container TransparentBackgroundWhite";
  document.getElementById("BodyBG").className = "";
  document.getElementById("BodyBG").className = "BodyBackground1";
  document.getElementById("PanelColor").className = "";
  document.getElementById("PanelColor").className = "panel-heading PanelColorThemeWhite";
  document.getElementById("PanelColorTop").className = "";
  document.getElementById("PanelColorTop").className = "panel PanelColorTopThemeWhite";
  document.getElementById("navbar").className = "";
  document.getElementById("navbar").className = "navbar navbar-inverse";

}
//Red Theme
function ClickThemes3()
{
  // document.getElementById("Main").classList.remove("TransparentImage");
  document.getElementById("Main").className = "";
  document.getElementById("Main").className = "container TransparentBackgroundRed";
  document.getElementById("BodyBG").className = "";
  document.getElementById("BodyBG").className = "BodyBackground3";
}

document.getElementById('theme1').addEventListener("click", ClickThemes);
document.getElementById('theme2').addEventListener("click", ClickThemes2);
document.getElementById('theme3').addEventListener("click", ClickThemes3);
