function isEmpty(data) {
  return Object.keys(data).length === 0;
}

export function loginValidator(data) {
  let errorMessage = "";
  if (!isEmpty(data)) {
    if (!data.email) {
      errorMessage = "Informe seu email!";
      return errorMessage;
    }
    if (!data.password) {
      errorMessage = "Informa sua senha!";
      return errorMessage;
    }
  } else {
    errorMessage = "Preencha os campos!";
    return errorMessage;
  }
  return errorMessage;
}
