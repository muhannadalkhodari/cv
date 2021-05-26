import { Injectable } from '@angular/core';

@Injectable
({
  providedIn: 'root'
})
export class DataService 
{

  constructor() 
  { }

  simplified: boolean = true;

  themes: theme[] = 
  [
    {
      name: "Stylish Light",
      link: "lightTheme",
      icon: "wb_sunny",
      colorLeft: "lightgray",
      colorRight: "GhostWhite"
    },
    {
      name: "Minimalistic Dark",
      link: "darkTheme",
      icon: "filter_b_and_w",
      colorLeft: "darkgray",
      colorRight: "gray"
    },
    {
      name: "Classic Colored",
      link: "colorsTheme",
      icon: "palette",
      colorLeft: "red",
      colorRight: "pink"
    },
    {
      name: "Cartoonish Isometric",
      link: "cartoonsTheme",
      icon: "location_city",
      colorLeft: "RoyalBlue",
      colorRight: "lawngreen"
    }
    // ,
    // {
    //   name: "Modern Trend",
    //   link: "modernTheme",
    //   icon: "thumb_up",
    //   colorLeft: "purple",
    //   colorRight: "violet"
    // }
  ];

  firstName = 'Muhannad';
  lastName = 'Al-Khodari';
  fullName = this.firstName + ' ' + this.lastName;

