
var name = "Ashley Stanbridge";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var skills = ["Computers ", "Programming ", "Javascript "];
 $("#header").append(formattedName);
 $("#header").append(formattedRole);

var bio = {
  "name" : "Ashley",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "021-655-696",
    "email" : "AshleyStanbridge@icloud.com",
    "github" : "Ashley-Stanbridge",
    "twitter" : "@AshleyStanbird",
    "location" : "Christchurch"
  },
  "welcomeMessage" : "Hi! i hate Udacity!",
  "skills" : ["Computers ", "Programming ", "Javascript"],
  "bioPic" : "images/bioPic"
};

var work = {
  "jobs" : [
    {
      "employer" : "Civil and Naval",
      "title" : "Bar Manager",
      "dates" : "2013-2015",
      "description" : "I worked here."
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title": "Sample project 1",
      "dates": "2014",
      "description" : "This is a project!",
      "images": "http://placekitten.com/200/300"
    }
  ]
};



var education = {
    "schools" : [
    {
      "name" : "Unlimited",
      "location" : "Christchurch, New Zealand",
      "degree" : "nothing",
      "majors" : "nothing",
      "dates" : "2007-2011",
      "url" : "https://example.com"
      
    },
    {
     "name" : "CPIT",
      "location" : "Christchurch, New Zealand",
      "degree" : "Bcom",
      "majors" : "Economics",
      "dates" : "2011-2013",
      "url" : "https://example.com" 

    }

    ]
    ,
    "onlineCourses" : [
      {
        "title" : "Javascript",
        "school" : "Udacity",
        "dates" : 2016,
        "url" : "https://example.com" 


      }
    ]

  };


  function displayBio(){
    console.log("display bio");

  if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    
    var contacts = HTMLcontactGeneric.replace("%data%", bio.cotacts);
    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var email = HTMLemail.replace("%data%", bio.contacts.email);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter); 
    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    var location = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(mobile, email, twitter, github, location.contacts);

  }
}

  function displayWork() {
    console.log("display Work");
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedDescription);
  }
}

function displayEducation() {
  for (school in education.schools) {
    console.log("this is education")
        $("#education").append(HTMLschoolStart);
        var name = HTMLschoolName.replace("%data%", education.schools[school].name);
        var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var dates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var location = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var majors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $('.education-entry:last').append(name + degree, dates, location, majors);
        $('.education-entry:last').children('a').attr('href',  education.schools[school].url);
    }
  }






function displayProjects() {
  console.log("display projects")
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $("project-entry:last").append(formattedImage);
       }
    }
  }
}

displayBio();
displayProjects();
displayWork();
displayEducation();

