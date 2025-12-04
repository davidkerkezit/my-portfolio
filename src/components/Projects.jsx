import React, { useEffect, useRef, useState } from "react";
import { projects } from "../utils/config";
import tw from "twin.macro";
import SingleProject from "./Projects/SingleProject";
import { useLocation } from "react-router-dom";
import { sleep } from "../utils/helpers";

const Container = tw.div`xl:mx-20 md:mx-4 mx-2 flex flex-col -mt-8`;
const Label = tw.h3`text-[40px] xl:text-[60px] font-extrabold uppercase leading-[60px] text-white text-center`;
const ProjectsContainer = tw.div`relative flex flex-wrap transition-all duration-300  items-center w-full gap-1.5 mt-5 lg:mt-10  lg:gap-5`;

const Projects = ({ projectsRef }) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const projectIdFromQuery = query.get("projectId");
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isInitialRender, setIsInitialRender] = useState(false);
  const [selectedProjectOffset, setSelectedProjectOffset] = useState({
    left: 0,
    top: 0,
  });
  const [selectedProjectStartOffset, setSelectedProjectStartOffset] = useState({
    left: 0,
    top: 0,
  });
  const [isListHidden, setIsListHidden] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [isFloating, setIsFloating] = useState(true);
  const selectedProject = projects.find((p) => p.id === selectedProjectId);
  const [isFixed, setIsFixed] = useState(false);
  const [isFixedSecondButton, setIsFixedSecondButton] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const clickedProjectRef = useRef(null);
  const singleProjectRef = useRef(null);

  const selectProjectHandler = async (id) => {
    if (isLoading || (!isInitialRender && !id)) return;
    setIsLoading(true);

    if (selectedProjectId) {
      setIsFloating(true);
      setVisibleProjects(projects);
      await sleep(500);

      if (projectsRef.current) {
        const top =
          projectsRef.current.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: top + selectedProjectStartOffset.top - 100,
          behavior: "smooth",
        });
      }
      setSelectedProjectOffset({
        left: selectedProjectStartOffset.left,
        top: selectedProjectStartOffset.top,
      });
      await sleep(300);
      setIsListHidden(false);
      await sleep(300);
      setSelectedProjectId(null);
      setIsLoading(false);
    } else {
      if (!clickedProjectRef.current) {
        setIsLoading(false);

        return;
      }

      const top =
        projectsRef.current.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
      const rect = clickedProjectRef.current.getBoundingClientRect();

      const parentRect = projectsRef.current?.getBoundingClientRect();
      const relativeLeft = rect.left - (parentRect?.left || 0);
      const relativeTop = rect.top - (parentRect?.top || 0) - 100;

      setSelectedProjectId(Number(id));
      setIsListHidden(true);
      setSelectedProjectOffset({ left: relativeLeft, top: relativeTop });
      setSelectedProjectStartOffset({ left: relativeLeft, top: relativeTop });

      await sleep(100);
      setSelectedProjectOffset({ left: 0, top: 0 });

      const animTime =
        projects.find((p) => p.id === Number(id))?.floatAnimTime || 800;
      await sleep(300);

      setIsFloating(false);
      setVisibleProjects([]);

      await sleep(300);

      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsInitialRender(true);
  }, []);

  useEffect(() => {
    selectProjectHandler(projectIdFromQuery);
  }, [projectIdFromQuery]);

  useEffect(() => {
    const handleScroll = () => {
      if (!singleProjectRef.current) return;
      const rect = singleProjectRef.current.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom > 140) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
      if (rect.bottom > 140) {
        setIsFixedSecondButton(true);
      } else {
        setIsFixedSecondButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inicijalno

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container ref={projectsRef}>
      <Label>Projects</Label>
      <ProjectsContainer
        className={isFloating ? `justify-center` : `justify-start`}
      >
        {visibleProjects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              item={item}
              selectedProjectId={selectedProjectId}
              selectedProjectOffset={selectedProjectOffset}
              isListHidden={isListHidden}
              visibleProjects={visibleProjects}
              isFloating={false}
              projectsRef={projectsRef}
              containerRef={
                Number(projectIdFromQuery) === item.id
                  ? clickedProjectRef
                  : null
              }
            />
          );
        })}
        {selectedProject && (
          <SingleProject
            item={selectedProject}
            selectedProjectId={selectedProjectId}
            selectedProjectOffset={selectedProjectOffset}
            isListHidden={isListHidden}
            visibleProjects={visibleProjects}
            isFloating={isFloating}
            isSingleProject={true}
            containerRef={singleProjectRef}
            isFixed={isFixed}
            isFixedSecondButton={isFixedSecondButton}
          />
        )}
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
