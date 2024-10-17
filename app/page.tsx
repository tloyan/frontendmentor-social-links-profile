import { SocialLinksProfile, ProfileType } from "./components/SocialLinksProfile";

const profile: ProfileType = {
  picture: {
    src: "/avatar-jessica.jpeg",
  },
  name: "Jessica Randall",
  city: "London",
  country: "United Kingdom",
  description: "Front-end developer and avid reader.",
  socials_url: {
    github: "https://github.com/tloyan",
    frontendmentor: "https://www.frontendmentor.io/profile/tloyan",
    linkedin: "https://www.linkedin.com/in/thomas-loyan-919776143/",
    twitter: "https://x.com/thomasloyan",
    instagram: ""
  }
}

export default function Home() {
  return (
    <main className="bg-gray-900 h-full p-6 flex flex-col items-center justify-center">
      <SocialLinksProfile {...profile} />
    </main>
  );
}
