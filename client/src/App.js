import { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import Memory from "./images/memories.jpg";
import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./redux/actions/posts.action";

import useStyles from "./Styles";

function App() {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2">
            Memories
          </Typography>
          <img
            src={Memory}
            className={classes.image}
            alt="memories img"
            height="60"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              className={classes.mainContainer}
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={6} md={8}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}

export default App;
