const _API_CONFIG = {
  host: 'https://www.whalefolio.com',
  basePath: '/api',
  apiPath: '/v1',
  imagePath: ''
}

export const API_CONFIG = {
  isLoggingEnable: false,
  timeout: 10000,
  useDummyData: false,
  unauthorizedErrorCode: 401,
  URL: (_API_CONFIG.host + _API_CONFIG.basePath + _API_CONFIG.apiPath).replace(/\/+$/g, '') // trim trailing slash
}

export const APP_CONFIG = {
  fetchCountPerPage: 50,
  reducerPrefix: 'looped-app',
  stylePrefix: 'looped-app',
  textinputDebounceDelay: 500,
  socketUpdateThrottle: 10000,
  feedBackEmail: 'contact@whalefolio.com'
}
