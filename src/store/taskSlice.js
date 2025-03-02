import { createSlice, nanoid, createAction } from '@reduxjs/toolkit';

const createTask = (title) => ({
  id: nanoid(),
  title,
  completed: false,
  assignedTo: ''
});

const initialState = [
  createTask('Order more stuff'),
  createTask('water the plants')
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createTask(action.payload));
    },
    remove: (state, action) => {
      return state.filter((task) => task.completed === false);
    },
    toggle: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.completed = action.payload.completed;
    },
    assignToUser: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.assignedTo = action.payload.humanId;
    }
  }
});

export const toggleTask = createAction('tasks/toggle', (taskId, completed) => ({
  payload: { taskId, completed }
}));

export const removeTask = createAction('tasks/remove', () => ({
  payload: {}
}));

export const assignTask = createAction(
  'tasks/assignToUser',
  (humanId, taskId) => ({
    payload: { humanId, taskId }
  })
);
