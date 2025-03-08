import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label style="color: black;" for="title">Vocab Name</label>
        <input type="text" style="width: 400px; margin-left: 380px;" class="form-control" id="name" aria-describedby="vocabName" placeholder="Enter Vocab Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label style="color: black;" for="desc">Description</label>
        <textarea class="form-control" placeholder="Enter Vocab Description" id="desc" style="height: 100px">${obj.desc || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="Category"></label>
        <select id="category" style="width: 200px; text-align: center;" class="mt-2" name="cate" required>
          <option value="select">Select a Category</option>
          <option value="Tech">Tech</option>
          <option value="Language">Language</option>
        </select>
      </div>
      <button class="mt-2" type="submit" class="btn btn-primary">Submit Vocab Card
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