  aboutMe_short = 'I love analyzing problems, and designing solutions for them';
  aboutMe_long =
  [
    "Software Developer, Teacher/Trainer and a Content Writer willing to work on a variety of technical and creative projects and fields.",
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
      value: 90
    },
    {
      name: "Web Programming (Angular, ReactJS, JS)",
      icons:
      [
        "devicon-angularjs-plain w3-text-red",
        "devicon-react-original w3-text-light-blue",
        "devicon-javascript-plain w3-text-amber"
      ],
      value: 80
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
      name: "Design (Photoshop, Illustrator, After Effects)",
      icons:
      [
        "devicon-photoshop-plain w3-text-blue",
        "devicon-illustrator-plain w3-orange",
        "devicon-aftereffects-plain w3-text-indigo"
      ],
      value: 60
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
      title: "Frontend Engineer",
      description: "Developing and designing user interfaces for web applications according to clients' requirements.",
      from: "May, 2021",
      to: null,
      inSimplified: false,
      places:
      [
        {
          name: "AlphaApps",
          link: "https://www.alpha-apps.ae/",
          imageUrl: "assets/logos/AlphaApps_logo.png",
          circle: true
        }
      ]
    },
    {
      title: "Software Development Supervisor",
      description: "Holding the responsibility for an assigned developers team and the life-cycle of a software project/module.",
      from: "Feb, 2021",
      to: "Apr, 2021",
      inSimplified: false,
      places:
      [
        {
          name: "EastMed",
          link: "http://eastmed.co/",
          imageUrl: "assets/logos/EastMed_logo.png",
          circle: false
        }
      ]
    },
    {
      title: "Software Developer",
      description: "Analyzing buisness, brain-storming ideas and designing solutions using multiple technolgies.",
      from: "Dec. 2016",
      to: "Jan. 2021",
      inSimplified: false,
      places:
      [
        {
          name: "Syriatel",
          link: "http://www.syriatel.sy",
          imageUrl: "assets/logos/syriatel_logo.png",
          circle: false
        }
      ]
    },
    {
      title: "Robotics Trainer",
      description: "Training the next genarations to lead the robotic future ahead of us, from kindergarten to university.",
      from: "Mar. 2014",
      to: null,
      inSimplified: true,
      places:
      [
        {
          name: "RoboTech Club",
          link: "https://www.facebook.com/HmkRoboTech",
          imageUrl: "assets/logos/RoboTechClub_logo.jpg",
          circle: true
        },
        {
          name: "USWA Academy",
          link: "https://www.facebook.com/%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D9%91%D8%A9-%D8%A3%D8%B3%D9%88%D8%A9-USWA-Academy-1063589860322163/",
          imageUrl: "assets/logos/USWA_logo.jpg",
          circle: true
        },
        // {
        //   name: "Al-Abjadiya Institute for Training",
        //   link: "https://www.facebook.com/aicgrouptraining",
        //   imageUrl: "assets/logos/aic_logo.jpg",
        //   circle: true
        // },
        {
          name: "SyBots",
          link: "https://www.facebook.com/SyBots",
          imageUrl: "assets/logos/SyBots_logo.png",
          circle: true
        }
      ]
    },
    {
      title: "Content Editor",
      description: "Entertainment, science, e-business or robotics, it is our duty to share knowledge on the web.",
      from: "Jan. 2017",
      to: "Jul. 2020",
      inSimplified: false,
      places:
      [
        {
          name: "Facts Mine",
          link: "https://mangam.info/",
          imageUrl: "assets/logos/mangam_logo.png",
          circle: false
        },
        { 
          name: "Robotic Arena",
          link: "https://www.roboticarena.info/",
          imageUrl: "assets/logos/RoboticArena_logo.png",
          circle: true
        },
        { 
          name: "Boraq Group",
          link: "http://boraq-group.com/",
          imageUrl: "assets/logos/boraq_logo.png",
          circle: true
        }
      ]
    },
    {
      title: "Assistant Teacher",
      description: "I was lucky to teach Computer Engineering students about Programming Algorithms and Robotics.",
      from: "Feb. 2015",
      to: "Jun. 2016",
      inSimplified: true,
      places:
      [
        {
          name: "Damascus University",
          link: "http://www.damascusuniversity.edu.sy",
          imageUrl: "assets/logos/DamascusUniversity_logo.jpg",
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
      inSimplified: true,
      places:
      [
        {
          name: "Damascus University",
          link: "http://www.damascusuniversity.edu.sy",
          imageUrl: "assets/logos/DamascusUniversity_logo.jpg",
          circle: true
        }
      ]
    },
    {
      title: "Master of Buisness Administration",
      description: "Syrian Virtual University",
      from: "2018",
      to: "2020",
      inSimplified: true,
      places:
      [
        {
          name: "Syrian Virtual University",
          link: "https://svuonline.org/ar",
          imageUrl: "assets/logos/SVU_logo.png",
          circle: false
        }
      ]
    }
  ];

  contactDetails: contactDetail[] =
  [
    {
      detail: "Muhannad Al-Khodari",
      link: "https://www.linkedin.com/in/muhannad-al-khodari/",
      icon:   "fa fa-linkedin-square fa-fw w3-text-indigo"
    },
    {
      detail: "+963 931874562",
      link: "tel:+963931874562",
      icon:   "fa fa-phone fa-fw w3-text-green"
    },
    {
      detail: "muhannad.al.khodari@outlook.com",
      link: "mailto:muhannad.al.khodari@outlook.com",
      icon:   "fa fa-envelope fa-fw w3-text-blue"
    },
    {
      detail: "Muhannad Al-Khodari",
      link: "https://www.facebook.com/muhannad.al.khodari",
      icon:   "fa fa-facebook-official fa-fw w3-text-indigo"
    }

  ];

  contactPhotoUrl: string = "assets/my_photos/me_brown.jpg";
  contactRedPhotoUrl: string = "assets/my_photos/me_red.jpeg";

  contactHomePhotoUrl: string = "assets/my_photos/me_front.jpg";

  contactLightPhotoUrl: string = "assets/my_photos/me_light_header.jpg";

  contactDarkPhotoUrl: string = "assets/my_photos/me_header.jpg";
  contactSmallDarkPhotoUrl: string = "assets/my_photos/black-me.jpeg";

}

export class skill
{
  name:   string;
  icons:  string[];
  value:  number;
}

export class place
{
  name:     string;
  link:     string;
  imageUrl: string;
  circle:   boolean;
}

export class experience
{
  title:        string;
  description:  string;
  from:         string;
  to:           string;
  inSimplified: boolean;
  places:       place[];
}

class contactDetail
{
  detail: string;
  link:   string;
  icon:   string;
}

export class theme
{
  name:       string;
  link:       string;
  icon:       string;
  colorLeft:  string;
  colorRight: string;
}
