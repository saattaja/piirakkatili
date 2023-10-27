import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import AccInfo from './AccInfo';
import AddPie from './AddPie';
import { AntDesign } from '@expo/vector-icons';


export default function App() {
  const Tab = createBottomTabNavigator();

  return (

    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerTitle: 'Home',
          presentation: "modal",
          animationTypeForReplace: "pop",
          tabBarIcon: ({color, size})=>(
            <AntDesign name="piechart" size={size} color='salmon'></AntDesign>
          ),
             

        }}>
        </Tab.Screen>

        <Tab.Screen
        name="Account"
        component={AccInfo}
        options={{
          title: 'Account',
          headerTitle: 'Account',
          presentation: "modal",
          animationTypeForReplace: "pop",
          tabBarIcon: ({color, size})=>(
            <AntDesign name="user" size={size} color='salmon'></AntDesign>
          )
        }}>
        </Tab.Screen>
        <Tab.Screen
        name="AddPie"
        component={AddPie}
        options={{
          title: 'AddPie',
          headerTitle: 'Add Pie',
          presentation: "modal",
          tabBarIcon: ({color, size})=>(
            <AntDesign name="plus" size={size} color='salmon'></AntDesign>
          )
        }}>
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    /*<View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
