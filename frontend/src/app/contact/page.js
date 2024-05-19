import getPageContact from "@/app/libs/getPageContact";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const ContactPage = async ({params}) => {
const pageData = await getPageContact
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
        >
            {pageData.data.attributes.content}
        </ReactMarkdown>
    )
}

export default ContactPage;