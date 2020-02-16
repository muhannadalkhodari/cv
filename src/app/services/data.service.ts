import { Injectable } from '@angular/core';

@Injectable
({
  providedIn: 'root'
})
export class DataService 
{

  constructor() 
  { }

  firstName = 'Muhannad';
  lastName = 'Al-Khodari';
  fullName = this.firstName + ' ' + this.lastName;

  aboutMe_short = 'I love analyzing problems, and designing solutions for them';
  aboutMe_long =
  [
    "Assistant Teacher, Robotics Trainer, Graphic designer and a developer willing to work on a variety of technical and creative projects and fields including video games, electronic newspapers, embedded systems, smart house appliance and robotics.",
    "Interested in making people the best at what they can be, from art and programming to learning to cook.",
    "I'm always driven by the end user experience of customers. So, my passion is the futuristic concept of NUI (Natural User Interface) and technology immersion in human life. ",
    "Routines? Sorry, not my thing. I'm always looking for new interesting problems to solve. "
  ];

  skills: skill[] =
  [
    {
      name: "Web Design (HTML, CSS)",
      icons:
      [
        "devicon-html5-plain w3-text-red",
        "devicon-css3-plain w3-text-cyan"
      ],
      value: 80
    },
    {
      name: "Web Programming (Angular, JavaScript)",
      icons:
      [
        "devicon-angularjs-plain w3-text-red",
        "devicon-javascript-plain w3-text-amber"
      ],
      value: 70
    },
    {
      name: "Microsoft Programming (Asp.Net, C#, C++)",
      icons:
      [
        "devicon-dot-net-plain w3-text-blue",
        "devicon-csharp-plain w3-text-deep-purple",
        "devicon-cplusplus-plain w3-text-red"
      ],
      value: 70
    },
    {
      name: "Graphic Design (Photoshop)",
      icons:
      [
        "devicon-photoshop-plain w3-text-blue"
      ],
      value: 70
    },
    {
      name: "Robotics",
      icons:
      [
        "fa fa-reddit-alien w3-text-blue-gray"
      ],
      value: 70
    },
    {
      name: "Electronics",
      icons:
      [
        "fa fa-microchip w3-text-black"
      ],
      value: 60
    }
  ];

  experiences: experience[] = 
  [
    {
      title: "Software Developer",
      description: "Analyzing buisness, brain-storming ideas and designing solutions using multiple technolgies.",
      from: "Dec. 2016",
      to: null,
      places:
      [
        {
          name: "Syriatel",
          link: "http://www.syriatel.sy",
          imageUrl: "assets/syriatel_logo.png",
          circle: false
        }
      ]
    },
    {
      title: "Robotics Trainer",
      description: "Training the next genarations to lead the robotic future ahead of us, from kindergarten to university.",
      from: "Mar. 2014",
      to: null,
      places:
      [
        {
          name: "RoboTech Club",
          link: "https://www.facebook.com/HmkRoboTech",
          imageUrl: "assets/RoboTechClub_logo.jpg",
          circle: true
        },
        {
          name: "USWA Academy",
          link: "https://www.facebook.com/%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D9%91%D8%A9-%D8%A3%D8%B3%D9%88%D8%A9-USWA-Academy-1063589860322163/",
          imageUrl: "assets/USWA_logo.jpg",
          circle: true
        },
        {
          name: "Al-Abjadiya Institute for Training",
          link: "https://www.facebook.com/aicgrouptraining",
          imageUrl: "assets/aic_logo.jpg",
          circle: true
        }
      ]
    },
    {
      title: "Content Editor",
      description: "General entertainment, simplified science or even specialized robotic educational tutorials, it is our duty to expand the Arabic content on the web.",
      from: "Jan. 2017",
      to: null,
      places:
      [
        {
          name: "Facts Mine",
          link: "https://mangam.info/",
          imageUrl: "assets/mangam_logo.png",
          circle: false
        },
        { 
          name: "Robotic Arena",
          link: "https://www.roboticarena.info/",
          imageUrl: "assets/RoboticArena_logo.png",
          circle: true
        }
      ]
    },
    {
      title: "Assistant Teacher",
      description: "Teaching is a calling, not a job. I was lucky to teach Computer Engineering students about Programming Algorithms and Robotics.",
      from: "Feb. 2015",
      to: "Jun. 2016",
      places:
      [
        {
          name: "Damascus University",
          link: "http://www.damascusuniversity.edu.sy",
          imageUrl: "assets/DamascusUniversity_logo.jpg",
          circle: true
        }
      ]
    }
  ];

  studies: experience[] = 
  [
    {
      title: "Computer Engineering",
      description: "Damascus University",
      from: "2008",
      to: "2014",
      places:
      [
        {
          name: "Damascus University",
          link: "http://www.damascusuniversity.edu.sy",
          imageUrl: "assets/DamascusUniversity_logo.jpg",
          circle: true
        }
      ]
    },
    {
      title: "Master of Buisness Administration",
      description: "Syrian Virtual University",
      from: "2018",
      to: "2020",
      places:
      [
        {
          name: "Syrian Virtual University",
          link: "https://svuonline.org/ar",
          imageUrl: "assets/SVU_logo.png",
          circle: false
        }
      ]
    }
  ];

  contactDetails: contactDetail[] =
  [
    {
      detail: "Damascus, Syria",
      icon:   "fa fa-map-marker fa-fw w3-text-red"
    },
    {
      detail: "+963 931874562",
      icon:   "fa fa-phone fa-fw w3-text-green"
    },
    {
      detail: "muhannad.al.khodari@outlook.com",
      icon:   "fa fa-envelope fa-fw w3-text-blue"
    }

  ];

  contactPhotoUrl: string = "assets/me_brown.jpg";
  contactRedPhotoUrl: string = "assets/me_red.jpeg";

  contactDarkPhotoUrl: string = "assets/me_header.jpg";
  contactSmallDarkPhotoUrl: string = "assets/black-me.jpeg";

}

class skill
{
  name: string;
  icons: string[];
  value: number;
}

class place
{
  name: string;
  link: string;
  imageUrl: string;
  circle: boolean;
}

class experience
{
  title: string;
  description: string;
  from: string;
  to: string;
  places: place[];
}

class contactDetail
{
  detail: string;
  icon:   string;
}