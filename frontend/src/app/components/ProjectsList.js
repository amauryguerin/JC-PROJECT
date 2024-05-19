"use client"
import LinkCustom from "./LinkCustom";
import styled from "styled-components";
const StyledProjectsList = styled.ul`
    display: grid;
    place-items: center;
    li {
      width: fit-content;
    }
`;

const ProjectsList = ({ projectsData }) => {
    return (
        <StyledProjectsList>
            {projectsData.map(project => {
                return (
                    <li key={project.id}>
                        <LinkCustom href={'/projects/' + project.attributes.slug}>{project.attributes.name}</LinkCustom>
                    </li>
                )
            })}
        </StyledProjectsList>
    )
}

export default ProjectsList;