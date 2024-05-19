"use client"
import styled from "styled-components";
import LinkCustom from "@/app/components/LinkCustom";

const StyledSiteFooter = styled.footer`
  nav {
    ul {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  }
`;

const SiteFooter = ({siteFooterData, projectTitle, isProjectVideo}) => {
    const footerItems = siteFooterData.attributes.menu.filter(footerItem => {
        // Filtrer l'onglet "Film" uniquement si le projet a des vidéos
        return footerItem.label !== "Film" || isProjectVideo;
    });

    return (
        <StyledSiteFooter>
            <nav>
                <ul>
                    {footerItems.map(footerItem => (
                        <li key={footerItem.id}>
                            <LinkCustom href={'/projects/' + projectTitle + footerItem.url}>
                                {footerItem.label}
                            </LinkCustom>
                        </li>
                    ))}
                </ul>
            </nav>
        </StyledSiteFooter>
    )
}

export default SiteFooter;