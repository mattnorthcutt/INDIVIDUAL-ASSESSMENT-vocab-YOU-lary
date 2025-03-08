/* eslint-disable indent */
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocab Cards</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-vocab-btn">Add A Vocab Card</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">${item.name}</h4>
            <h5 class="card-text">${item.category}</h5>
            <p class="card-text2">${item.desc}</p>
            <h6 class="card-text3">${item.timeSubmit}</h6>
            <i class="btn btn-success fas " id="view-vocab-btn--${item.firebaseKey}">View</i>
            <i id="edit-vocab-btn--${item.firebaseKey}" class="fas btn btn-info">Edit</i>
            <i id="delete-vocab-btn--${item.firebaseKey}" class="fas btn btn-danger ">Delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
