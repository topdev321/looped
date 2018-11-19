import { StartScreen } from 'src/screens'
import { StackNavigator } from 'react-navigation'

export default StackNavigator(
  {
    Home: { screen: StartScreen }
  }, {
    headerMode: 'none',
    mode: 'modal'
  }
)
