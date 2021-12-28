import { useState } from "react"
import { Button } from "react-bootstrap"
import UserDeleteModal from "./UserDeleteModal.js"
import UserViewModal from "./UserViewModal"
import { MdDeleteOutline } from "react-icons/md";
import {AiOutlineEdit,AiOutlineFolderView} from "react-icons/ai";
function UserRow(props) {
  const { user } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)

  if (!user) return <p> loding .. </p>
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user._id}</td>
      <td>{user.fullName}</td>
      <td>{user.email}</td>
      <td>
        <img src={user.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      </td>
      <td>{user.role}</td>
      <td>
        <Button variant="" className="me-2" onClick={() => setViewShow(true)}>
        <AiOutlineFolderView/>
        </Button>
        {user.role === "User" ? (
          <Button variant="" onClick={() => setDeleteShow(true)}>
          < MdDeleteOutline/>
          </Button>
        ) : null}
      </td>
      <UserViewModal show={viewShow} setShow={setViewShow} user={user} />
      <UserDeleteModal show={deleteShow} setShow={setDeleteShow} userId={user._id} />
    </tr>
  )
}

export default UserRow
