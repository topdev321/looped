import { Colors } from 'src/assets'

const styles = {
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: Colors.daisyBush
  },
  icon: {
    width: 25,
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleHeader: {
    position: 'absolute',
    left: 70,
    fontSize: 16,
    textAlign: 'left',
    color: Colors.white,
    fontWeight: 'bold'
  }
}

export default styles
