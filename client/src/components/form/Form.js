import { useState } from "react";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyle from "./styles";
import { useDispatch } from "react-redux";
import { createPosts } from "../../redux/actions/posts.action";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const classes = useStyle();

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;

    setPostData({ ...postData, [name]: value });
  };

  const clear = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPosts(postData));
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        noValidate
        className={`${classes.form} ${classes.root}`}
      >
        <Typography variant="h6">Creating a Memories</Typography>
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
          rows={2}
          value={postData.message}
          onChange={handleInput}
        />
        <TextField
          name="tags"
          label="Tags (Commen Seprate)"
          variant="outlined"
          fullWidth
          value={postData.tags}
          onChange={handleInput}
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
