
$(function(){

  $('.error').hide();

  $('.form').on("input", () => {
    validateName();
    // validateEmail();
    validatePassword();
  })

  let nameError = true;
  const validateName = () => {
    
    let nameValue = $('.js-input__name').val();
    if (nameValue.toString() === '') {
      $('.error__name-1').show();
      nameError = false;
      return false;
    } else if (nameValue.toString().length < 2 || nameValue.toString().length > 50) {
      $('.error__name-1').show();
      $('.error__name-3').show();
      nameError = false;
      return false;
    } else {
      $('.error__name-1').hide();
      $('.error__name-3').hide();
    }

    console.log(nameValue)
  }

  // // let emailError = true;
  // const validateEmail = () => {
  //   let emailValue = $('.js-input__email').val();
  //   let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  //   let validEmail = regex.test(emailValue.toString());
  //   // if (!validEmail) {
  //   //   emailError = false;
  //   // } else {
  //   //   emailError = true;
  //   // }
  // }

  let passwordError = true;
  const validatePassword = () => {
    let passwordValue = $('.js-input__password').val();
    if (passwordValue.toString() === '' || passwordValue.toString().length < 8) {
      $('.error-password-1').show();
      passwordError = false;
      return false;
    } else {
      $('.error-password-1').hide();
    }
  }


  $('form__submit').on("click", (event) => {
    event.preventDefault();
    validateName();
    // validateEmail();
    validatePassword();
    if (nameError === true && passwordError === true) {
      return true;
    } else {
      return false;
    }
  })


});
