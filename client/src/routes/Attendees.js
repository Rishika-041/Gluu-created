import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);


  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/user");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <Fragment>
      {" "}
      <div class="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 content-center">
      <table class="table mt-5 text-center">
        <h1>ATTENDEES</h1>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map(todo => (
            <tr key={todo.ID}>
              <td>{todo.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </Fragment>
  );
};

export default ListTodos;