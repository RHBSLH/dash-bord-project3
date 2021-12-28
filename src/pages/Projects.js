import { Button } from "react-bootstrap"
import {  useContext, useState } from "react"
import { Table } from "react-bootstrap"

import {BsPlusSquareDotted}   from "react-icons/bs";
import ProjectAddModal from "../components/ProjectAddModal"
import ProjectRow from "../components/ProjectRow"
import ProjectsContext from "../utils/ProjectContext"

function Projects() {
  const { projects } = useContext(ProjectsContext)
  const [show, setShow] = useState(false)
  if (!projects) return <p>loading..</p>
  return (
    <>
      <h1 style={{ marginTop: 10 }}>project  <Button  onClick={() => setShow(true)} variant="">
          <BsPlusSquareDotted />
        </Button>
</h1>
      
       
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "5%" }}>#</th>
            <th style={{ width: "10%" }}>Title</th>
            <th style={{ width: "15%" }}>Description</th>
            <th style={{ width: "15%" }}>image</th>
            <th style={{ width: "5%" }}>video</th>
            <th style={{ width: "5%" }}>date</th>
            <th style={{ width: "8%" }}>demoLink</th>
            <th style={{ width: "8%" }}>gitHubLink</th>
            <th style={{ width: "8%" }}>field</th>
            <th style={{ width: "8%" }}>type</th>
            
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <ProjectRow key={project._id} project={project} />
          ))}
        </tbody>
      </Table>
      <ProjectAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Projects