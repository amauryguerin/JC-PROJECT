import getPageAbout from "@/app/libs/getPageAbout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const AboutPage = async ({params}) => {
    const pageData = await getPageAbout
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
        >
            {pageData.data.attributes.content}
        </ReactMarkdown>
    )
}

export default AboutPage;