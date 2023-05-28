import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from '@react-native-material/core';

function HomeScreen({navigation}: any) {
  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    // navigation.setOptions({
    //   headerRight: () => <Button title="Update count" />,
    // });
  }, [navigation]);
  return (
    <View style={styles.page}>
      <Text>Home Screen</Text>
      <Button title="详情页" onPress={() => navigation.push('Details')} />
    </View>
  );
}
function DetailsScreen({navigation}: any) {
  return (
    <View style={styles.page}>
      <Text>Details Screen</Text>
      {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
      <Button title="主页" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({}) => ({
            // headerRight: () => <Button title="Update count" />,
          })}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
