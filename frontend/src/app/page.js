import getProjects from "@/app/libs/getProjects";
import ProjectsGallery from "@/app/components/ProjectsGallery";

const HomePage = async () => {
    const projects = await getProjects;
    console.log(projects);
    return (
        <main>
            <ProjectsGallery projectsData={projects.data}/>
        </main>
    )
}

export default HomePage;