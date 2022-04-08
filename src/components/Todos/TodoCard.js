// mui 5
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

function TodoCard({ todo, handleCompleted }) {
  const completeIcon = todo.completed ? <CheckIcon /> : <CloseIcon />;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <IconButton onClick={() => handleCompleted(todo)}>
        {completeIcon}
      </IconButton>
      <Typography variant="body1">{todo.title}</Typography>
    </Box>
  );
}

export default TodoCard;
