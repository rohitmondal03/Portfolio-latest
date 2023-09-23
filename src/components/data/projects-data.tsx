import spendImg from "/public/assets/spend.png"
import imageWallImg from "/public/assets/imagewall.png"
import eCommerceImg from "/public/assets/eCommerce.png"


export const projectsData: Array<projectsDataType> = [
    {
        title: "1. SpeND",
        desc: "SpeND, redifining the way credit card services work.",
        img: spendImg,
        featuresList: [
            "Frontend developed with ReactJS (TypeScript).",
            "Added authentication using Github, Google and Discord.",
            "Supported among different screen sizes and browsers.",
            "Integrated Supabase, to store credit card orders and customer queries.",
        ],
        githubLink: "https://github.com/rohitmondal03/spend",
        liveLink: "https://spendapp.vercel.app"
    },

    {
        title: "2. ImageWall",
        desc: "A simple web application, to store all your photos at one place.",
        img: imageWallImg,
        featuresList: [
            "UI developed with ReactJS (with TypeScript)",
            "For authentication, used 3rd party providers.",
            "Added Supabase as BaaS for storing user's photos.",
        ],
        githubLink: "https://github.com/rohitmondal03/Image-Wall",
        liveLink: "https://imagewall.vercel.app"
    },

    {
        title: "E-Cart App",
        desc: "Simple E-Commerce app made with Redux.",
        img: eCommerceImg,
        featuresList: [
            "Designed a React and Redux based cart application, ensuring a seamless and responsive user experience",
            "Implemented a user-friendly UI allowing users to easily add, remove, and empty products from cart.",
        ],
        githubLink: "https://github.com/rohitmondal03/E-Commerce",
        liveLink: "https://3-commerce.netlify.app/"
    }
]