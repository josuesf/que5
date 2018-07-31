import { StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import Home from './src/screens/Home';
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import PreguntasCon from './src/screens/PreguntasCon';
import Pregunta from './src/screens/Pregunta';

const App = StackNavigator(
  {
    login:{
      screen: Login,
    },
    register:{
      screen: Register
    },
    home: {
      screen: Home,
    },
    preguntas_con:{
      screen:PreguntasCon
    },
    pregunta:{
      screen:Pregunta
    }
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