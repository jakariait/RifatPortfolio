import { FaLinkedin, FaFacebookF, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

const socialMediaLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ridwanrifatmarketing/",
    icon: FaLinkedin,
    iconColor: "white", // LinkedIn brand color for the icon
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ridwanrifatmarketing/",
    icon: FaFacebookF,
    iconColor: "white", // Facebook brand color for the icon
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ridwanrifatmarketing/",
    icon: FaInstagram,
    iconColor: "white", // Facebook brand color for the icon
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ridwanrifatofficial",
    icon: FaYoutube,
    iconColor: "white", // YouTube brand color for the icon
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ridwanrifatmarketing/",
    icon: FaTiktok,
    iconColor: "white", // TikTok brand color for the icon
  },

];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 text-2xl px-4 items-center justify-center">
      {socialMediaLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full shadow-lg shadow-[#EF6C00]"
        >
          <link.icon style={{ color: link.iconColor }} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
