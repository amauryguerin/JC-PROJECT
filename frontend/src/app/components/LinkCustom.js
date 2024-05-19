"use client"
import styled from "styled-components";
import Link from "next/link"

const StyledLink = styled(Link)`
  color: ${props =>
          props.$variant === "header"
                  ? "var(--color--white);"
                    : "var(--color--black)"};
  font-size: ${props =>
          props.$variant === "header"
                  ? "4rem;"
                    : "1.5rem"};
  font-weight: 700;
  text-transform: uppercase;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--color--black);

  &:hover {
    color: ${props =>
            props.$variant === "header"
                    ? "var(--color--black);"
                        : ""};
  }
`;
const LinkCustom = ({href, children, variant}) => {

    return (
        <StyledLink $variant={variant} href={href}>{children}</StyledLink>
    );
};
export default LinkCustom;