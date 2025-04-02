import stepanDordiaiVideo from "/videos/stepan-dordiai-video.mp4";
import cloudVideo from "/videos/cloud-video.mp4";
import yagodaKarpatVideo from "/videos/yagoda-karpat-video.mp4";
import bourekVideo from "/videos/bourek-video.mp4";
import prozubikVideo from "/videos/prozubik-video.mp4";
import neresenVideo from "/videos/neresen-video.mp4";
import fveStavbyVideo from "/videos/fve-stavby-video.mp4";

import stepanDordiaiPoster from "/images/stepan-dordiai-poster.png";
import cloudPoster from "/images/cloud-poster.png";
import yagodaKarpatPoster from "/images/yagoda-karpat-poster.png";
import bourekPoster from "/images/bourek-poster.png";
import prozubikPoster from "/images/prozubik-poster.png";
import neresenPoster from "/images/neresen-poster.png";
import fveStavbyPoster from "/images/fve-stavby-poster.png";

const portfolioData = [
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
        id: "yagoda-karpat",
        title: "Yagoda Karpat",
        titleDesc: "Business website",
        liveSite: "https://yagodakarpat.com/",
        githubRepo: "https://github.com/stepandordiai/yagoda-karpat",
        projectVideo: yagodaKarpatVideo,
        projectVideoPoster: yagodaKarpatPoster,
    },
    {
        id: "bourek",
        title: "Bourek",
        titleDesc: "Service website",
        liveSite: "https://bourek.cz/",
        projectVideo: bourekVideo,
        projectVideoPoster: bourekPoster,
    },
    {
        id: "prozubik",
        title: "Prozubik",
        titleDesc: "Service website",
        liveSite: "https://prozubik.cz/",
        projectVideo: prozubikVideo,
        projectVideoPoster: prozubikPoster,
    },
    {
        id: "neresen",
        title: "Neresen",
        titleDesc: "Business website",
        liveSite: "https://neresen.cz/",
        projectVideo: neresenVideo,
        projectVideoPoster: neresenPoster,
    },
    {
        id: "fve-stavby",
        title: "FVE STAVBY",
        titleDesc: "Business website",
        liveSite: "https://fvestavby.cz/",
        projectVideo: fveStavbyVideo,
        projectVideoPoster: fveStavbyPoster,
    },
];

export default portfolioData;
