const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  if (formElements.email.value === "" || formElements.password.value === "") {
    alert("Warning! All fields must be filled!");
  } else {
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
      email,
      password,
    };
    console.log(formData);
    form.reset();
  }
}
