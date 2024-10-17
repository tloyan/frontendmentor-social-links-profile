import Image from "next/image";
import { ReactNode } from "react";

export interface ProfileType {
  name: string;
  city: string;
  country: string;
  description: string;
  picture: {
    src: string;
  };
  socials_url: {
    github: string;
    frontendmentor: string;
    linkedin: string;
    twitter: string;
    instagram: string;
  };
}

function SocialButton({
  url,
  children,
}: Readonly<{ url: string; children: ReactNode }>) {
  return (
    <a
      className="w-full rounded-lg bg-gray-700 p-3 text-center text-sm font-bold hover:cursor-pointer hover:bg-green hover:text-gray-700"
      href={url}
    >
      <p>{children}</p>
    </a>
  );
}

export function SocialLinksProfile({
  name,
  city,
  country,
  description,
  socials_url,
  picture,
}: ProfileType) {
  return (
    <div className="flex w-full max-w-[456px] flex-col items-center rounded-xl bg-gray-800 p-6 min-[504px]:p-10 xl:max-w-[384px]">
      <div className="w-[88px] overflow-hidden rounded-full">
        <Image
          src={picture.src}
          alt={`${name} profile picture`}
          width={176}
          height={176}
        />
      </div>
      <p className="mt-6 text-2xl font-bold">{name}</p>
      <p className="mt-1 text-sm font-bold text-green">
        {city}, {country}
      </p>
      <p className="mt-6 text-sm">&quot;{description}&quot;</p>
      <div className="mt-6 flex w-full flex-col gap-y-4">
        <SocialButton url={socials_url.github}>GitHub</SocialButton>
        <SocialButton url={socials_url.frontendmentor}>
          Frontend Mentor
        </SocialButton>
        <SocialButton url={socials_url.linkedin}>LinkedIn</SocialButton>
        <SocialButton url={socials_url.twitter}>Twitter</SocialButton>
        <SocialButton url={socials_url.instagram}>Instagram</SocialButton>
      </div>
    </div>
  );
}
