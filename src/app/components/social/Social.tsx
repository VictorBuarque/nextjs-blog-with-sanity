import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type SocialsType = {
  icon: React.ReactNode;
  url: string;
};

const socials = [
  { icon: <FaGithub size={26} />, url: "https://github.com/VictorBuarque" },
  {
    icon: <FaLinkedinIn size={24} />,
    url: "https://www.linkedin.com/in/victorbuarque/",
  },
];

export default function Social() {
  return (
    <div className="flex gap-4 ">
      {socials.map((item: SocialsType, index: number) => {
        return (
          <Link href={item.url} key={index} target="_blank" rel="noopener noreferrer">
            <p className="flex size-9 border rounded-full justify-center items-center text-base">
              {item.icon}
            </p>
          </Link>
        );
      })}
    </div>
  );
}