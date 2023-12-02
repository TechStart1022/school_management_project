import { MOCK_PROJECTS } from "./MockProjects";

const ProjectsPage = () =>{
    return (
        <div>
            <h1>Projects</h1>
            <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
        </div>
    );
}
export default ProjectsPage;