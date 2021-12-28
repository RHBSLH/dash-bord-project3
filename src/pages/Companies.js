import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import CompanyRow from "../components/CompanyRow"

import ProjectsContext from "../utils/ProjectContext"
import AdminAddModal from "../components/AdminAddModal"

function Companies() {
  const { companies } = useContext(ProjectsContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Company</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
      
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>name</th>
            <th style={{ width: "18%" }}>about as</th>
            {/* <th style={{ width: "18%" }}>projects</th> */}
            <th style={{ width: "18%" }}>logo</th>
            <th style={{ width: "18%" }}>email</th>
            <th style={{ width: "18%" }}> subscription</th>
            <th style={{ width: "36%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => (
            <CompanyRow key={company._id} company={company} />
          ))}
        </tbody>
      </Table>
      <AdminAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Companies