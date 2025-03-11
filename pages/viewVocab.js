import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewVocab = (obj) => {
  clearDom();

  const domString = `
  <img class="spec-img" src="https://cdn1.iconfinder.com/data/icons/payment-processing-set/100/Payment_Processing_Icons_Eye-512.png">
  <div class="card">
        <div class="card-body">
          <h4 class="view-card-title">${obj.name}</h4>
            <h5 class="view-card-text">${obj.category}</h5>
            <p class="view-card-text2">${obj.desc}</p>
            <h6 class="view-card-text3">${obj.timeSubmit}</h6>
            <i class="btn fas" style="color: skyblue; font-size: 20px;" id="view-vocab-btn--${obj.firebaseKey}">View</i>
            <i style="color: green; font-size: 20px;" id="edit-vocab-btn--${obj.firebaseKey}" class="fas btn">Edit</i>
            <i style="color: red; font-size: 20px;" id="delete-vocab--${obj.firebaseKey}" class="fas btn">Delete</i>
        </div>
      </div>`;

  renderToDOM('#view', domString);
};

export default viewVocab;
