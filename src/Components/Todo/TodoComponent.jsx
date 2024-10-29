import {useEffect, useState} from "react";
import {
    Container,
    Button,
    Checkbox,
    List,
    ListItem,
    IconButton,
    Typography,
    Paper,
    FormControlLabel
} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import DeleteIcon from "@mui/icons-material/Delete";
import {TitleTextComponent} from "../UI/TitleTextComponent";
import {TextFieldComponent} from "./Components/TextFieldComponent";
import {BtnComponent} from "./Components/BtnComponent";

export function TodoComponent() {

    const theme = useTheme();
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function handleAddTask() {
        if (newTask.trim()) {
            setTasks([...tasks, {text: newTask, completed: false}]);
            setNewTask('');
        }
    }

    function handleDeleteTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    function handleCheckboxTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    return (
        <div>
            <Container maxWidth="sm" style={{marginTop: '50px'}}>
                <Paper elevation={3} style={{padding: '20px'}}>
                    <TitleTextComponent title={'To-Do List'}/>
                    <TextFieldComponent
                        onChange={(e) => setNewTask(e.target.value)}
                        value={newTask}
                        placeholder={"New task"}
                    />
                    <BtnComponent onClick={handleAddTask} text={'Add Task'}/>
                    <List>
                        {tasks.map((task, index) => (
                            <ListItem
                                key={index}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={task.completed}
                                            onChange={() => handleCheckboxTask(index)}
                                            style={{color: '#a3d133'}}
                                        />
                                    }
                                    label={
                                        <Typography
                                            style={{
                                                wordBreak: 'break-word',
                                                maxWidth: '100%',
                                                color: task.completed
                                                    ? theme.palette.text.disabled
                                                    : theme.palette.text.primary,
                                            }}
                                        >
                                            {task.text}
                                        </Typography>
                                    }
                                />
                                <IconButton onClick={() => handleDeleteTask(index)}>
                                    <DeleteIcon style={{color: '#4b2e2e'}}/>
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </Container>
        </div>
    );
}
