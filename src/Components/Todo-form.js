import React, { useState, useContext } from "react";
import "../App.css";

import {
  FormGroup,
  Input,
  Button,
  InputGroup,
  InputGroupAddOn,
  Form,
} from "reactstrap";
import { v4 } from "uuid";
import { TodoContext } from "../Context/TodoContext";
import { ADD_TODO } from "../Context/action.types";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please enter todo");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="your next todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />

          <Button color="warning">Add</Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};
export default TodoForm;
