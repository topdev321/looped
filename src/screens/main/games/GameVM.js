import { compose as recompose, withHandlers, withState } from 'recompose'
import { Images } from 'src/assets'
import View from './GameV'
import { withNavigation } from 'react-navigation'

const listGame = [
  Images.gameTab.assasins_creed_origins,
  Images.gameTab.bf1,
  Images.gameTab.bf4,
  Images.gameTab.civilizationV,
  Images.gameTab.codbo3,
  Images.gameTab.codmw,
  Images.gameTab.codww2,
  Images.gameTab.CrashBandi,
  Images.gameTab.cuphead,
  Images.gameTab.darksouls3,
  Images.gameTab.deadByDawn,
  Images.gameTab.destiny2,
  Images.gameTab.doom,
  Images.gameTab.dragonBall,
  Images.gameTab.fallout4,
  Images.gameTab.fifa18,
  Images.gameTab.fortnite,
  Images.gameTab.forzaMotosport7,
  Images.gameTab.fozaHorizon3,
  Images.gameTab.fridayThe13th,
  Images.gameTab.gearsOfWar4,
  Images.gameTab.godOfWar,
  Images.gameTab.goshRecon,
  Images.gameTab.granTuris,
  Images.gameTab.gtav,
  Images.gameTab.gtav2,
  Images.gameTab.halo5,
  Images.gameTab.horizonZero,
  Images.gameTab.injustice2,
  Images.gameTab.lol,
  Images.gameTab.madden18,
  Images.gameTab.marioKart,
  Images.gameTab.marioOdy,
  Images.gameTab.metaGear,
  Images.gameTab.mineCraft,
  Images.gameTab.mlbTheShow,
  Images.gameTab.motalKombat,
  Images.gameTab.motalKombatX,
  Images.gameTab.nba2k18,
  Images.gameTab.nhl18,
  Images.gameTab.outLast2,
  Images.gameTab.overWatch,
  Images.gameTab.pubg,
  Images.gameTab.r6Siege,
  Images.gameTab.rdr2,
  Images.gameTab.residentEvil7,
  Images.gameTab.smite,
  Images.gameTab.splatoon2,
  Images.gameTab.streetFighter5,
  Images.gameTab.swb2,
  Images.gameTab.tekken7,
  Images.gameTab.theDivision,
  Images.gameTab.theLastOfUs,
  Images.gameTab.titanFall2,
  Images.gameTab.ull,
  Images.gameTab.unCharted4,
  Images.gameTab.warFrame,
  Images.gameTab.xcom2,
  Images.gameTab.ztbww
]

export default withNavigation(recompose(
  withState('data', 'setData', listGame),
  withHandlers({
    onNavigateSearch: (props) => () => {
      props.navigation.navigate('Search')
    }
  })
)(View))
