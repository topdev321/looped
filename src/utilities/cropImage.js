import ImageResizer from 'react-native-image-resizer'

export const cropUploadImage = (image) => {
  return new Promise((resolve, reject) => {
    const getWidthImage = image.width
    const getHeightImage = image.height
    const imageRatio = getWidthImage / getHeightImage

    const path = image.uri
    const compressFormat = 'JPEG'
    let maxWidth
    let maxHeight

    if (imageRatio < 0.9) {
      maxWidth = 1080
      maxHeight = 1350
    } else if (imageRatio >= 0.9 && imageRatio < 1.35) {
      maxWidth = 1080
      maxHeight = 1080
    } else {
      maxWidth = 1080
      maxHeight = 608
    }

    ImageResizer.createResizedImage(path, maxWidth, maxHeight, compressFormat, 100).then((response) => {
      if (response.error) {
        reject(new Error(response.error))
      } else {
        resolve(response)
      }
    }).catch((err) => {
      return reject(new Error(err))
    })
  })
}
