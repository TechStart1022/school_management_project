import ProjectsPage from "../Projects/ProjectsPage";

interface props{
    visitor:string;
}
const ChooseUser:React.FC<props> = ({visitor}) =>{
    return (
        <div>
            <ProjectsPage />
        </div>
    )
}
export default ChooseUser