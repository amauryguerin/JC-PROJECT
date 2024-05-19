import SiteFooter from "@/app/components/SiteFooter";
import getSiteFooter from "@/app/libs/getSiteFooter";
import getProjectBySlug from "@/app/libs/getProjectBySlug";

const FilmBySlugPage = async ({params}) => {
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
        <div>
            <video width="100%" height="auto" autoPlay muted controls>
                <source src={projectBySlug.attributes.video.data.attributes.url}
                        type="video/mp4"/>
                <track
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                />
                Your browser does not support the video tag.
            </video>
            <SiteFooter projectTitle={params.slug} isProjectVideo={isProjectVideo}
                        siteFooterData={siteFooter.data}></SiteFooter>
        </div>
    );
};

export default FilmBySlugPage;