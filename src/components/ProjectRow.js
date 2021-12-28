import { useState } from "react"
import { Button } from "react-bootstrap"
import ProjectViewModal from "./ProjectViewModal"
import ProjectDeleteModal from "./ProjectDeleteModal"
import ProjectEditModal from "./ProjectEditModal"
import { MdDeleteOutline } from "react-icons/md";
import {AiOutlineEdit,AiOutlineFolderView} from "react-icons/ai";

function ProjectRow(props) {
  const { project } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [editShow, setEditShow] = useState(false)

  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{project._id}</td>
      <td>{project.title}</td>
      <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{project.description}</td>
      <td>
        <img src={project.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>
       <video src= {project.video} style={{ objectFit: "contain", height: "100px", width: "100%" }}/>
      </td>
      <td>{project.date}</td>
      <td>{project.demoLink}</td>
      <td>{project.gitHubLink}</td>
      <td>{project.field}</td>
      <td>{project.type}</td>
     
      <td >
     
        <Button variant=""  onClick={() => setViewShow(true)}>
          <AiOutlineFolderView/>
        </Button>
         {project.type === "General" ? (
        <Button variant=""  onClick={() => setEditShow(true)}>
          <AiOutlineEdit/>
        </Button>
          ) : null}
        <Button variant="" onClick={() => setDeleteShow(true)}>
        < MdDeleteOutline/>
       
        </Button>
      </td>
      <ProjectViewModal show={viewShow} setShow={setViewShow} project={project} />
      <ProjectDeleteModal show={deleteShow} setShow={setDeleteShow} projectId={project._id} />
      <ProjectEditModal show={editShow} setShow={setEditShow} project={project} />
    </tr>
  )
}

export default ProjectRow
