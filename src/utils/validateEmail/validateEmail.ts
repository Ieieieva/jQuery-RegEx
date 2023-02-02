const validateEmail = (email: string) => {
  const validEmail = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  if (validEmail.test(email)) {
    return true;
  } else {
    return false;
  }
}

export {validateEmail}