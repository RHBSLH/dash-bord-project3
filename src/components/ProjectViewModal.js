import { useContext } from "react"
import { Button, ListGroup, Modal } from "react-bootstrap"
import ProjectsContext from "../utils/ProjectContext"

function ProjectViewModal(props) {
  const { show, setShow, project } = props
const {activateOffer}=useContext(ProjectsContext)

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View projct</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Title:</strong> {project.title}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Description:</strong> {project.description}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>image:</strong>{" "}
            <img src={project.image} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>video:</strong> {project.video}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>date:</strong> {project.date}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>demoLink:</strong> {project.demoLink}
          </ListGroup.Item>
          <strong>gitHubLink:</strong> {project.gitHubLink}
          <ListGroup.Item>
            <strong>field:</strong> {project.field}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>type:</strong> {project.type}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup.Item>
            <strong>offers:</strong>
            <ListGroup>
              
            </ListGroup>
          </ListGroup.Item>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProjectViewModal
