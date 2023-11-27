import {
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React from 'react';
import './Todo.css';
import { deleteDoc, doc } from 'firebase/firestore';
import db from './firebase';


function Todo(props) {
  const Delete = () => {
     deleteDoc(doc(db, 'todos', props.todo.id));
  };
  return (

      <List className="todo-list">
        <ListItem>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy deadline ⏰"
          />
        </ListItem>
        <Button onClick={Delete}>
          <DeleteForeverIcon />
        </Button>
      </List>
  );
}

export default Todo;
