import { StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import Home from './src/screens/Home';

const App = StackNavigator(
  {
    home: {
      screen: Home,
    },
    //Aqui ingresas tus screens
  },
  {
    initialRouteName: 'home',
    //headerMode: 'none',
    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  });
  


export default App;