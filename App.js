import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './components/Form/Form';
import Tasks from './components/Tasks/Tasks'
import { StateProvider } from './StateContext';


export default function App() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <StateProvider>
          <Form></Form>
          <Tasks></Tasks>    
        </StateProvider>
      
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
