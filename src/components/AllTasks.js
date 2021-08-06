import { Box } from '@twilio-paste/box';
import { Heading } from '@twilio-paste/heading';
import { Button } from '@twilio-paste/button';
import { Stack } from '@twilio-paste/stack';
import { useDispatch, useSelector } from 'react-redux';
import { CreateTask } from './CreateTask';
import { Task } from './Task';
import { removeTask, taskSlice } from '../store/taskSlice';

export const AllTasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <Box width="100%" margin="space100" padding="space50">
      <Heading>Tasks</Heading>
      <CreateTask />
      <Stack orientation="vertical" spacing="space60">
        {tasks
          .filter((task) => task.completed === false)
          .map((task) => (
            <Task key={task.id} taskId={task.id} />
          ))}

        {/* <Button onClick={() => dispatch(removeTask(tasks))}>
          {' '}
          delete checked boxes
        </Button> */}
      </Stack>
    </Box>
  );
};
