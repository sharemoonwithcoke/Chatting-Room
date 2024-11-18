function validateUsername(username) {
    const allowedCharacters = /^[a-zA-Z0-9_]+$/;
    return allowedCharacters.test(username);
  }
  
  module.exports = { validateUsername };
  