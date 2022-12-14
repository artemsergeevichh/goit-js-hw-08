import throttle from 'lodash.throttle';


const refs = {
  email: document.querySelector('.feedback-form [name="email"]'),
  message: document.querySelector('.feedback-form [name="message"]'),
};


const forms = document.querySelector('.feedback-form');


forms.addEventListener('input', throttle(textInput, 600));
forms.addEventListener('submit', onFormSubmit);

let STORAGE_KEY = 'feedback-form-state';


const formDate = {};


function textInput(event) {
  formDate[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formDate));
}


function fromStorageToForm(keys, dataLocalStorage) {
  for (const key of keys) {
    formDate[key] = dataLocalStorage[key];
    refs[key].value = dataLocalStorage[key];
  }
}



function onFormSubmit(event) {
  event.preventDefault();
  if (formDate.email === undefined || formDate.message === undefined) {
    return alert('Астанавитесь!!!');
  } else if (formDate.email === ' ' || formDate.message === ' ') {
    return alert('Астанавитесь!!!');
  }
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);


  delete formDate.email;
  delete formDate.message;
}



if (localStorage.getItem(STORAGE_KEY)) {
  const parsedLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const keys = Object.keys(parsedLocalStorage);

  fromStorageToForm(keys, parsedLocalStorage);
}
