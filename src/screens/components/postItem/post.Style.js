import { Colors } from 'src/assets'
import { Dimensions } from 'react-native'

const styles = {
  postItem: {
    backgroundColor: Colors.white,
    marginBottom: 10
  },
  // Header style
  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  timeLine: {
    flex: 1,
    paddingLeft: 15
  },
  nameUser: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.black
  },
  postTime: {
    fontSize: 12,
    color: Colors.textGrey
  },
  postOption: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2
  },
  // Content style
  content: {

  },
  wrapperDesc: {
    paddingLeft: 15,
    paddingBottom: 15
  },
  desc: {
    fontSize: 14,
    color: Colors.black
  },
  playerMedia: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  media: {
    width: Dimensions.get('window').width,
    height: 200
  },
  // Footer style
  footer: {

  },
  postInfo: {
    padding: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.whiteSmoke,
    justifyContent: 'space-between'
  },
  subRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  subLike: {
    marginRight: 5
  },
  postSub: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 25
  },
  // Media style
  videoPost: {
    width: Dimensions.get('window').width,
    height: 200
  },
  wrapperVideo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  playBtn: {
    position: 'absolute'
  },
  loading: {
    position: 'absolute'
  }
}

export default styles
