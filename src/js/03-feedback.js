import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
console.log(formRef);
const formData = {};
formRef.addEventListener('input', throttle(onInputChange, 500));
formRef.addEventListener('submit', handleSubmit);

initPage();

function onInputChange(evt) {
  const { name, value } = evt.target;
  try {
    let savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      savedData = JSON.parse(savedData);
    } else {
      savedData = {};
    }
    savedData[name] = value;
    const stringifyData = JSON.stringify(savedData);
    localStorage.setItem(LOCAL_STORAGE_KEY, stringifyData);
  } catch (error) {}
}

function initPage() {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!savedData) {
    return;
  }
  try {
    const parseData = JSON.parse(savedData);
    Object.entries(parseData).forEach(([name, value]) => {
      console.log(name);
      console.log(value);
      formRef.elements[name].value = value;
    });
  } catch (error) {}
}
function handleSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { message, email },
  } = evt.currentTarget;
  console.log({ email: email.value, message: message.value });
  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
