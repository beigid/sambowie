import projectOne from '../../assets/images/project-1.jpeg';
import projectTwo from '../../assets/images/project-2.png';
import projectThree from '../../assets/images/project-3.png';
import projectFour from '../../assets/images/project-4.jpeg';
import projectFive from '../../assets/images/project-5.jpeg';
import projectVideoOne from '../../assets/videos/project-video-1.mov';
import projectVideoTwo from '../../assets/videos/project-video-2.mov';

export const projectsData = [
  {
    id: 1,
    title: "Home Renovation",
    category: "Residential",
    type: "image",
    size: "large",
    image: projectOne,
    desc: "Details about home renovation!",
    client: 'Placeholder',
    year: 2024
  },
  {
    id: 2,
    title: "Interior Walkthrough",
    category: "Interior",
    type: "video",
    size: "tall",
    image: projectTwo,
    videoSrc: projectVideoOne,
    desc: "A cinematic tour through our latest interior design project, highlighting custom finishes.",
    client: 'Modern Living',
    year: 2024
  },
  {
    id: 3,
    title: "Condo Remodel",
    category: "Interior",
    type: "image",
    size: "normal",
    image: projectFour,
    desc: "4k Drone tour of the new downtown units.",
    client: 'Placeholder',
    year: 2000
  },
  {
    id: 4,
    title: "Lakehouse Renovation",
    category: "Interior",
    type: "video",
    size: "normal",
    videoSrc: projectVideoTwo,
    image: projectThree,
    desc: "Luxury installation consulting.",
    client: 'Placeholder',
    year: 2000
  },
  {
    id: 5,
    title: "Desert Oasis Villa",
    category: "Residential",
    type: "image",
    size: "wide",
    image: projectFive,
    desc: "Landscape and structural integration.",
    client: 'Placeholder',
    year: 2000
  },
];