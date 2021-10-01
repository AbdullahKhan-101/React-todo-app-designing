import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from '@material-ui/icons/Menu';
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar({ user }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar className="colorback" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Todo App
          </Typography>
          <Button color="inherit">
            <Link className="white" to="/">
              Todo
            </Link>
          </Button>

          {user ? (
            <Button color="inherit">
              <Link
                className="white"
                onClick={() => {
                  auth.signOut();
                  history.push("/login");
                }}
              >
                Logout
              </Link>
            </Button>
          ) : (
            <>
              <Button color="inherit">
                <Link className="white" to="/login">
                  Login
                </Link>
              </Button>
              <Button color="inherit">
                <Link className="white" to="/signup">
                  Signup
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
