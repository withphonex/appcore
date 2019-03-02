import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./components/screens/Home";

const Navigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: { swipeEnabled: true, gesturesEnabled: true }
  }
);

const App = createAppContainer(Navigator);

export default App;
