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
    "Assistant Teacher, Robotics Trainer, Graphic designer, and a developer willing to work on a variety of technical and creative projects and fields including video games, electronic newspapers, embedded systems, smart house appliance and robotics.",
    "Interested in making people the best at what they can be, from art and programming to learning to cook.",
    "My passion is the concept of NUI (Natural User Interface) and technology immersion in human life. ",
    "Always looking for interesting problems to solve. "
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
          imageUrl: "http://www.syriatel.sy/sites/all/themes/syriatel/logo.png",
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
          imageUrl: "https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/15032766_1011655165629244_8163403390277347051_n.jpg?_nc_cat=104&_nc_ohc=XAdpZJbIDyYAX_Vsi74&_nc_ht=scontent-mrs2-1.xx&oh=5eaf7cc59d13992db7803e1ba6459cb4&oe=5ED25322",
          circle: true
        },
        {
          name: "USWA Academy",
          link: "https://www.facebook.com/%D8%A3%D9%83%D8%A7%D8%AF%D9%8A%D9%85%D9%8A%D9%91%D8%A9-%D8%A3%D8%B3%D9%88%D8%A9-USWA-Academy-1063589860322163/",
          imageUrl: "https://scontent-mrs2-2.xx.fbcdn.net/v/t1.0-9/44272_1258967160784431_190970510413239793_n.jpg?_nc_cat=106&_nc_ohc=B4Q6uptaDc4AX_1L1Rl&_nc_ht=scontent-mrs2-2.xx&oh=c6d382fec3758264c0c05600f6a9d0cd&oe=5ECF6FB4",
          circle: true
        },
        {
          name: "Al-Abjadiya Institute for Training",
          link: "https://www.facebook.com/aicgrouptraining",
          imageUrl: "https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/74526543_354723598642018_4600192668763422720_n.jpg?_nc_cat=103&_nc_ohc=aVFVdhfjavIAX85N9SU&_nc_ht=scontent-mrs2-1.xx&oh=0373dd6b52f8a2cc6b2236d110d45915&oe=5ED8BCBB",
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
          imageUrl: "https://mangam.info/wp-content/uploads/2019/01/identity.png",
          circle: false
        },
        { 
          name: "Robotic Arena",
          link: "https://www.roboticarena.info/",
          imageUrl: "https://scontent-mrs2-1.xx.fbcdn.net/v/t31.0-8/p960x960/16113320_239801916462280_3649860450475779002_o.png?_nc_cat=103&_nc_ohc=zYLP2GV-Qq0AX9QGcVQ&_nc_ht=scontent-mrs2-1.xx&oh=eda506e39873a73747d24230d047c5ab&oe=5E9A8DFF",
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
          imageUrl: "http://www.damascusuniversity.edu.sy/FCKBIH/image/Images%201/q.jpg",
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
          imageUrl: "http://www.damascusuniversity.edu.sy/FCKBIH/image/Images%201/q.jpg",
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
          imageUrl: "https://svuonline.org/sites/all/themes/atsvu/css/images/logo.png",
          circle: false
        }
      ]
    }
  ];

  contactDetails: contactDetail[] =
  [
    {
      detail: "Damascus, Syria",
      icon:   "fa fa-map-marker fa-fw"
    },
    {
      detail: "+963 931874562",
      icon:   "fa fa-phone fa-fw"
    },
    {
      detail: "muhannad.al.khodari@outlook.com",
      icon:   "fa fa-envelope fa-fw"
    }

  ];

  contactPhotoUrl: string = "https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/s960x960/79756462_2595092047194199_4987843922840518656_o.jpg?_nc_cat=105&_nc_ohc=snwz_x_InB4AX94BlZL&_nc_ht=scontent-mrs2-1.xx&_nc_tp=1002&oh=b99d7551456027f6a33325b9f0e4b78c&oe=5ED73532";

  contactDarkPhotoUrl: string = "https://scontent-mrs2-2.xx.fbcdn.net/v/t1.0-0/p180x540/80213518_2603822486321155_8541400009856253952_o.jpg?_nc_cat=106&_nc_ohc=f4Q_l7WhcP8AX8St3mJ&_nc_ht=scontent-mrs2-2.xx&_nc_tp=1002&oh=b0d1d4a654b81d6372568f0cce877b02&oe=5E90100F";
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