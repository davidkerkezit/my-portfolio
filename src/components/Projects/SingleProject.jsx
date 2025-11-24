import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { OpenIcon, RightArrow } from "../../assets/icons/icons";

const Container = styled.div(({ $isSingleProjectOpen }) => [
  tw`font-bold px-2 sm:px-4 py-2 sm:py-4 border-[1px] border-transparent flex  sm:flex-col gap-4 md:gap-2 justify-center rounded-xl overflow-hidden transition-all duration-300 hover:cursor-pointer`,
  $isSingleProjectOpen ? tw`flex-col` : tw`flex-row`,
]);
const ImageWrapper = styled.div(({ $isSingleProjectOpen }) => [
  tw`h-[200px] sm:h-[180px] lg:h-[200px] w-[35%] sm:w-full rounded-xl overflow-hidden relative`,
  !$isSingleProjectOpen
    ? tw`max-w-[500px]`
    : tw`sm:max-w-[350px] w-full sm:ml-[58px] md:ml-20`,
]);
const ProjectImage = styled.img(({ $isAvailable }) => [
  tw`object-cover w-full h-full transition duration-300`,
  !$isAvailable && tw`blur-sm`,
]);
const ImageBluredOverlay = tw.div`w-full h-full bg-black absolute left-0 top-0 opacity-40`;
const StatusContainer = tw.div`absolute right-1 top-1 bg-[#262626] text-white text-[14px] px-2 py-0.5 flex items-center gap-1.5 border-[1px] border-white/40 rounded-lg`;
const StatusIndicator = styled.div(({ $isAvailable }) => [
  tw`w-2.5 aspect-square rounded-full `,
  $isAvailable ? tw`bg-[#C5FF40]` : tw`bg-[#F46C38] animate-pulseRing`,
]);
const StatusText = tw.p`font-normal`;
const Label = styled.h3(({ $isSingleProjectOpen }) => [
  $isSingleProjectOpen
    ? tw`text-2xl mt-6 uppercase sm:ml-[58px] md:ml-20 text-center sm:text-left`
    : tw`text-lg mt-2`,
]);
const VisitProjectContainer = styled.div(({ $isSingleProjectOpen }) => [
  tw`flex sm:ml-[58px] md:ml-20 my-2 text-lg`,
  $isSingleProjectOpen
    ? tw`sm:justify-start justify-center `
    : tw` justify-start sm:justify-start`,
]);
const VisitProjectText = tw.p`font-normal`;
const LanguagesContainer = styled.div(({ $isSingleProjectOpen }) => [
  tw`relative flex flex-row justify-center md:justify-start flex-wrap bg-[#40403b] py-1.5 rounded-lg my-2`,
  $isSingleProjectOpen
    ? tw`sm:mx-14 md:mx-20 gap-2 px-3 mt-2`
    : tw`px-0.5 gap-1`,
]);

const LanguageContainer = styled.div(
  ({ $isSingleProjectOpen, $imageExist }) => [
    tw`relative px-2 border-white/40 gap-3 items-center`,
    $isSingleProjectOpen
      ? tw`border-r-[1px] flex`
      : !$imageExist
      ? tw`hidden`
      : tw`border-r-[0px] flex`,
  ]
);

const LanguageText = tw.p`font-normal text-sm`;

const Description = styled.p(({ $isSingleProjectOpen }) => [
  tw`font-light transition-all duration-200`,
  $isSingleProjectOpen
    ? tw`text-[16px] font-normal text-gray-300 py-2 sm:px-[56px] md:px-20 text-center sm:text-left`
    : tw`text-sm font-normal text-gray-400 line-clamp-4 text-left`,
]);

