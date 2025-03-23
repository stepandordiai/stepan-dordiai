import yagodaKarpatVideo from "./videos/yagoda-karpat.mp4";
import tastyBurgerVideo from "./videos/tasty-burger.mp4";
import cloudVideo from "./videos/cloud.mp4";
import stepanDordiaiVideo from "./videos/stepan-dordiai.mp4";
import penguinVideo from "./videos/penguin.mp4";

import yagodaKarpatPoster from "./images/yagoda-karpat-poster.png";
import tastyBurgerPoster from "./images/tasty-burger_Moment.jpg";
import cloudPoster from "./images/cloud_Moment.jpg";
import stepanDordiaiPoster from "./images/stepan-dordiai_Moment.jpg";
import penguinPoster from "./images/penguin_Moment.jpg";

const portfolioData = [
    {
        id: "penguin",
        title: "penguin",
        titleDesc: "Portfolio website",
        liveSite: "https://penguin-project.netlify.app/",
        githubRepo: "https://github.com/stepandordiai/penguin",
        projectVideo: penguinVideo,
        projectVideoPoster: penguinPoster,
    },
    {
        id: "stepan-dordiai",
        title: "STEPAN DORDIAI",
        titleDesc: "Portfolio website",
        githubRepo: "https://github.com/stepandordiai/stepan-dordiai",
        projectVideo: stepanDordiaiVideo,
        projectVideoPoster: stepanDordiaiPoster,
    },
    {
        id: "cloud",
        title: "cloud.",
        titleDesc: "Weather website",
        liveSite: "https://cloud-project.netlify.app/",
        githubRepo: "https://github.com/stepandordiai/cloud",
        projectVideo: cloudVideo,
        projectVideoPoster: cloudPoster,
    },
    {
        id: "tasty-burger",
        title: "Tasty Burger",
        titleDesc: "Special website",
        liveSite: "https://stepandordiai.github.io/tasty-burger/",
        githubRepo: "https://github.com/stepandordiai/tasty-burger",
        projectVideo: tastyBurgerVideo,
        projectVideoPoster: tastyBurgerPoster,
    },
    {
        id: "yagoda-karpat",
        title: "Yagoda Karpat",
        titleDesc: "Business website",
        liveSite: "https://yagodakarpat.com/",
        githubRepo: "https://github.com/stepandordiai/yagoda-karpat",
        projectVideo: yagodaKarpatVideo,
        projectVideoPoster: yagodaKarpatPoster,
    },
];

export default portfolioData;
