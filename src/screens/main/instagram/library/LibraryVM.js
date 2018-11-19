import { Alert, CameraRoll } from 'react-native'
import { FetchingRedux, PostRedux } from 'src/redux/reducers'
import { lifecycle, compose as recompose, withHandlers, withState, withStateHandlers } from 'recompose'
import { connect } from 'react-redux'
import View from './LibraryV'
import { withNavigation } from 'react-navigation'

export default withNavigation(recompose(
  connect(
    (state) => {
      const { postCreateFetching } = FetchingRedux.getReducerState(state)
      const { postImage } = PostRedux.getReducerState(state)
      return {
        postCreateFetching,
        postImage
      }
    },
    (dispatch) => ({
      onPostImage: (text, image, video) => dispatch(PostRedux.Creators.createPostRequest(text, image, video)),
      onResetImage: (image) => dispatch(PostRedux.Creators.setPostImage(image))
    })
  ),
  withStateHandlers(
    {
      photos: [],
      selected: {},
      after: null,
      has_next_page: true
    },
    {
      setPhotos: (state, props) => (newPhotos) => ({
        photos: newPhotos
      }),
      setSelected: (state, props) => (newSelected) => ({
        selected: newSelected
      }),
      setAfter: () => (after) => ({
        after
      }),
      setHasNextPage: () => (hasNextPage) => ({
        has_next_page: hasNextPage
      }),
      setProcessPhotos: () => ({ photos, after, has_next_page }) => ({
        photos,
        after,
        has_next_page
      })
    }
  ),
  withHandlers({
    processPhotos: (props) => (r) => {
      if (props.after === r.page_info.end_cursor) return
      let uris = r.edges.map(i => i.node).map(i => i.image)
      props.setProcessPhotos({
        photos: [...props.photos, ...uris],
        after: r.page_info.end_cursor,
        has_next_page: r.page_info.has_next_page
      })
    },
    cancelInstagram: (props) => () => {
      props.navigation.goBack()
    },
    onUploadImage: (props) => async () => {
      if (props.postImage) {
        props.onPostImage(null, props.postImage, null)
      } else {
        Alert.alert('Error', 'Image is required!')
      }
    },
    onNavigatePhotoEditor: (props) => (data) => {
      props.navigation.navigate('PhotoEditor', { image: data })
    }
  }),
  withState('indexImage', 'setIndexImage', null),
  withHandlers({
    getPhotos: (props) => () => {
      return new Promise((resolve, reject) => {
        let params = { first: 30, assetType: 'All' }
        if (props.after) params.after = props.after
        if (!props.has_next_page) return

        CameraRoll.getPhotos(params)
          .then((r) => {
            props.processPhotos(r)
            resolve()
          })
          .catch((e) => {
            Alert.alert(e.message)
          })
      })
    },
    selectImage: (props) => (index) => {
      // let newSelected = {...props.selected}
      // if (newSelected[index]) {
      //   delete newSelected[index]
      // } else {
      //   newSelected[index] = true
      // }
      // if (props.max && Object.keys(newSelected).length > props.max) return
      // if (!newSelected) newSelected = {}
      // props.setSelected(newSelected)
      props.setIndexImage(index)
      props.onResetImage(props.photos[index])
    }
  }),
  lifecycle({
    componentDidMount () {
      this.props.getPhotos()
        .then(() => {
          if (this.props.photos[0]) {
            this.props.selectImage(0)
          }
        })
    },
    componentDidUpdate (prevProps) {
      if (this.props.postCreateFetching !== prevProps.postCreateFetching && this.props.postCreateFetching === false) {
        this.props.navigation.goBack()
      }
    },
    componentWillUnmount () {
      this.props.onResetImage(null)
    }
  })
)(View))
