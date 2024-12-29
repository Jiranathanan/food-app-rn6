// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import SearchScreen from "./src/screens/SearchScreen";
// import ResultsShowScreen from "./src/screens/ResultsShowScreen";

// const navigator = createStackNavigator({
//   Search: SearchScreen,
//   ResultsShow: ResultsShowScreen
// }, {
//   initialRouteName: 'Search',
//   defaultNavigationOptions: {
//     title: 'Business Search'
//   }
// });

// export default createAppContainer(navigator);

import { NavigationContainer  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerTitle: "Business Search" }}> 
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
