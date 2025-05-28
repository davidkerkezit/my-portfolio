import React, { useState } from "react";
import { MessageBubbleIcon } from "../assets/icons/icons";

function Contact() {
  const [test, setTest] = useState(false);
  const hoverHandler = () => {
    setTest(true);
  };
  const drugiHandler = () => {
    setTest(false);
  };
  return (
    <div className="py-10  flex w-1/2 mx-auto gap-10">
      <div className="w-[60%] ">
        <p
          style={{
            background: "linear-gradient(to right, #e64b10, #db9276)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
          className="uppercase font-semibold text-xl mb-5"
        >
          Do you have a project to discuss?
        </p>
        <div className="flex gap-2.5 mb-6">
          <p className="uppercase font-thin">Get in touch</p>
          <MessageBubbleIcon width={17} />
        </div>
        <div className="flex justify-between">
          <div className="">
            <p className="text-xl uppercase font-light mb-0.5">Contact</p>
            <p className="text-orange-light   text-sm  ">
              davidkerkez@gmail.com
            </p>
          </div>
          <div>
            <p className="text-xl uppercase font-light mr-5">Social Media</p>
            <div>{/* SOCIALS */}</div>
          </div>
        </div>
      </div>
      <div className="w-[40%] ">
        <p className="text-xl uppercase font-light mb-5">Contact Form</p>
        <form action="" className="flex flex-col">
          <label className="font-light text-sm mb-1 " htmlFor="">
            Name
          </label>
          <input
            className="bg-transparent border-[0.5px] rounded-md border-[#b3b3b3]"
            type="text"
          />
          <label className="font-light text-sm mb-1 mt-2" htmlFor="">
            Email
          </label>
          <input
            className="bg-transparent border-[0.5px] rounded-md border-[#b3b3b3]"
            type="text"
          />
          <label className="font-light text-sm mb-1 mt-2" htmlFor="">
            Message
          </label>
          <input
            className="bg-transparent border-[0.5px] rounded-md border-[#b3b3b3]"
            type="text"
          />
          <button
            className="uppercase text-lg font-light mt-5 border-[0.5px] w-max px-12 py-2 mx-auto relative overflow-hidden "
            onMouseOver={hoverHandler}
            onMouseLeave={drugiHandler}
          >
            <div
              className={`${
                test
                  ? `-left-[200px] top-[-200px]`
                  : `-left-[800px] top-[-70px]`
              } w-[1000px] h-[1000px] absolute rotate-45   bg-orange-500 duration-300 ease-in-out`}
            />
            <p className="z-10 relative"> Send</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
