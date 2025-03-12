import { signOut } from '../utils/auth';
import {
  getTech,
  getLanguage,
  getVocab,
  searchVocab,
} from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import addVocabForm from '../components/forms/addVocabForm';

const navEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#tech-vocab').addEventListener('click', () => {
    getTech(user.uid).then(showVocab);
  });

  document.querySelector('#language-vocab').addEventListener('click', () => {
    getLanguage(user.uid).then(showVocab);
  });

  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(user.uid).then(showVocab);
  });

  document.querySelector('#add-button1').addEventListener('click', () => {
    addVocabForm({}, user);
  });

  document.querySelector('#search').addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      searchVocab(user);
      document.querySelector('#search').value = '';
    }
  });
};

export default navEvents;
