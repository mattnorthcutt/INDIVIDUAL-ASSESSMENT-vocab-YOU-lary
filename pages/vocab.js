/* eslint-disable indent */
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Vocab Cards</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div style="width: 100%; height: 100%;" class="card-body">
          <h4 class="card-title">${item.name}</h4>
            <h5 class="card-text">${item.category}</h5>
            <p style="min-height: 215px;" class="card-text2">${item.desc}</p>
            <h6 class="card-text3">${item.timeSubmit}</h6>
            <a link style="color: skyblue;" class="btn fas" id="view-vocab-btn--${item.firebaseKey}">View</a>
            <i style="color: green;" id="edit-vocab-btn--${item.firebaseKey}" class="fas btn">Edit</i>
            <i style="color: red;" id="delete-vocab--${item.firebaseKey}" class="fas btn">Delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
