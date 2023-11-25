import {
  RiLinkedinFill,
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";
//icons
const icons = [
  {
    path: "https://www.linkedin.com/in/mohamed-ali-harroum/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100069056451278",
    name: <RiFacebookFill />,
  },
  { path: "https://github.com/MohamedAliHarroum", name: <RiGithubFill /> },
  {
    path: "https://www.instagram.com/dali_harroum/",
    name: <RiInstagramFill />,
  },
];
export const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        if (icon.path.startsWith("http")) {
          // External link
          return (
            <a
              href={icon.path}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={`${iconsStyles}`}
            >
              {icon.name}
            </a>
          );
        } else {
          // Internal link
          return (
            <Link href={icon.path} key={index}>
              <a className={`${iconsStyles}`}>{icon.name}</a>
            </Link>
          );
        }
      })}
    </div>
  );
};
