import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a class="navbar-brand title" href="#">VocabYOUlary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-vocab">
                All Vocab <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="tech-vocab">Tech Category</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="language-vocab">Language Category</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="add-button1">Add Entry</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="community">Community</a>
            </li>
            <li>
            <input 
              class="form-control mr-sm-2" 
              id="search" 
              placeholder="Search Vocab Names" 
              aria-label="Search"
            />
            </li>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="add-link"></div>
            <div id="logout-button"></div> 
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navbar', domString);
};

export default navBar;
