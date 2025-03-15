import { useState } from 'react';
import ToDoList from './ToDoList'; // Updated import

function App() {
  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <div>
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;