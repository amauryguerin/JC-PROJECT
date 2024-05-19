"use client"
import styled from "styled-components";

const StyledProjectSection = styled.section`
    height: calc(60vh);
    & * {
      height: 100%;
      max-height: 100%;
    }
`;
const ProjectSection = ({children}) => {
    return (
        <StyledProjectSection>
            {children}
        </StyledProjectSection>
    )
}

export default ProjectSection;