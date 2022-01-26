import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import Projects from "./pages/Projects"
import ProjectContext from "./utils/ProjectContext"
import Login from "./pages/Login"
import Users from "./pages/Users"
import Companies from "./pages/Companies"

function App() {
  const [projects, setProjects] = useState([])
  const [companies, setCopmanies] = useState([])

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const getProjects = async () => {
    const response = await axios.get("http://localhost:5000/api/projects")
    setProjects(response.data)
  }

  const getCopmanies = async () => {
    const response = await axios.get("http://localhost:5000/api/companies")
    setCopmanies(response.data)
  }

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/auth/users", {
      headers: {
        Authorization: localStorage.tokenDashboardProjects,
      },
    })
    setUsers(response.data)
  }

  useEffect(() => {
    getProjects()
    getCopmanies()
    getUsers()
  }, [])

  const deleteProject = async ProjectId => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${ProjectId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardProjects,
        },
      })
      toast.success("project deleted")
      getProjects()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login/admin", adminBody)
      localStorage.tokenDashboardProjects = response.data
      toast.success("login success")
      navigate("/projects")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editProject = async (e, projectId) => {
    e.preventDefault()
    try {
      const form = e.target

      

      const projectBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        video: form.elements.video.value,
        date: form.elements.date.value,
        demoLink: form.elements.demoLink.value,
        gitHubLink: form.elements.gitHubLink.value,
        field: form.elements.field.value,
        
        // type: form.elements.type.value,
      }
      await axios.put(`http://localhost:5000/api/projects/admain/${projectId}`, projectBody, {
        headers: {
          Authorization: localStorage.tokenDashboardProjects,
        },
      })
      getProjects()
      toast.success("edit success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addProject = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const projectBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        video: form.elements.video.value,
        date: form.elements.date.value,
        demoLink: form.elements.demoLink.value,
        gitHubLink: form.elements.gitHubLink.value,
        field: form.elements.field.value,
      }
      await axios.post(`http://localhost:5000/api/projects/add-project-admain`, projectBody, {
        headers: {
          Authorization: localStorage.tokenDashboardProjects,
        },
      })
      getProjects()
      toast.success("add project success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenDashboardProjects")
  }

  const addAdmin = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const adminBody = {
        fullName: form.elements.fullName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post(`http://localhost:5000/api/auth/add-admin`, adminBody, {
        headers: {
          Authorization: localStorage.tokenDashboardProjects,
        },
      })
      getUsers()
      toast.success("add admin success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteUser = async userId => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/${userId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardProjects,
        },
      })
      toast.success("user deleted")
      getUsers()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deletCompany = async compaanyId => {
    try {
      await axios.delete(`http://localhost:5000/api/companies/${compaanyId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardProjects,
        },
      })
      toast.success("company deleted")
      getCopmanies()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const activateOffer = async offerId => {
    try {
      await axios.delete(`http://localhost:5000/api/companies/${offerId}/activate`, {
        headers: {
          Authorization: localStorage.tokenDashboardProjects,
        },
      })
      toast.success("offer activate")
      getProjects()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  //add sub
  const addSubscription = async (e,companyId )=> {
    e.preventDefault()
    try {
      const form = e.target
      const subBody = {
        date: form.elements.date.value,
      }
      await axios.post(`http://localhost:5000/api/companies/${companyId}/sub`, subBody, {
        headers: {
          Authorization: localStorage.tokenDashboardProjects,
        },
      })
      getCopmanies()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const store = {
    projects,
    users,
    companies,
    deleteProject,
    login,
    editProject,
    addProject,
    logout,
    addAdmin,
    deleteUser,
    deletCompany,
    activateOffer,
    addSubscription,
  }

  return (
    <ProjectContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route
              path="/projects"
              element={localStorage.tokenDashboardProjects ? <Projects /> : <Navigate to="/login" />}
            />
            <Route path="/users" element={localStorage.tokenDashboardProjects ? <Users /> : <Navigate to="/login" />} />
            <Route
              path="/companies"
              element={localStorage.tokenDashboardProjects ? <Companies /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </ProjectContext.Provider>
  )
}

export default App
