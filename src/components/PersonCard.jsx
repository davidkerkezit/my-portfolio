import React from "react";
import img from "../assets/me.jpg";
import {
  GithubIcon,
  GitlabIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../assets/icons/icons";
function PersonCard() {
  const iconColor = "#FF7A01";
  return (
    <div className="w-[40%] h-full  flex flex-col items-end">
      <div className="bg-white w-max  rounded-2xl px-[52px] pt-[30px] ">
        <div className="w-[240px] h-[285px]  rounded-2xl overflow-hidden">
          <img src={img} alt="my-image" />
        </div>
        <h3 className="text-center font-bold text-4xl mt-6">David Kerkez</h3>
        <p className="text-center mt-[110px] text-lg leading-5 text-[#6B6C6F]">
          A Software Engineer who has <br /> developed countless innovative
          <br />
          solutions.
        </p>
        <div className="flex justify-center my-8 gap-5">
          <LinkedinIcon color={iconColor} />
          <GithubIcon color={iconColor} />
          <GitlabIcon color={iconColor} />
          <InstagramIcon color={iconColor} />
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
