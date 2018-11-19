import ImagePicker from 'react-native-image-picker'

const defaultOptions = {
  title: 'Select Avatar',
  noData: true,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export const launchImageLibrary = (options = defaultOptions) => {
  return new Promise((resolve, reject) => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.error) {
        reject(new Error(response.error))
      } else {
        resolve(response)
      }
    })
  })
}

export default (options = defaultOptions) => {
  return new Promise((resolve, reject) => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.error) {
        reject(new Error(response.error))
      } else {
        resolve(response)
      }
    })
  })
}
