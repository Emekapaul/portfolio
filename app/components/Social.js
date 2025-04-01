import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const socials = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    url: "https://www.linkedin.com/in/paul-ugwuoke",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={20} />,
    url: "https://github.com/Emekapaul",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={20} />,
    url: "https://twitter.com/Emekapaul302",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social) => (
        <Link
          href={social.url}
          key={social.name}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
