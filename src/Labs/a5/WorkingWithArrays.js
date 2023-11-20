import { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
    // const API = "http://localhost:4000/a5/todos";
    const API_BASE = "https://kanbas-node-server-app-kpi2.onrender.com";
    const API =`${API_BASE}/a5/todos`;
    const [errorMessage, setErrorMessage] = useState(null);
    const [displayError, setDisplayError] = useState(false)

    const [todo, setTodo] = useState({
      id: 1,
      title: "NodeJS Assignment",
      description: "Create a NodeJS server with ExpressJS",
      due: "2021-09-09",
      completed: false,
    });  

    const [todos, setTodos] = useState([]);

    const postTodo = async () => {
      const response = await axios.post(API, todo);
      setTodos([...todos, response.data]);
    };  
    
    const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
    };

    const createTodo = async () => {
      const response = await axios.get("http://localhost:4000/a5/todos/create");
      // const response = await axios.post("http://localhost:4000/a5/todos", todo);
      // setTodos([...todos, response.data])
      setTodos(response.data)
    }

    const deleteTodo = async (id) => {
      try {
        // const response = await axios.get(`http://localhost:4000/a5/todos/${id}/delete`);
        const response = await axios.delete(`http://localhost:4000/a5/todos/${id}`);
        setTodos(response.data)
        setDisplayError(false)
      } catch(error) {
        console.log(error);
        setErrorMessage(error.response.data.message || "Unable to delete Todo with ID");
        setDisplayError(true)
      }
    }

    const fetchTodoById = async (id) => {
      const response = await axios.get(`${API}/${id}`);
      setTodo(response.data);
    };

    const updateTitle = async () => {
      try {
        const response = await axios.get(
          `${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
        setDisplayError(false)
      } catch(error) {
        console.log(error);
        setErrorMessage(error.response.data.message || "Unable to update title Todo with ID");  
        setDisplayError(true)
      }
    };

    const updateTodo = async () => {
      try {
        const response = await axios.put(
          `${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (
          t.id === todo.id ? todo : t)));
        setTodo({});
        setDisplayError(false)
      } catch(error) {
        console.log(error);
        setErrorMessage(error.response.data.message || "Unable to update Todo with ID"); 
        setDisplayError(true)
      }
    };
  
    useEffect(() => {
      fetchTodos();
    }, []);
  
    return (
      <div>
        <h3>Working with Arrays</h3>
        <input
          value={todo.title}
          onChange={(e) => setTodo({
            ...todo, title: e.target.value })}
          className="form-control mb-2"
          type="text"
        />
        <input
          value={todo.id}
          onChange={(e) => setTodo({
            ...todo, id: e.target.value })}
          className="form-control mb-2"
          type="number"
        />

        <textarea
          onChange={(e) => setTodo({ ...todo,
            description: e.target.value })}
          value={todo.description} type="text"
        />
        <input
          onChange={(e) => setTodo({
            ...todo, due: e.target.value })}
          value={todo.due} type="date"
        />
        <label>
          <input
            onChange={(e) => setTodo({
              ...todo, completed: e.target.checked })}
            value={todo.completed} type="checkbox"
          />
          Completed
        </label>

        <button onClick={updateTitle}
          className="btn btn-success mb-2 w-100">
          Update Title
        </button>
        <button className="btn btn-warning mb-2 w-100" onClick={postTodo} >
          Post Todo
        </button>
        <button className="btn btn-primary mb-2 w-100"  onClick={updateTodo}>
          Update Todo
        </button>
        {displayError && (
          <div className="alert alert-danger mb-2 mt-2">
            {errorMessage}
          </div>
        )}
        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id}
                className="list-group-item">
              <input
                checked={todo.completed}
                type="checkbox" readOnly
              />
              {todo.title}
              <button
                onClick={() => fetchTodoById(todo.id)}
                className="btn btn-warning me-2 float-end" >
                Edit
              </button>
              <button className="btn btn-danger float-end" onClick={() => deleteTodo(todo)}>
                Delete Todo
              </button>
      
              <p>{todo.description}</p>
              <p>{todo.due}</p>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary" onClick={createTodo}>
          Create Todo
        </button>
        
        <h3>Updating an Item in an Array</h3>
        <a
          href={`${API}/${todo.id}/title/${todo.title}`}
          className="btn btn-primary me-2" >
          Update Title to {todo.title}
        </a>
        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>
        <h3>Filtering Array Items</h3>
        <a 
            href={`${API}/?completed=true`}
            className="btn btn-primary me-2">
            Get Completed Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <input
            className="form-control"
            value={todo.id}
            onChange={(e) => setTodo({ ...todo,
            id: e.target.value })}/>
        <a href={`${API}/${todo.id}`}
            className="btn btn-primary me-2">
            Get Todo by ID
        </a>
        <h4>Creating new Items in an Array</h4>
        <a href={`${API}/create`}
          className="btn btn-primary me-2">
          Create Todo
        </a>
        <input
          value={todo.id}
          onChange={(e) => setTodo({
            ...todo, id: e.target.value })}
          className="form-control mb-2"
          type="number"
        />
        <h3>Deleting from an Array</h3>
        <a href={`${API}/${todo.id}/delete`}
          className="btn btn-primary me-2">
          Delete Todo with ID = {todo.id}
        </a>
        {/* extra credit */}
        <br/>
        <input
          type="text"
          onChange={(e) => setTodo({...todo, description: e.target.value})}
        />
        <a
          href={`${API}/${todo.id}/description/${todo.description}`}
          className="btn btn-primary me-2 float-end"
        >
          Update Description
        </a>
        <br/>
        <label>
          <input
            type="checkbox"
            onChange={(e) => setTodo({...todo, completed: !todo.completed})}
          />
          Completed
        </label>
        <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary me-2 float-end"
        >
          Update Completed
        </a>
      </div>
    );
  }
export default WorkingWithArrays;