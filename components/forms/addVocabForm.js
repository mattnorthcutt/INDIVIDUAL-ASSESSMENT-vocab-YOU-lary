import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Name</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabTitle" placeholder="Enter Vocab Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Vocab Description" id="description" style="height: 100px">${obj.desc || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="Category">Price</label>
        <input type="text" class="form-control" id="category" placeholder="Category" value="${obj.category || ''}" required>
      </div>
      <div class="form-group" id="select-category">
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocab Card
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
