# Lab-Assignment-3-Props-and-State-Management

### Instructions
In this lab assignment, you will practice passing tasks to the ToDoList component using props. You will create a hard-coded list of tasks in the App.jsx file and then pass these tasks to the ToDoList component.

### Instructions
#### Part A: State Management
Open the "App.jsx" file.
Import the useState hook from React.
Use the useState hook to define a state variable to store the list of tasks.
Initialize the state with the following array of hard-coded tasks:

[
  'Do laundry',
  'Go to gym',
  'Walk dog'
]
#### Part B: Passing Props
##### Step 1: Pass Tasks Using Props
Inside the return statement of the App component, pass the tasks array to the ToDoList component using the tasks prop:

<ToDoList tasks={tasks} />

##### Step 2: Display the Task List
In the ToDoList component's function parameters, destructure the tasks prop:
function ToDoList({ tasks }) {
  /* ... */
}
Use the map function to dynamically render each task as a list item on the screen.
Leave each task item styled as incomplete.

###### Submission Guidelines
###### GitHub
Create a new public GitHub repository to host your code.
Push all your assignment files (except the "node_modules" folder) to the GitHub repository.
###### D2L Submission
Compress all the files and folders for your assignment (except the "node_modules" folder) into a single ZIP file.
Upload the ZIP file to the appropriate assignment drop-box on D2L.
Include the link to your GitHub repository in the comments area.
