import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/logoutButton';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  //  navEvents(user);

  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;
