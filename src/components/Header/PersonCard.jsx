import React from "react";
import img from "../../assets/me.jpg";
import { GithubIcon, GitlabIcon, LinkedinIcon } from "../../assets/icons/icons";

function PersonCard() {
  const iconColor = "#FF7A01";
  const socials = [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/davidkerkez/",
      component: <LinkedinIcon color={iconColor} />,
    },
    {
      label: "Github",
      link: "https://github.com/davidkerkezit",
      component: <GithubIcon color={iconColor} />,
    },
    {
      label: "Gitlab",
      link: "https://gitlab.com/davidkerkezit",
      component: <GitlabIcon color={iconColor} />,
    },
  ];
  return (
    <div className=" w-[40%] flex justify-end pr-20  ">
      <div className="bg-white w-max h-max rounded-2xl px-[52px] py-[30px] flex flex-col items-center">
        <div className="w-[240px] h-[285px]   rounded-2xl overflow-hidden">
          <img src={img} alt="my-image" />
        </div>
        <h3 className="text-center font-bold text-4xl text-[#2e2e2e] mt-6 mb-6 ">
          David Kerkez
        </h3>
        <p className="text-center mt-[20px] text-lg leading-5 text-[#6B6C6F] w-[230px] font-light">
          A Frontend Developer crafting engaging, user-friendly web experiences
          through clean code and creative solutions.
        </p>
        <div className="flex justify-center my-9 gap-5">
          {socials.map((item) => {
            const component = item.component;
            return (
              <a key={item.label} href={item.link} target="_blank">
                {component}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
