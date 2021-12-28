import { useContext } from "react"
import { Button, Image, ListGroup, Modal } from "react-bootstrap"

import ProjectsContext from "../utils/ProjectContext"

function CompanyDeleteModal(props) {
  const { deletCompany } = useContext(ProjectsContext)
  const { show, setShow, companyId } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Delete company</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure to delete this company ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => deletCompany(companyId)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CompanyDeleteModal