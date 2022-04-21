import { useEffect, useState } from "react";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyle from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, updatePost } from "../../redux/actions/posts.action";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPosts(postData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const classes = useStyle();
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        noValidate
        className={`${classes.form} ${classes.root}`}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Memories
        </Typography>
        <TextField
          className={classes.root}
          name="creator"
          label="Creator"
          variant="outlined"
          fullWidth
          value={postData.creator}
          onChange={handleInput}
        />
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          value={postData.title}
          onChange={handleInput}
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          minRows={2}
          value={postData.message}
          onChange={handleInput}
        />
        <TextField
          name="tags"
          label="Tags (Commen Seprate)"
          variant="outlined"
          fullWidth
          value={postData.tags}
          // onChange={handleInput}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
