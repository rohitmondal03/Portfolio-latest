import { FileJson, PointerIcon, File, Link2OffIcon, QrCodeIcon, FilmIcon } from "lucide-react"


export const smallProjectsData: smallProjectsDataTypes[] = [
    {
        title: "JSON Formatter",
        abt: "A simple web app, to format the given JSON data",
        githubLink: "https://github.com/rohitmondal03/JSON-Formatter",
        liveLink: "https://json-formatter-rho.vercel.app/",
        icon: FileJson,
    },
    {
        title: "Javascript Console",
        abt: "A javascript console, to get output of your javascript code.",
        githubLink: "https://github.com/rohitmondal03/Javascript-Console",
        liveLink: "https://javascript-console.netlify.app/",
        icon: File,
    },
    {
        title: "Image colour Picker",
        abt: "A Javascript project, to point to a particular point and get hex value of colour.",
        githubLink: "https://github.com/rohitmondal03/Image-colour-picker",
        liveLink: "https://image-colour-picker-dun.vercel.app/",
        icon: PointerIcon,
    },
    {
        title: "Shortly",
        abt: "Get all your favourite URLs in short.",
        githubLink: "https://github.com/rohitmondal03/Shortly",
        liveLink: "https://url-shortener-xi-eight.vercel.app/",
        icon: Link2OffIcon
    },
    {
        title: "QR Code Generator",
        abt: "Get unique QR code for any website you enter",
        githubLink: "https://github.com/rohitmondal03/QR-Code-generator",
        liveLink: "https://qr-c0d3.netlify.app/",
        icon: QrCodeIcon,
    },
    {
        title: "Spidy Series",
        abt: "React and Redux application, where user can store their favourite Spiderman series or movies in cart",
        githubLink: "https://github.com/rohitmondal03/Redux-Tutorial",
        liveLink: "https://redux-ca3t-app.netlify.app/",
        icon: FilmIcon
    }
]