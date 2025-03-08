import addVocabForm from '../components/forms/addVocabForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // Click Event for showing the form when you click the Add a Vocab Card button
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm({}, user);
    }
  });
};

export default domEvents;
