function ToDoList({ tasks }) {
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="incomplete">{task}</li>
        ))}
      </ul>
    );
  }

export default ToDoList;