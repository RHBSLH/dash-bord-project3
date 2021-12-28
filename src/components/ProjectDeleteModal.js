import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"

import ProjectsContext from "../utils/ProjectContext"

function ProjectDeleteModal(props) {
  const { deleteProject } = useContext(ProjectsContext)
  const { show, setShow, projectId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this project ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deleteProject(projectId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProjectDeleteModal