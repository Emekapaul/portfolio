import { FaLinkedin, FaGithub, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import Link from "next/link";

const socials = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    url: "https://www.linkedin.com/in/paul-ugwuoke",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={24} />,
    url: "https://github.com/Emekapaul",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter size={24} />,
    url: "https://twitter.com/Emekapaul302",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={24} />,
    url: "/contact",
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
          {...(social.name === "Email"
            ? {}
            : { target: "_blank", rel: "noopener noreferrer" })}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
