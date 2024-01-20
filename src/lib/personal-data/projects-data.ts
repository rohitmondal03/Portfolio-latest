import spendImg from "/src/assets/spend.png"
import imageWallImg from "/src/assets/imagewall.png"
import eCommerceImg from "/src/assets/eCommerce.png"
import opentypedImg from "/src/assets/opentyped.png"
import biosyncImg from "/src/assets/bioSync.png"


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
    title: "BioSync",
    desc: "A website to create onlien personal links and share it with anyone",
    img: biosyncImg,
    featuresList:[
      "Leveraged NextJS and its easy to use route handlers, server-actions and opengraph for seamless user experience.",
      "Used TailwindCSS and shadcnUI for styling and pre-made components",
      "For databases operations, Prisma ORM is used, which provides easy-to-use and javascript-friendly APIs for developers.",
      "Used Supabase, which is a postgresql Backend-as-a-service, for storing data of users and authentications details."
    ],
    githubLink: "https://github.com/rohitmondal03/Bio-Sync",
    liveLink: "https://bio-sync.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "E-Cart App",
  //   desc: "Simple E-Commerce app made with Redux.",
  //   img: eCommerceImg,
  //   featuresList: [
  //     "Designed a React and Redux based cart application, ensuring a seamless and responsive user experience",
  //     "Implemented a user-friendly UI allowing users to easily add, remove, and empty products from cart.",
  //   ],
  //   githubLink: "https://github.com/rohitmondal03/E-Commerce",
  //   liveLink: "https://3-commerce.netlify.app/"
  // },
]