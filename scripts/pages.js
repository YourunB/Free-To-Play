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
      <main class="container area">
        <div class="container__games ${className}">
          <h2 class="container__games_title">Free To Play Game</h2>
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
