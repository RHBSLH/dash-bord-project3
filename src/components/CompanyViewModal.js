import { Button, Image, ListGroup, Modal } from "react-bootstrap"

function CompanyViewModal(props) {
  const { show, setShow, company } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View company</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>name:</strong> {company.fullName} 
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