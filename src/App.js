import { React, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Todo from './Todo';
import './App.css';
import { FormControl, Input, InputLabel } from '@mui/material';
import querySnapshot from './firebaseget';
import { addDoc, collection, serverTimestamp} from 'firebase/firestore';
import db from './firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads, we need to listen  to the database and fetch new todos as they get add/removed
  useEffect(() => {
    //this code here... fires when the app.js loads
  
      console.log(querySnapshot.docs.map(doc=>doc.data()));
      // arr.push(doc.data().todo);
      setTodos(querySnapshot.docs.map(doc=>({id:doc.id,todo: doc.data().todo})))
  
  },[]);

  const addTodo = async (event) => {
    //this will fire off when  we click  the button
    event.preventDefault(); //will stop refresh
    // await setDoc(doc(db, 'todos','Id'), {
    //   todo: input
    // });
    await addDoc(collection(db, "todos"), {
      todo:input,
      timestamp:serverTimestamp()
    });
    // setTodos([...todos, input]);
    setInput(''); //clear up the  input after click on add-todo
    console.log(todos);
  };
  return (
    <div className="App">
      <h1>hello world!</h1>
      <form>
        <FormControl>
          <InputLabel>✅Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disable={!input}
          type="submit"
          variant="contained"
          color="primary"
          onClick={addTodo}
        >
          add todo
        </Button>
        <ul>
          {todos.map((todo) => (
            //<li>{todo}</li>
            <Todo todo={todo} />
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
