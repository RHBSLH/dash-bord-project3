import { useContext, useState } from "react"
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap"
import ProjectsContext from "../utils/ProjectContext"

function CompanyViewModal(props) {
  const { show, setShow, company } = props
  const { addSubscription } = useContext(ProjectsContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View company</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>name:</strong> {company.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>aboutUs:</strong> {company.aboutUs}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>logo:</strong>
            <img src={company.logo} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>projects:</strong>
            <ListGroup>
              {company.projects.map(project => (
                <ListGroup.Item>{project.title}</ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>email:</strong> {company.email}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>subscription:</strong> {company.subscription}
            <br />
            <Form onSubmit={(e) => addSubscription(e,company._id)}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column md="3" >
                  date
                </Form.Label>
                <Col md="8">
                  <Form.Control type="date" name="date" defaultValue={company.subscription} />
                </Col>
              </Form.Group>
              <Button type="submit" > Subscription</Button>
            </Form>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CompanyViewModal
