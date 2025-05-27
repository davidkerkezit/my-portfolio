import React from "react";
import { LocationIcon } from "../assets/icons/icons";
import tw from "twin.macro";

const Container = tw.div`h-[100vh] px-40 flex flex-col  mt-14 bg-[#1a1a18]`;
const Label = tw.h3`text-[60px] font-extrabold uppercase leading-[60px] text-white mb-10 -mt-7`;

const Workplaces = () => {
  return (
    <Container>
      <Label>Experience</Label>
      <div className=" w-max mx-auto">
        <div className="flex gap-6 ">
          <p className="bg-[#70706f] h-max text-sm font-light py-1 px-3">
            2023
          </p>
          <div className="relative ">
            <div className="h-full w-[1px] bg-white" />
            <div className=" aspect-square w-7 absolute -left-[13px] -top-[0px] bg-[#1A1A18] flex justify-center items-center">
              <div className="bg-[#F36C38]  w-3 aspect-square rounded-full" />
            </div>
          </div>
          <div className="flex flex-col gap-3 max-w-[650px]">
            <h4 className="text-2xl font-semibold">
              Frontend Developer (Intermediate)
            </h4>
            <div className="flex gap-2 items-center">
              <LocationIcon color="#eb5b5b" />
              <h5 className="text-lg">Positive Tech IT</h5>
            </div>
            <p className="pb-10 font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              quasi excepturi amet illum similique sequi quaerat, quod quisquam,
              ullam sit laborum fugit illo necessitatibus atque quia commodi
              dolorem! Ipsa, mollitia? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Suscipit quasi excepturi amet illum similique
              sequi quaerat, quod quisquam, ullam sit laborum fugit illo
              necessitatibus atque quia commodi dolorem! Ipsa, mollitia?
              adipisicing elit. Suscipit quasi excepturi amet illum similique
              sequi quaerat, quod quisquam, ullam sit laborum fugit illo
              necessitatibus atque quia commodi dolorem! Ipsa, mollitia?
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <p className="bg-[#70706f] h-max text-sm font-light py-1 px-3">
            2024
          </p>
          <div className="relative ">
            <div className="h-full w-[1px] bg-white" />
            <div className=" aspect-square w-7 absolute -left-[13px] -top-[0px] bg-[#1A1A18] flex justify-center items-center">
              <div className="bg-[#F36C38]  w-3 aspect-square rounded-full" />
            </div>
          </div>
          <div className="flex flex-col gap-2 max-w-[650px]">
            <h4 className="text-2xl font-semibold">
              Frontend Developer (Full Time)
            </h4>
            <div className="flex gap-2 items-center">
              <LocationIcon color="#eb5b5b" />
              <h5 className="text-lg">Hora Games</h5>
            </div>
            <p className="pb-1 clear-start font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              quasi excepturi amet illum similique sequi quaerat, quod quisquam,
              ullam sit laborum fugit illo necessitatibus atque quia commodi
              dolorem! Ipsa, mollitia? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Suscipit quasi excepturi amet illum similique
              sequi quaerat, quod quisquam, ullam sit laborum fugit illo
              necessitatibus atque quia commodi dolorem! Ipsa, mollitia?
              dipisicing elit. Suscipit quasi excepturi amet illum similique
              sequi quaerat, quod quisquam, ullam sit laborum fugit illo
              necessitatibus atque quia commodi dolorem! Ipsa, mollitia?
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Workplaces;
