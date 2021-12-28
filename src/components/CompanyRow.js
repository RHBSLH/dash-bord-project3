import { useState } from "react"
import { Button } from "react-bootstrap"
import CompanyDeleteModal from "./CompanyDeleteModal.js"
import CompanyViewModal from "./CompanyViewModal.js"
import { MdDeleteOutline } from "react-icons/md";
import {AiOutlineEdit,AiOutlineFolderView} from "react-icons/ai";

function UserRow(props) {
  const { company } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  if (!company) return <p> loding .. </p>
  return (<>
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{company._id}</td>
      <td>{company.name}</td>
      <td>{company.aboutUs}</td>
      {/* <td>{company.projects}</td> */}
      <td>
        <img src={company.logo} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      
      <td>{company.email}</td>
      <td>{company.subscription}</td> 
    
      <td>
        <Button variant="" className="me-2" onClick={() => setViewShow(true)}>
        <AiOutlineFolderView/>
        </Button>
      
          <Button variant="" onClick={() => setDeleteShow(true)}>
          < MdDeleteOutline/>
          </Button>
        
      </td>
      <CompanyViewModal show={viewShow} setShow={setViewShow} company={company} />
      <CompanyDeleteModal show={deleteShow} setShow={setDeleteShow} companyId={company._id} />
    </tr>
    </>
  )
}

export default UserRow