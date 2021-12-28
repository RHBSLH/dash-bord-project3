import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"

import ProjectsContext from "../utils/ProjectContext"

function ProjectAddModal(props) {
  const { show, setShow } = props
  const { addProject } = useContext(ProjectsContext)
  const allFields = ["Industry", "Commercial", "Education", "Healthy", "Entertainment", "culture"]
  const types = ["General","User","Company"]
 
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addProject}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Description
            </Form.Label>
            <Col md="8">
              <Form.Control as="textarea" name="description" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              image
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              video
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="video" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              date
            </Form.Label>
            <Col md="8">
              <Form.Control type="date" name="date" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              demoLink
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="demoLink" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              gitHubLink
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="gitHubLink" required />
            </Col>
          </Form.Group>
          {/* <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              type
            </Form.Label>
            <Col md="8">
              {types.map(type => (
                <Row>
                  <Col md="2">
                    <Form.Check
                      type="checkbox"
                      name="type"
                      value={type}
                    /> {type}
                  </Col>
                  <Col md="2">
                    <span>{types.value}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group> */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              field
            </Form.Label>
            <Col md="8">
              {allFields.map(field => (
                <Row>
                  <Col md="2">
                    <Form.Check
                      type="checkbox"
                      name="field"
                      value={field}
                    /> {field}
                  </Col>
                  <Col md="2">
                    <span>{allFields.value}</span>
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
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add project
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ProjectAddModal
