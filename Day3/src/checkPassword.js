// @flow

function checkPassword(password : string) {
  if (password.length < 6) {    
    return {
      success: false,
      reason: "Password is shorter than 6 characters"
    };
  }
  let lowerCase = false;
  let upperCase = false;
  for (let i = 0; i < password.length; i++) {
    // Check for lowercase letter
    if (isNaN(password.charAt(i))) {
      if (password.charAt(i) === password.charAt(i).toLowerCase()) {
        lowerCase = true;
      }
      if (password.charAt(i) === password.charAt(i).toUpperCase()) {
        upperCase = true;
      }
    }

    if (lowerCase && upperCase) {
      return {
        success: true,
        reason: null
      };
    }
  }
  if (lowerCase) {
    return {
      success: false,
      reason: "Password has to include at least one uppercase letter"
    };
  } else if (upperCase) {
    return {
      success: false,
      reason: "Password has to include at least one lowercase letter"
    };
  } else {
    return {
      success: false,
      reason:
        "Password has to include at least one lowercase and uppercase letter"
    };
  }
}

export { checkPassword };
