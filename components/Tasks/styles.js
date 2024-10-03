import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: 'lightgray',
        padding: 8,
        marginTop:0,
        margin: 16,
        borderRadius: 8
    },
    header: {
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '700',
        padding: 16
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
    taskKeyText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    },
    deleteButtonContainer: {
        alignSelf: 'flex-end',
        alignItems: 'right',
        flexDirection: 'row',
    },
    statusContainer: {
        flex: 'auto',
        flexDirection: 'row',        
        alignItems: 'center'
    },
    titleContainer: {
        flex: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'stretch',
        alignItems: 'center'
    }
});