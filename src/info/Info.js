import self from "../img/self.png"
import mock1 from "../img/mock1.jpg"
import mock2 from "../img/mock2.jpg"
import mock3 from "../img/mock3.jpg"
import mock4 from "../img/mock4.jpg"
import mock5 from "../img/mock5.jpg"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Rhyse",
    lastName: "Young",
    initials: "🖥️", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Full-Stack Engineer at 100 Devs"
        },
        {
            emoji: "📧",
            text: "dev.rhyse@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://youtube.com",
        //     icon: "fa-brands fa-youtube",
        //     label: 'youtube'
        // },
        {
            link: "https://github.com/DevRhyse",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/devrhyse/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/Rhyse192371",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "I am a highly motivated individual with strong communication skills, I am passionate about learning and problem-solving.  With my curiosity and self-learning skills, I am able to quickly find answers to complex problems with speed and accuracy.  I am also an avid reader and a creator of video aids for learning software languages.  I am confident that I can make a positive contribution to any organization. I also enjoy being a part of a high energy team and working together to solve difficult problems.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap','tailwind','nodejs', 'express.js', 'mongodb', 'html', 'css'],
            exposedTo: ['typescript', 'python', 'Nextjs','AWS','PostgresSql', 'c++', 'expressjs', 'restapi']
        }
    ,
    hobbies: [
        {
            label: 'dogs',
            emoji: '🐺'
        },
        {
            label: 'Electrical Engineering',
            emoji: '🗲'
        },
        {
            label: 'anime',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Together",
            live: "https://together.cyclic.app/", 
            image: mock1,
            imgStyle: {
                maxHeight: '40vh'
            }
        },
        {
            title: "Other Worldly Weather",
            live: "https://otherworldyweather.netlify.app",
            image: mock4,
            imgStyle: {
                maxHeight: '40vh'
            }
        },
        {
            title: "HP Sprayfoam",
            live: "https://hpfoam.netlify.app/",
            image: mock2,
            imgStyle: {
                maxHeight: '40vh'
            }
        },
        {
            title: "NASA Picture of the Day",
            live: "https://devrhyse.github.io/NASApicOfTheDay/",
            image: mock3,
            imgStyle: {
                maxHeight: '40vh'
            }
        },
        {
            title: "ToDo",
            live: "#",
            image: mock5,
            imgStyle: {
                maxHeight: '40vh'
            }
        }
    ]
}
