'use strict';

const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmit); 


function onFormSubmit(event) {
	event.preventDefault(); 

	const formElements = event.currentTarget.elements;
	const mail = formElements.email.value;
	const password = formElements.password.value;
	const formData = {
		mail,
		password
	};

	if (formData.mail && formData.password){
		formRef.reset();
	} else {
		alert('Всі поля повинні бути заповнені');
	}

	console.log(formData)
};  







// const formRef = document.querySelector('.login-form');
// formRef.addEventListener('submit', event => {

//   event.preventDefault();
//   const formData = {};
  
//   for (const element of formRef.elements) {
// 	console.log(element)
//     if (element.name) {
//       formData[element.name] = element.value;
//     }
//   }
//   if (formData.email && formData.password) {
//     console.log(formData);
//     formRef.reset();
//   } else {
//     alert('Всі поля повинні бути заповнені');
//   }
// });





















