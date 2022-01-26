import { useContext } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import ProjectContext from "../utils/ProjectContext"

function ProjectEditModal(props) {
  const { show, setShow, project } = props
  const { editProject } = useContext(ProjectContext)
  const allFields = ["Industry", "Commercial", "Education", "Healthy", "Entertainment", "culture"]
 

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editProject(e, project._id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" defaultValue={project.title}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" defaultValue={project.description}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" defaultValue={project.image}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              video
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="video" defaultValue={project.video}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              date
            </Form.Label>
            <Col md="8">
              <Form.Control type="date" name="date" defaultValue={project.date}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              demoLink
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="demoLink" defaultValue={project.demoLink}  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              gitHubLink
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="gitHubLink" defaultValue={project.gitHubLink}  />
            </Col>
          </Form.Group>
        
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              field
            </Form.Label>
            <Col md="8">
              {allFields.map(field => (
                <Row key={field._id}>
                  <Col md="2">
                    <Form.Check type="radio" name="field" value={field} label={field} /> 
                  </Col>
                  <Col md="2">
                   
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm Edit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ProjectEditModal
