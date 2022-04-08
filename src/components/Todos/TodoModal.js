import { useState } from "react";
// mui 5
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
// uuid
import { v4 as uuid } from "uuid";

const style = {
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function TodoModal({ setTodos }) {
  const [todo, setTodo] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSave = () => {
    if (todo) {
      const newTodo = {
        id: uuid(),
        title: todo,
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
      handleClose();
      setTodo("");
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Add
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add a new todo
          </Typography>
          <TextField
            onChange={handleChange}
            value={todo}
            placeholder="Todo"
            sx={{ mb: 3 }}
          />
          <Box >
            <Button variant="outlined" onClick={handleSave}>
              Save
            </Button>
            <Button sx={{ml: 2}} variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
export default TodoModal;
