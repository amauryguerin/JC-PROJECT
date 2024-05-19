import getProjectBySlug from "@/app/libs/getProjectBySlug";
import ProjectGallery from "@/app/components/ProjectGallery";
import SiteFooter from "@/app/components/SiteFooter";
import getSiteFooter from "@/app/libs/getSiteFooter";
import ProjectSection from "@/app/components/ProjectSection";

const ProjectBySlugPage = async ({params}) => {
    const projectBySlug = await getProjectBySlug(params.slug);
    const siteFooter = await getSiteFooter;
    if (!projectBySlug) {
        return (
            <div>
                <h1>Aucun projet trouvé avec le slug {params.slug}</h1>
            </div>
        );
    }
    const isProjectVideo = projectBySlug.attributes.video.data !== null;
    return (
        <ProjectSection>
            <ProjectGallery projectData={projectBySlug}></ProjectGallery>
            <SiteFooter projectTitle={params.slug} isProjectVideo={isProjectVideo} siteFooterData={siteFooter.data}></SiteFooter>
        </ProjectSection>
    );
};

export default ProjectBySlugPage;