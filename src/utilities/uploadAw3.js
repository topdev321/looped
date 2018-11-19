import { RNS3 } from 'react-native-aws3'

const options = {
  keyPrefix: 'uploads/images/',
  bucket: 'looped-app',
  region: 'us-east-2',
  accessKey: 'AKIAIFEMYBR45RXC6PBQ',
  secretKey: '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',
  successActionStatus: 201
}

export default (file) => RNS3.put(file, options)
