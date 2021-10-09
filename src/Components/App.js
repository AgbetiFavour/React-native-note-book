import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Splash from "./Screens/Splash"
import Done from "./Screens/Done"
import ToDo from "./Screens/ToDo"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FontAwesomeS from "react-native-vector-icons/FontAwesome5"
import Task from "./Screens/Task"
import { Provider } from "react-redux"
import { store } from "./Redux/Store"

const Tab = createBottomTabNavigator()
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'To-Do') {
              iconName = 'clipboard-list';
              size = focused ? 25 : 20;
            } else if (route.name === 'Done') {
              iconName = 'clipboard-check';
              size = focused ? 25 : 20;
            }
            return (
              <FontAwesomeS name={iconName} size={size} color={color} />
            );
           } 
        })
}
tabBarOptions = {{
  activeTintColor: '#0080ff',
  inActiveTintColor: '#777777',
  labelStyle:{fontSize:15,fontWeight:'bold'},
    }}
    >
      <Tab.Screen name={'To-Do'} component={ToDo} />
      <Tab.Screen name={'Done'} component={Done} />
    </Tab.Navigator>
  )
}
const RootStack = createStackNavigator()

function App() {
	return (
		<Provider store={store}>

		<NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerTitleAlign:"center",
          headerStyle: {
            backgroundColor: '#0080ff',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          }
        }}
      >
				<RootStack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
				<RootStack.Screen name="My Tasks" component={HomeTabs}  />
				<RootStack.Screen name="Task" component={Task}  />
			</RootStack.Navigator>
		</NavigationContainer>
		 </Provider>
	)
}

export default App