function SingleProject({
  item,
  selectedProjectId,
  selectedProjectOffset,
  isListHidden,
  visibleProjects,
  isFloating,
  isSingleProject,
  containerRef,
  isFixed,
}) {
  const {
    id,
    name,
    description,
    isAvailable,
    image,
    languages,
    link,
    customComponent,
  } = item;
  const navigate = useNavigate();
  const localRef = useRef(null);
  const formattedDescription = description.replace(/\n/g, "<br />");
  const isSingleProjectOpen = !isFloating && visibleProjects.length === 0;
  return (
    <Container
      $isSingleProjectOpen={isSingleProjectOpen}
      ref={containerRef ? containerRef : localRef}
      onClick={() => {
        navigate(`?projectId=${id}`);
      }}
      style={{
        position: isFloating ? " absolute" : "relative ",
        top: isFloating && `${selectedProjectOffset.top}px`,
        left: isFloating && `${selectedProjectOffset.left}px`,
        transitionDelay: isSingleProject
          ? "0ms"
          : isListHidden
          ? "0ms"
          : selectedProjectId === id
          ? "0ms"
          : `${id * 40}ms`,
      }}
      className={`
     ${isSingleProject ? "z-0" : "z-10"}
    ${
      isSingleProjectOpen
        ? `w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] h-max items-start bg-[#2b2b28] ml-3 `
        : "w-[100%] sm:w-[47.5%] md:w-[32.4%] xl:w-[23.8%] lg:w-[31%] sm:h-[440px] md:h-[430px] h-max items-start bg-[#2b2b28] hover:bg-[#363632] hover:border-[#6b6b6b]"
    }
    ${
      isSingleProject
        ? "opacity-100"
        : !isListHidden
        ? "opacity-100"
        : "opacity-0 transition-none"
    }
   
  `}
    >
      {isSingleProjectOpen && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            console.log("here");

            navigate(``);
          }}
          className={`${
            isFixed
              ? "fixed top-[58px] sm:top-[66px] xl:left-[101px] md:left-[37px] sm:left-[29px] "
              : "absolute top-2 sm:top-4 left-2 "
          } z-50 w-14 md:w-20 md:h-10 h-8`}
        >
          <div className="w-full bg-[#2B2B28] text-[12px] md:text-lg backdrop-blur-sm h-full flex justify-center items-center rounded-lg cursor-pointer  border border-white/10 transition-colors">
            ← Back
          </div>
        </div>
      )}
      {isSingleProjectOpen && !isFixed && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            console.log("here");

            navigate(``);
          }}
          className="absolute bottom-8 left-2 z-50 w-14 md:w-20 md:h-10 h-8"
        >
          <div className="w-full bg-gray-900/20 text-[12px] md:text-lg backdrop-blur-sm h-full flex justify-center items-center rounded-lg cursor-pointer  border border-white/10 transition-colors">
            ← Back
          </div>
        </div>
      )}
      {/* END */}
      <ImageWrapper $isSingleProjectOpen={isSingleProjectOpen}>
        <ProjectImage src={image} $isAvailable={isAvailable} />
        {!isAvailable && <ImageBluredOverlay />}
        <StatusContainer>
          <StatusIndicator $isAvailable={isAvailable} />
          <StatusText>{isAvailable ? "Live" : "Coming soon"}</StatusText>
        </StatusContainer>
      </ImageWrapper>
      <div
        className={` flex-1 justify-between flex flex-col   ${
          isSingleProjectOpen ? "items-left pb-5 sm:pb-0" : "items-left"
        }`}
      >
        <Label $isSingleProjectOpen={isSingleProjectOpen}>{name}</Label>
        {isSingleProjectOpen && (
          <VisitProjectContainer $isSingleProjectOpen={isSingleProjectOpen}>
            <VisitProjectText> Visit Project : </VisitProjectText>
            <a
              className="pl-2 pr-1"
              href={isAvailable ? link : undefined}
              target={isAvailable ? "_blank" : undefined}
              onClick={(e) => !isAvailable && e.preventDefault()}
            >
              {isAvailable ? "LINK" : "Not public yet"}
            </a>
            {isAvailable && (
              <a
                className="pt-[3.2px]"
                href={isAvailable ? link : undefined}
                target={isAvailable ? "_blank" : undefined}
                onClick={(e) => !isAvailable && e.preventDefault()}
              >
                <OpenIcon />
              </a>
            )}
          </VisitProjectContainer>
        )}

        <LanguagesContainer $isSingleProjectOpen={isSingleProjectOpen}>
          {languages.map(({ img, label, height }, idx) => {
            return (
              <LanguageContainer
                key={label}
                $isSingleProjectOpen={isSingleProjectOpen}
                $imageExist={img}
                className="last:border-none"
              >
                {isSingleProjectOpen && <LanguageText>{label}</LanguageText>}
                {img && (
                  <img
                    key={idx}
                    src={img}
                    title={label}
                    style={{
                      height: `${height / (isSingleProjectOpen ? 1 : 1.4)}px`,
                    }}
                    className={`w-auto object-contain  ${
                      isSingleProjectOpen ? "mr-1.5" : "mr-0"
                    }`}
                  />
                )}
              </LanguageContainer>
            );
          })}
        </LanguagesContainer>
        <Description
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
          $isSingleProjectOpen={isSingleProjectOpen}
        />
        {isSingleProjectOpen && customComponent}
        {!isSingleProjectOpen && (
          <div className="mt-4 flex gap-1.5 items-center">
            <p className="font-normal">More info</p>
            <RightArrow />
          </div>
        )}
      </div>
    </Container>
  );
}

export default SingleProject;
