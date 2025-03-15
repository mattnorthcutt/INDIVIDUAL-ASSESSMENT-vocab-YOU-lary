import {
  deleteVocab,
  getSingleVocab,
  getVocab,
  getVocabDetails
} from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import viewVocab from '../pages/viewVocab';
import { showVocab } from '../pages/vocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // Click Event for showing the form when you click the Add a Vocab Card button
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm({}, user);
    }

    // Click event for deleting a card
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      const [, firebaseKey] = e.target.id.split('--');

      deleteVocab(firebaseKey).then(() => {
        getVocab(user.uid).then(showVocab);
      });
    }

    if (e.target.id.includes('view-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getVocabDetails(firebaseKey).then(viewVocab);
    }

    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj, user));
    }
  });
};

export default domEvents;
