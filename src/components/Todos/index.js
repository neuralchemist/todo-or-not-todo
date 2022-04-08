import { useState } from "react";
// mui 5
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { Container } from "@mui/material";
// custom components
import TodoModal from "./TodoModal";
import TodoCard from "./TodoCard";


function Todos() {
  const [todos, setTodos] = useState([]);

  const handleCompleted = (selectedTodo) => {
    const new_todos = todos.map((todo) =>
      todo.id === selectedTodo.id
        ? { ...selectedTodo, completed: !selectedTodo.completed }
        : todo
    );
    setTodos(new_todos);
  };
  return (
    <Container maxWidth="lg" sx={{ mt: 9 }}>
      <Paper
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h2">Todo or not todo</Typography>
          <TodoModal setTodos={setTodos} />
        </Box>
        {todos.length !== 0 && (
          <Box width="100%" my={4}>
            {todos.map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                handleCompleted={handleCompleted}
              />
            ))}
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default Todos;
