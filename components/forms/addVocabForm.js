import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label style="color: black; margin-bottom: 5px;" for="title">Vocab Name</label>
        <input type="text" style="width: 800px; margin-left: 180px;" class="form-control" id="name" aria-describedby="vocabName" placeholder="Enter Vocab Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label style="color: black; margin-top: 10px; margin-bottom: 5px;" for="desc">Definition</label>
        <textarea class="form-control" style="width: 800px; height: 150px; margin-left: 180px;" placeholder="Enter Vocab Definition" id="desc" >${obj.desc || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="Category"></label>
        <select id="category" style="width: 600px; text-align: center; border-radius: 5px; margin-bottom: 10px;" class="mt-3" name="cate" required>
          <option value="select">Select a Category</option>
          <option value="Tech">Tech</option>
          <option value="Language">Language</option>
        </select>
      </div>
      <button class="mt-2" style="color: black; border-radius: 5px;"type="submit" class="btn btn-primary">Submit Vocab Card
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
