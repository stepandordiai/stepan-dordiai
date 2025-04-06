import stepanDordiaiVideo from "/videos/stepan-dordiai-video.mp4";
import cloudVideo from "/videos/cloud-video.mp4";
import yagodaKarpatVideo from "/videos/yagoda-karpat-video.mp4";
import bourekVideo from "/videos/bourek-video.mp4";
import prozubikVideo from "/videos/prozubik-video.mp4";
import neresenVideo from "/videos/neresen-video.mp4";
import fveStavbyVideo from "/videos/fve-stavby-video.mp4";

import stepanDordiaiImg from "/images/stepan-dordiai.png";
import cloudImg from "/images/cloud.png";
import yagodaKarpatImg from "/images/yagoda-karpat.png";
import bourekImg from "/images/bourek.png";
import prozubikImg from "/images/prozubik.png";
import neresenImg from "/images/neresen.png";
import fveStavbyImg from "/images/fve-stavby.png";

const portfolioData = [
    {
        id: "stepan-dordiai",
        title: "STEPAN DORDIAI",
        titleDesc: "Portfolio website",
        githubRepo: "https://github.com/stepandordiai/stepan-dordiai",
        projectVideo: stepanDordiaiVideo,
        projectImg: stepanDordiaiImg,
    },
    {
        id: "cloud",
        title: "cloud.",
        titleDesc: "Weather website",
        liveSite: "https://cloud-project.netlify.app/",
        githubRepo: "https://github.com/stepandordiai/cloud",
        projectVideo: cloudVideo,
        projectImg: cloudImg,
    },
    {
        id: "yagoda-karpat",
        title: "Yagoda Karpat",
        titleDesc: "Business website",
        liveSite: "https://yagodakarpat.com/",
        githubRepo: "https://github.com/stepandordiai/yagoda-karpat",
        projectVideo: yagodaKarpatVideo,
        projectImg: yagodaKarpatImg,
    },
    {
        id: "bourek",
        title: "Bourek",
        titleDesc: "Service website",
        liveSite: "https://bourek.cz/",
        projectVideo: bourekVideo,
        projectImg: bourekImg,
    },
    {
        id: "prozubik",
        title: "Prozubik",
        titleDesc: "Service website",
        liveSite: "https://prozubik.cz/",
        projectVideo: prozubikVideo,
        projectImg: prozubikImg,
    },
    {
        id: "neresen",
        title: "Neresen",
        titleDesc: "Business website",
        liveSite: "https://neresen.cz/",
        projectVideo: neresenVideo,
        projectImg: neresenImg,
    },
    {
        id: "fve-stavby",
        title: "FVE STAVBY",
        titleDesc: "Business website",
        liveSite: "https://fvestavby.cz/",
        projectVideo: fveStavbyVideo,
        projectImg: fveStavbyImg,
    },
];

export default portfolioData;
