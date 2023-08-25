const WelcomePage = {
  id: "welcome",
  title: "Welcome",
  render: (className = "container", ...rest) => {
    return `
      <main class="container area">
        <div class="welcome ${className}" id="window-welcome">
          <h1 class="welcome__text">Free&thinsp;To&thinsp;Play</h1>
          <div>
            <img class="welcome__img" src="assets/images/svg/gamepad.svg" alt="Gamepad">
          </div>
        </div>
        <div class="load unvisible" id="window-loading">
          <img class="load__img" src="assets/images/welcome-load.gif" alt="Loading" id="window-loading-image">
          <div class="load__line" id="window-loading-line"></div>
        </div>
      </main>
    `;
  }
};

const MainPage = {
  id: "main",
  title: "Free To Play",
  render: (className = "container", ...rest) => {
    return `
      <div class="header-btns__box_left">
        <div class="sort">
          <img class="btns" alt="Sort" title="Sort" src="assets/images/svg/sort.svg" id="btn-sort">
          <div class="sort__param">
            <div class="list-choice">
              <div class="list-choice-title"><span data-language="en">Genre</span><span data-language="ru" class="unvisible">Жанр</span></div>
                <div class="list-choice-objects">
                  <label><input type="radio" name="genre"><span>Shooter</span></label>
                  <label><input type="radio" name="genre"><span>MMORPG</span></label>
                  <label><input type="radio" name="genre"><span>MOBA</span></label>
                  <label><input type="radio" name="genre"><span>Strategy</span></label>
                  <label><input type="radio" name="genre"><span>B.Royale</span></label>
                  <label><input type="radio" name="genre"><span>ARPG</span></label>
                  <label><input type="radio" name="genre"><span>Fighting</span></label>
                  <label><input type="radio" name="genre"><span>MMO</span></label>
                  <label><input type="radio" name="genre"><span>Racing</span></label>
                  <label><input type="radio" name="genre"><span>Sport</span></label>
                </div>
            </div>
            <div class="list-choice">
              <div class="list-choice-title"><span data-language="en">Platform</span><span data-language="ru" class="unvisible">Платформа</span></div>
                <div class="list-choice-objects">
                  <label><input type="radio" name="platform"><span>PC (Windows)</span></label>
                  <label><input type="radio" name="platform"><span>Web browser</span></label>
                </div>
            </div>
            <div class="list-choice">
              <div class="list-choice-title"><span data-language="en">Arrange</span><span data-language="ru" class="unvisible">Упорядочить</span></div>
                <div class="list-choice-objects">
                  <label><input type="radio" name="arrange"><span>Alphabet</span></label>
                  <label><input type="radio" name="arrange"><span>Date</span></label>
                </div>
            </div>
            <button class="button" id="btn-sort-cancel"><span data-language="en">Cancel</span><span data-language="ru" class="unvisible">Отмена</span></button>
          </div>
        </div>
        <div class="search">
          <img class="btns" alt="Search" title="Search" src="assets/images/svg/search.svg" id="btn-search">
          <div class="search__param">
            <input>
          </div>
        </div>
      </div>

      <main class="container area">
        <div class="container__games ${className}">
          <h2 class="container__games_title" id="games-title">Free To Play Game</h2>
          <div class="container__games_content" id="games-box"></div>
        </div>
      </main>
    `;
  }
};

const ErrorPage = {
  id: "error",
  title: "Achtung, warning, kujdes, attenzione, pozornost...",
  render: (className = "container", ...rest) => {
    return `
      <section class="${className} error">
        <h1><span data-language="en">Error 404</span><span data-language="ru" class="unvisible">Ошибка 404</span></h1>
        <p><a href="#main"><span data-language="en">The page was not found, try to return to the main page.</span><span data-language="ru" class="unvisible">Страница не найдена, попробуйте вернуться на главную страницу.</span></a></p>
      </section>
    `;
  }
};
