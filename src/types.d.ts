type smallProjectsDataTypes = {
    title: string
    githubLink: string
    liveLink: string
    abt: string
    icon: LucideIcon
}

type projectsDataType = {
    id: number
    title: string,
    desc: string,
    img: StaticImageData,
    featuresList: Array<string>,
    liveLink: string,
    githubLink: string
}

type socialLinksType = {
    title: string,
    icon: LucideIcon,
    link: string
}

type creditLinkType = {
    redirect: string
    title: string
}