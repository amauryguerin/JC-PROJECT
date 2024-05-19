"use client"
import LinkCustom from "@/app/components/LinkCustom";
import styled from "styled-components";

const StyledSiteHeader = styled.header`
  nav {
    ul {
      display: flex;
      justify-content: center;
      position: relative;

      li {
        &:first-child {
          position: absolute;
          left: 0;
          top: -666px;
          transition: top ease-in-out .2s;

          a {
            font-size: 4rem;
            color: var(--color--white);
          }
        }

        &:last-child {
          position: absolute;
          right: 0;
          top: -666px;
          transition: top ease-in-out .2s;
          font-size: 4rem;

          a {
            font-size: 4rem;
            color: var(--color--white);
          }
        }

        &:not(:first-child):not(:last-child):hover {
          padding-bottom: 4rem;

          a {
            font-size: 4rem;
            transition: all ease-in-out .2s;
          }
        }

        a {
          color: var(--color--black);
          font-size: 2rem;
          transition: all ease-in-out .2s;
        }
      }

      &:hover {
        li:first-child, li:last-child {
          top: 50%;
        }
      }
    }
  }
`;
const SiteHeader = ({siteHeaderData}) => {
    return (
        <StyledSiteHeader>
            <nav>
                <ul>
                    {siteHeaderData.attributes.menu.map(headerItem => {
                        return (
                            <li key={headerItem.id}>
                                <LinkCustom variant="header" href={headerItem.url}>
                                    {headerItem.label}
                                </LinkCustom>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </StyledSiteHeader>
    )
}

export default SiteHeader;