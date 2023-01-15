import self from "../img/self.png"
import mock1 from "../img/mock1.jpg"
import mock2 from "../img/mock2.jpg"
import mock3 from "../img/mock3.jpg"
import mock4 from "../img/mock4.jpg"
import mock5 from "../img/mock5.jpg"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Rhyse",
    lastName: "Young",
    initials: "🖥️", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
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
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I am a highly motivated individual with strong communication skills, I am passionate about learning and problem-solving.  With my curiosity and self-learning skills, I am able to quickly find answers to complex problems with speed and accuracy.  I am also an avid reader and a creator of video aids for learning software languages.  I am confident that I can make a positive contribution to any organization. I also enjoy being a part of a high energy team and working together to solve difficult problems.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap','tailwind','nodejs','mongodb', 'html', 'css'],
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
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
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
            image: mock4,
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
