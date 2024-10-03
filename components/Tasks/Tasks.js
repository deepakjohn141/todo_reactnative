
import React, { useContext } from 'react';
import { StateContext } from '../../StateContext';
import { Button, Switch, Text, View } from 'react-native';
import styles from './styles';


const Tasks = () => {
    const { tasks } = useContext(StateContext);
    const [taskList, setTaskList] = tasks

    const handleStatusChange = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList[index].status = updatedTaskList[index].status == 'due/false' ? 'done/true' : 'due/false';
        setTaskList(updatedTaskList);
    };

    const handleDelete = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index, 1)
        setTaskList(updatedTaskList);
    };


    const displayTasks = () => {
        return taskList.map((ele, index) => {
            return <View key={index} style={styles.container}>
                <View style={styles.titleContainer}>
                <Text style={styles.taskKeyText}>Title: </Text>
                <Text>{ele.title}</Text>
                </View>
                <View style={styles.statusContainer}>
                    <Text style={styles.taskKeyText}>Status: </Text>
                    <Text>{ele.status + ' '}</Text>
                    <Switch
                        value={ele.status == 'due/false' ? false : true}
                        onValueChange={() => handleStatusChange(index)} />
                </View>
                <View style={styles.deleteButtonContainer}>
                    <Button
                        color={'red'}
                        title='Delete'
                        onPress={() => handleDelete(index)}
                    />
                </View>

            </View >
        });
    };

return <View>
    <Text style={styles.header}>ToDo Task List</Text>
    {displayTasks()}
</View>

}

export default Tasks;