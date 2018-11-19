const REGEXES = {
  // Email - Freaking aggressive eslint rule no-useless-escape
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line no-useless-escape
  // Password:
  // At least 8 characters
  // Lowercase letters
  // Uppercase letters
  // Numbers
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
}

export default {
  isValidEmail (email) {
    return REGEXES.EMAIL.test(email)
  },
  isValidPassword (password) {
    return REGEXES.PASSWORD.test(password)
  }
}
