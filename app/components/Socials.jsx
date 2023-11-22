import {
  RiLinkedinFill,
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";
//icons
const icons = [
  { path: "/", name: <RiLinkedinFill /> },
  { path: "/", name: <RiFacebookFill /> },
  { path: "/", name: <RiGithubFill /> },
  { path: "/", name: <RiInstagramFill /> },
];

export const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};
