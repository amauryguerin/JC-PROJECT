import getProjects from "@/app/libs/getProjects";

const getProjectBySlug = async (projectSlug) => {
    const projects = await getProjects;
    const matchingProjects = projects.data.filter((project) => project.attributes.slug === projectSlug);
    return matchingProjects[0];
};

export default getProjectBySlug;