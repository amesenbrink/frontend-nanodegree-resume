var bio = {
    "name": "Adam Mesenbrink",
    "role": "Sr. Advanced Techinical Support",
    "contacts": {
        "mobile": "214-555-1212",
        "email": "amesenbrink @ gmail.com",
        "twitter": "@amesenbrink",
        "github": "amesenbrink",
        "location": "Roanoke, TX, USA"
    },
    "welcomeMessage": "Believe you can and you're halfway there.  -Theodore Roosevelt",
    "skills": [
        "Windows Server",
        "Linux Server",
        "Operations Manager",
        "Web Hosting",
        "Troubleshooting",
        "Powershell"
    ],
    "biopic": "images/me.jpg",
    "display": "a function"
}

var education = {
    "schools": 
        {
        "name": "Bryan University",
        "location": "Springfield, MO, US",
        "dates": "2001",
        "degree": "Computer Network Specialist",
        "url": "http://bryanu.edu/explore/"
        },
    "onlineCourse" : [
      {
        "school": "Udacity",
        "title": "Front End Web Developer NanoDegree",
        "dates": "2015",
        "url": "https://www.udacity.com"
      },
      {
        "school" : "Skillsoft",
        "title" : "Python Language Basics",
        "dates" : "2014",
        "url" : "http://skillsoft.com"
      },
      {
        "school" : "Lynda.com",
        "title" : "Lightroom 4 Essentials",
        "dates" : "2013",
        "url" : "http://lynda.com"
      },
      {
        "school" : "Lynda.com",
        "title" : "Foundations of Photography",
        "dates" : "2013",
        "url" : "http://lynda.com"
      }
    ],
    "display": "a function"
};

var work  = {
  "jobs" : [
    {
      "title" : "Sr. Advanced Technical Support",
      "employer" : "AT&T",
      "years" : "2013 - 2014",
      "location" : "Irving, TX, USA",
      "description" : "Tier 3 support and automation for AT&T Uverse Operations teams"
    },
    {
      "title" : "Technical Team Lead",
      "employer" : "AT&T",
      "years" : "2010 - 2013",
      "location" : "Irving, TX, USA",
      "description" : "Technical leadership of the Uverse Applications Operations team.  Technical advisory for projects, oversaw two data center migrations."
    },
    {
      "title" : "Technical Support Specialist",
      "employer" : "AT&T",
      "years" : "2004 - 2008",
      "location" : "Springfield MO, USA",
      "description" : "Technical support for the AT&T Consumer Fraud department.  Created automation tools including the Fraudview application which provided employees with fast access to customer records.  Assisted with local PC support, and managed system access" 
    }
  ],
  "display": "a function"
};

var projects = {
  "projects" : [
      {
        "title" : "Manifest Migration",
        "dates" : "September 2013 - December 2013",
        "description" : "The team moved an application that distributed data to 8 million network devices across the US.  I worked to prepare the web servers at the new data center and validate they were ready for the application.  We were able to move the application without interruption of service.",
        "images" : []
      },
      {
        "title" : "Patching ShellShock Vulnerability",
        "dates" : "September 2014",
        "description" : "When a Bash vulnerability was discovered I had to develop and deployment plan to patch over 200 Linux servers in 3 data centers.  A solution was provided and the servers were patched within 4 days of the vulnerability notification.",
        "images" : []
      },
     {
        "title" : "DataCenter Build and Migration",
        "dates" : "2012 - 2013",
        "description" : "I was the technical lead that oversaw the build and implementation of 2 web hosting data centers, the migration of applications to a virtualized environment.",
        "images" : []
      },
      {
        "title" : "Fraudview Web Application",
        "dates" : "2004 - 2007",
        "description" : "I was the front-end web developer for the Fraudview web application.  The application provided quick access to more than a dozen legacy billings systems throughout the country, and displaying account information on a secure web page.  The application consolidated account access and automated information gathering.",
        "images" : []
      }
    ]
};

// function to display the biographical information in the included JSON

bio.display = function() {
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email)); 
  $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email)); 
  $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github)); 
  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
  $("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
  if(bio.skills.length > 0 ) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill;
    for (skill in bio.skills) { 
      formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").prepend(formattedSkill);
      }
  }
};

// function to display the work history information in the included JSON

work.display = function () {
    for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var wEmp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var wTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var wDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
    var wLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var wDec = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var wOut = wEmp + " " + wTitle;
    $(".work-entry:last").append(wOut);
    $(".work-entry:last").append(wDates);
    $(".work-entry:last").append(wLoc);
    $(".work-entry:last").append(wDec);
  };
};

// function to display the project information in the included JSON

projects.display = function() {
  for ( task in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[task].title);
    $(".project-entry:last").append(formattedTitle);
    var formatttedDates = HTMLprojectDates.replace("%data%", projects.projects[task].dates);
    $(".project-entry:last").append(formatttedDates);
    var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[task].description);
    $(".project-entry:last").append(formattedDesc);
    if (projects.projects[task].images.length > 0) {
      for (image in projects.projects[task].images) {
        var projectImage = HTMLprojectImage.replace("%data%", projects.projects[task].images[image]);
        $(".project-entry:last").append(projectImage);
      }
    }
  }
};

// function to display the education information in the included JSON

education.display = function() { 
  if(education.schools.length = 1 ) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools.name);
    $(".education-entry").append(formattedName);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
    $(".education-entry").append(formattedDegree);
    var formattedDate = HTMLschoolDates.replace("%data%", education.schools.dates);
    $(".education-entry").append(formattedDate);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
    $(".education-entry").append(formattedLocation);
  };
  if(education.onlineCourse.length > 0) {
    $("#education").append(HTMLonlineClasses);
    var HTMLOnlineStart = '<div class="education-entry"></div>';
    $("#education").append(HTMLOnlineStart);
    for (course in education.onlineCourse) {
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
      $(".education-entry:last").append(formattedTitle);      
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
      $(".education-entry:last").append(formattedSchool);
      $(".education-entry:last").append('<br>')
      var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
      $(".education-entry:last").append(formattedDate);
      var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourse[course].url);
      $(".education-entry:last").append(formattedUrl);
   };
  }
};


work.display();

bio.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);