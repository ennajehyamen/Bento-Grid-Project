import createImg from "../assets/images/illustration-create-post.webp";
import socialImg from "../assets/images/illustration-five-stars.webp";
import scheduleImg from "../assets/images/illustration-schedule-posts.webp";
import aiImg from "../assets/images/illustration-ai-content.webp";
import accountsImg from "../assets/images/illustration-multiple-platforms.webp";
import calendarImg from "../assets/images/illustration-consistent-schedule.webp";
import growthImg from "../assets/images/illustration-audience-growth.webp";
import followersImg from "../assets/images/illustration-grow-followers.webp";

export const cardsData = [
  {
    title: "Create and schedule content quicker.",
    content: "Create Post →",
    bgColor: "bg-yellow500",
    image: createImg,
    imagePosition: "bottom",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    title: "Social Media 10x Faster with AI",
    content: "⭐ Over 4,000 5-star reviews",
    bgColor: "bg-purple500 text-white",
    image: socialImg,
    imagePosition: "midle",
    className: "lg:col-span-2 lg:row-span-2 text-center",
  },
  {
    title: "Schedule to social media.",
    content: "Best time to post →",
    bgColor: "bg-purple100",
    image: scheduleImg,
    imagePosition: "bottom",
    className: "lg:col-span-1 lg:row-span-3",
  },
  {
    title: "Write your content using AI.",
    content: "Chat AI →",
    bgColor: "bg-yellow100",
    image: aiImg,
    imagePosition: "top",
    className: "lg:col-span-1 lg:row-span-2",
  },
  {
    title: "Manage multiple accounts and platforms.",
    content: "Easily switch between them",
    bgColor: "bg-white",
    image: accountsImg,
    imagePosition: "top",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Maintain a consistent posting schedule.",
    content: "August 2024 – Week 1",
    bgColor: "bg-yellow500",
    image: calendarImg,
    imagePosition: "right",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: ">56% faster audience growth",
    content: "",
    bgColor: "bg-white",
    image: growthImg,
    imagePosition: "bottom",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Grow followers with non-stop content.",
    content: "Follower Growth: 20,642 → +40%",
    bgColor: "bg-purple500 text-white",
    image: followersImg,
    imagePosition: "right",
    className: "lg:col-span-2 lg:row-span-1",
  },
];
