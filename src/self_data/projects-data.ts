import spendImg from "/src/assets/spend.png"
import imageWallImg from "/src/assets/imagewall.png"
import eCommerceImg from "/src/assets/eCommerce.png"
import opentypedImg from "/src/assets/opentyped.png"


export const projectsData: Array<projectsDataType> = [
  {
    id: 1,
    title: "OpenTyped",
    desc: "Your Gateway to Open-source projects",
    img: opentypedImg,
    featuresList: [
      "Built 'OpenTyped' with Next.js (and Typescript), Prisma, and NextAuth for seamless open-source project listing, enhancing the developer community's resource access.",
      "Leveraged Railway for efficient database management, ensuring data integrity in 'OpenTyped', a platform for project discovery.",
      "With 'OpenTyped', I aimed to facilitate collaboration by providing a user-friendly hub for open source projects, fostering a dynamic development ecosystem.",
    ],
    githubLink: "https://github.com/rohitmondal03/opentyped",
    liveLink: "https://opentyped-nextjs.vercel.app"
  },
  {
    id: 2,
    title: "ImageWall",
    desc: "A simple web application, to store all your photos at one place.",
    img: imageWallImg,
    featuresList: [
      "Crafted a dynamic user interface using ReactJS with TypeScript, providing an engaging platform for users to manage their images effectively.",
      "Implemented robust third-party authentication methods to ensure user data security and seamless login experiences.",
      "Leveraged Supabase as a Backend as a Service (BaaS) to enable users to store and manage their images, enhancing data efficiency in the Imagewall project.",
    ],
    githubLink: "https://github.com/rohitmondal03/Image-Wall",
    liveLink: "https://imagewall.vercel.app"
  },

  {
    id: 3,
    title: "E-Cart App",
    desc: "Simple E-Commerce app made with Redux.",
    img: eCommerceImg,
    featuresList: [
      "Designed a React and Redux based cart application, ensuring a seamless and responsive user experience",
      "Implemented a user-friendly UI allowing users to easily add, remove, and empty products from cart.",
    ],
    githubLink: "https://github.com/rohitmondal03/E-Commerce",
    liveLink: "https://3-commerce.netlify.app/"
  },
  {
    id: 4,
    title: "SpeND",
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

  }
]