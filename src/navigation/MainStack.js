import { ComposeScreen, InstagramScreen, PhotoEditorScreen, VideoEditorScreen } from 'src/screens'
import Dashboard from '../components/screens/Dashboard'
import DrawerLayout from '../components/screens/DrawerLayout'
import Search from '../components/screens/Search'
import { StackNavigator } from 'react-navigation'

export default StackNavigator(
  {
    Dashboard: { screen: Dashboard },
    Compose: { screen: ComposeScreen },
    Search: { screen: Search },
    DrawerLayout: { screen: DrawerLayout },
    Instagram: { screen: InstagramScreen },
    PhotoEditor: { screen: PhotoEditorScreen },
    VideoEditor: { screen: VideoEditorScreen }
  }, {
    headerMode: 'none',
    mode: 'card'
  }
)
