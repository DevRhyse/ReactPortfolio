import self from "../img/self.png"
import mock1 from "../img/mock1.jpg"
import mock2 from "../img/mock2.jpg"
import mock3 from "../img/mock3.jpg"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

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
    bio: "Hey there, I'm Rhyse - a Full-Stack Software Engineer who's all about growth, innovation, and having fun along the way! I'm passionate about using my problem-solving skills to deliver top-notch projects that make a real difference. As an avid learner, I'm always on the lookout for new challenges and opportunities to expand my skills. I thrive on finding creative solutions to complex problems and working in a collaborative team environment. I'm confident that I can bring a positive energy to any organization I work with, and I'm currently on the lookout for exciting new projects, clients, or employment opportunities",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'restapi', 'OOP', 'scrum', 'Agile', 'vite', 'bootstrap','tailwind','nodejs', 'express.js', 'mongodb', 'html', 'css'],
            exposedTo: ['typescript', 'python', 'Nextjs','AWS','PostgresSql', 'c++', 'sass', 'linux', 'figma']
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
                maxHeight: '63vh'
            }
        },
        {
            title: "Image Generalization Finder",
            live: "https://imagegeneralizationfinder.cyclic.app/",
            image: mock5,
            imgStyle: {
                maxHeight: '63vh'
            }
        },
        {
            title: "Other Worldly Weather",
            live: "https://otherworldyweather.netlify.app",
            image: mock4,
            imgStyle: {
                maxHeight: '63vh'
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
    ]
}
