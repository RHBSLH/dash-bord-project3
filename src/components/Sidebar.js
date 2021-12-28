import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"

import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import { useContext } from "react"
import ProjectContext from "../utils/ProjectContext"
import { AiOutlineProject, AiOutlineFundProjectionScreen } from "react-icons/ai"
import { MdOutlineHomeWork } from "react-icons/md"
import { FiUser } from "react-icons/fi"
const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout } = useContext(ProjectContext)
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "rgb(100, 100,100)" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem style={{marginTop:"44px"}}>
            <ListItemIcon>
              <AiOutlineProject />
            </ListItemIcon>
            <ListItemText primary=" project dashboard" />
          </ListItem>
        </List>
        <List  style={{marginTop:"60px"}}>
          <Link to="/projects">
            <ListItem button>
              <ListItemIcon>
                <AiOutlineFundProjectionScreen />
              </ListItemIcon>
              <ListItemText primary="projeects" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/companies">
            <ListItem button>
              <ListItemIcon>
                <MdOutlineHomeWork />
              </ListItemIcon>
              <ListItemText primary="companies" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        
          <Link to="/users">
            <ListItem button>
              <ListItemIcon>
                <FiUser />
              </ListItemIcon>
              <ListItemText primary="users" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <List style={{ marginTop: "auto" }}>
          {localStorage.tokenDashboardFilms ? (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="logout" sx={{ color: "white", textDecoration: "none" }} onClick={logout} />
              </ListItem>
            </Link>
          ) : (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="login" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          )}
        </List>
      </Drawer>
    </ThemeProvider>
  )
}
