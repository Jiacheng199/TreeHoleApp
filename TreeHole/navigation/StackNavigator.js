import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
