import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<h2 class="mb-4" style="color: black;" >WELCOME TO YOUR OWN PERSONAL TECH AND LANGUAGE VOCAB CARDS!</h2> <h3 class="mb-4" style="color: black;"> LOGIN TO GET STARTED!</h3> <button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
