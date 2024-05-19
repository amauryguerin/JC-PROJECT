import SiteFooter from "@/app/components/SiteFooter";
import getSiteFooter from "@/app/libs/getSiteFooter";
import getProjectBySlug from "@/app/libs/getProjectBySlug";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";


const AboutBySlugPage = async ({params}) => {
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
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
            >{projectBySlug.attributes.description}</ReactMarkdown>
            <SiteFooter projectTitle={params.slug} isProjectVideo={isProjectVideo} siteFooterData={siteFooter.data}></SiteFooter>
        </div>
    );
};

export default AboutBySlugPage;