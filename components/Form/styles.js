import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: 'lightgray',
        padding: 16,
        marginTop:55,
        margin: 16,
        borderRadius: 8
    },
    textInput: {
        backgroundColor: 'white',
        color: 'black',
        padding: 8,
        borderRadius: 4,
        marginTop: 8
    },
    taskStatus: {
        alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8
    },
    taskStatusText: {
        color: 'black',
        fontSize: 16
    },
    addButtonContainer: {
        alignSelf: 'flex-end',
        alignItems: 'right',
        flexDirection: 'row',
    },
    errorContainer: {
        borderColor: 'red',
        borderWidth: 2,
        backgroundColor: 'white',
        marginBottom: 16 
    },
    errorTitle: {
        color: 'red',
        paddingLeft: 8,
        paddingTop: 8,
        fontSize: 12,
        fontWeight: 'bold'
    },
    errorMessage: {
        color: 'red',
        fontSize: 12
    },
    statusContainer: {
        flex: 'auto',
        flexDirection: 'row',        
        alignItems: 'center'
    },taskStatus: {
        alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8
    }
});