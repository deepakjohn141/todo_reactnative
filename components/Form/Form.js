import { Switch, TextInput, View, Text, Button } from "react-native";
import { useState, useContext } from "react";
import styles from "./styles";
import { StateContext } from '../../StateContext';



export default function Form(props) {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskStatus, setTaskStatus] = useState('due/false');
    const { tasks } = useContext(StateContext);
    const [taskList, setTaskList] = tasks

    const handleTitleChange = (value) => {
        setTaskTitle(value);
    }


    const handleAddTask = () => {
        if (taskTitle) {
            const data = {
                title: taskTitle,
                status: taskStatus
            };
            const updatedTaskList = [...taskList, data];
            setTaskList(updatedTaskList);
            setErrorMessage(null);
            setTaskTitle('');
            setTaskStatus('due/false')


        } else {
            setErrorMessage('Title is required.')
        }
    }

    const handleStatusChange = () => {
        setTaskStatus(taskStatus == 'due/false' ? 'done/true' : 'due/false');
    }

    const [errorMessage, setErrorMessage] = useState(null);


    return (

        <View style={styles.container}>
            {errorMessage && (
                <View>

                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                </View>
            )}
            <TextInput
                placeholder="Enter title"
                maxLength={150}
                onChangeText={handleTitleChange}
                defaultValue={taskTitle}
            />
            <View style={styles.statusContainer}>
                <Text style={styles.taskKeyText}>Status: </Text>
                <Text>{taskStatus}</Text>
                <Switch
                    value={taskStatus == 'due/false' ? false : true}
                    onValueChange={handleStatusChange} />
            </View>

            <View style={styles.addButtonContainer}>
                <Button
                    title="Add Task"
                    onPress={handleAddTask}
                />
            </View>
        </View>


    );
}