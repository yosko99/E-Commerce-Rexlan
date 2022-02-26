const formSubmitUrl = (formRef) => {
  const formData = new FormData(formRef.current);
  const search = new URLSearchParams(formData);
  const queryString = search.toString();

  return queryString;
};

module.exports = formSubmitUrl;
