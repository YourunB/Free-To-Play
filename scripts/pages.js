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
          <img class="btns btns-rotate" alt="Sort" title="Sort" src="assets/images/svg/sort.svg" id="btn-sort">
          <div class="sort__param">
            <div class="list-choice">
              <div class="list-choice-title"><span data-language="en">Category</span><span data-language="ru" class="unvisible">Категория</span></div>
                <div class="list-choice-objects">
                  <label><input type="radio" name="genre"><span>Shooter</span></label>
                  <label><input type="radio" name="genre"><span>MMORPG</span></label>
                  <label><input type="radio" name="genre"><span>MOBA</span></label>
                  <label><input type="radio" name="genre"><span>Strategy</span></label>
                  <label><input type="radio" name="genre"><span>Social</span></label>
                  <label><input type="radio" name="genre"><span>Fighting</span></label>
                  <label><input type="radio" name="genre"><span>MMO</span></label>
                  <label><input type="radio" name="genre"><span>Racing</span></label>
                  <label><input type="radio" name="genre"><span>Sports</span></label>
                  <label><input type="radio" name="genre"><span>Fantasy</span></label>
                </div>
            </div>
            <div class="list-choice">
              <div class="list-choice-title"><span data-language="en">Platform</span><span data-language="ru" class="unvisible">Платформа</span></div>
                <div class="list-choice-objects">
                  <label><input type="radio" name="platform"><span>PC</span></label>
                  <label><input type="radio" name="platform"><span>Browser</span></label>
                </div>
            </div>
            <div class="list-choice">
              <div class="list-choice-title"><span data-language="en">Arrange</span><span data-language="ru" class="unvisible">Упорядочить</span></div>
                <div class="list-choice-objects">
                  <label><input type="radio" name="arrange"><span>Alphabetical</span></label>
                  <label><input type="radio" name="arrange"><span>Release-date</span></label>
                </div>
            </div>
            <button class="button button-custom" id="btn-sort-cancel"><span data-language="en">Reset</span><span data-language="ru" class="unvisible">Сброс</span></button>
          </div>
        </div>
        <div class="search">
          <img class="btns btns-rotate" alt="Search" title="Search" src="assets/images/svg/search.svg" id="btn-search">
          <div class="search__param">
            <input type="text" maxlength="50" id="search-game">
          </div>
        </div>
      </div>

      <main class="container area">
        <div class="container__games ${className}">
          <h2 class="container__games_title" id="games-title">Free To Play Game</h2>
          <div class="container__games_content" id="games-box">
            <div class="drop-zone unvisible" id="drop-favorite"></div>
          </div>
        </div>
      </main>

      <div class="entrance unvisible" id="window-enters">
        <img class="btns entrance-btn" src="assets/images/svg/close.svg" alt="Close" title="Close" id="btn-window-enters-close">
        <h2><span data-language="en">Do you already have an account?</span><span data-language="ru" class="unvisible">У Вас есть аккаунт?</span></h2>
        <div class="box-button">
          <button class="button button-custom" id="btn-window-choice-sign-up"><span data-language="en">Sign Up</span><span data-language="ru" class="unvisible">Создать</span></button>
          <button class="button button-custom" id="btn-window-choice-sign-in"><span data-language="en">Sign In</span><span data-language="ru" class="unvisible">Войти</span></button>
        </div>
      </div>

      <form class="registration unvisible" id="window-login">
        <img class="btns registration-btn" src="assets/images/svg/close.svg" alt="Close" title="Close" id="btn-window-login-close">
        <h2><span data-language="en">User LogIn</span><span data-language="ru" class="unvisible">Вход пользователя</span></h2>
        <div class="registration__box">
          <label for="input-login-mail"><span data-language="en">Email:</span><span data-language="ru" class="unvisible">Эл. почта:</span> <i class="icon-mail iconmoon"></i></label>
          <input type="email" maxlength="30" id="input-login-mail">
        </div>
        <div class="registration__box">
          <label for="input-login-pass"><span data-language="en">Enter password:</span><span data-language="ru" class="unvisible">Введите пароль:</span> <i class="icon-key2 iconmoon"></i></label>
          <input type="password" maxlength="30" id="input-login-pass">
        </div>
        <div class="box-button">
        <p class="registration__warning unvisible" id="login-warning"><span data-language="en">Input error</span><span data-language="ru" class="unvisible">Ошибка ввода</span><img class="registration__warning_img" alt="Warning" src="assets/images/svg/warning.svg"></p>
          <button class="button button-custom" id="btn-window-login"><span data-language="en">LogIn</span><span data-language="ru" class="unvisible">Войти</span></button>
        </div>
        <h2 id="go-to-signup" class="registration__change"><span data-language="en">SignUp</span><span data-language="ru" class="unvisible">Регистрация</span></h2>
      </form>

      <form class="registration unvisible" id="window-registration">
        <img class="btns registration-btn" src="assets/images/svg/close.svg" alt="Close" title="Close" id="btn-window-registration-close">
        <h2><span data-language="en">User Registration</span><span data-language="ru" class="unvisible">Регистрация пользователя</span></h2>
        <div class="registration__box">
          <label for="input-registration-mail"><span data-language="en">Email:</span><span data-language="ru" class="unvisible">Эл. почта:</span> <i class="icon-mail iconmoon"></i></label>
          <input type="email" maxlength="30" id="input-registration-mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required title="Enter email (example: name@gmail.com)">
        </div>
        <div class="registration__box">
          <label for="input-registration-pass"><span data-language="en">Choose Password:</span><span data-language="ru" class="unvisible">Введите пароль:</span> <i class="icon-key2 iconmoon"></i></label>
          <input type="password" id="input-registration-pass" pattern=".{8,20}" required title="Password must be (8 - 20) characters" maxlength="20">
        </div>
        <p class="registration__warning unvisible" id="signup-warning"><span data-language="en">Input error</span><span data-language="ru" class="unvisible">Ошибка ввода</span><img class="registration__warning_img" alt="Warning" src="assets/images/svg/warning.svg"></p>
        <div class="box-button">
          <button class="button button-custom" id="btn-window-registration-save"><span data-language="en">Register</span><span data-language="ru" class="unvisible">Создать</span></button>
        </div>
        <h2 id="go-to-login" class="registration__change"><span data-language="en">LogIn</span><span data-language="ru" class="unvisible">Войти</span></h2>
      </form>
    `;
  }
};

const ErrorPage = {
  id: "error",
  title: "Achtung, warning, kujdes, attenzione, pozornost...",
  render: (className = "container", ...rest) => {
    return `
      <section class="${className} error">
        <img id="reload-page" class="error__img" src="assets/images/svg/internet.svg" alt="Earth">
        <h1><span data-language="en">Error 404</span><span data-language="ru" class="unvisible">Ошибка 404</span></h1>
        <p><a href="#main"><span data-language="en">The page was not found, try to return to the main page.</span><span data-language="ru" class="unvisible">Страница не найдена, попробуйте вернуться на главную страницу.</span></a></p>
      </section>
    `;
  }
};

const ProfilePage = {
  id: "profile",
  title: "Profile",
  render: (className = "container", ...rest) => {
    return `
      <div class="overlay unvisible" id="overlay-confirm"></div>
      <div class="window-confirm unvisible" id="window-confirm">
        <h2 class="window-confirm__title"><span data-language="en">Are you sure?</span><span data-language="ru" class="unvisible">Вы уверены?</span></h2>
        <div class="window-confirm__btns">
          <button class="button button-cancel" id="btn-confirm-no"><span data-language="en">No</span><span data-language="ru" class="unvisible">Нет</span></button>
          <button class="button button-custom" id="btn-confirm-yes"><span data-language="en">Yes</span><span data-language="ru" class="unvisible">Да</span></button>
        </div>
      </div>
      <a href="#main"><img class="btns btns-home" alt="Home" title="Home" src="assets/images/svg/home.svg" id="btn-profile-home"></a>
      <main class="container area">
        <div class="my-profile ${className}">
          <h2><span data-language="en">Profile page</span><span data-language="ru" class="unvisible">Страница профиля</span> <i class="icon-user iconmoon"></i></h2>
          <div class="my-profile__delete">
            <button class="button button-del" id="my-profile-delete"><span data-language="en">Delete profile</span><span data-language="ru" class="unvisible">Удалить профиль</span></button>
          </div>
          <div class="my-profile__inputs">
            <div class="my-profile__inputs_box">
              <label for="profile-name"><span data-language="en">Your Name:</span><span data-language="ru" class="unvisible">Имя:</span></label>
              <input type="text" maxlength="30" id="profile-name" pattern="^[а-яёА-ЯЁa-zA-Z \-']+$" required title="Enter your name">
            </div>
            <div class="my-profile__inputs_box">
              <label for="profile-name"><span data-language="en">Your age:</span><span data-language="ru" class="unvisible">Возраст:</span></label>
              <input type="number" maxlength="3" id="profile-age" title="Enter your age">
            </div>
            <div class="my-profile__inputs_box">
              <label for="profile-discord"><span data-language="en">Your discord:</span><span data-language="ru" class="unvisible">Аккаунт discord:</span> <i class="icon-flickr4 iconmoon"></i></label>
              <input type="text" maxlength="30" id="profile-discord" id="profile-name" pattern="^[a-zA-Z0-9 \-']+$" required title="Enter a discord from letters on English">
            </div>
            <div class="my-profile__save">
            <button class="button button-cancel" id="my-profile-cancel"><span id="my-profile-cancel-e" data-language="en">Cancel</span><span id="my-profile-cancel-r" data-language="ru" class="unvisible">Отмена</span></button>  
            <button class="button button-custom" id="my-profile-save"><span data-language="en">Save</span><span data-language="ru" class="unvisible">Сохранить</span></button>
            </div>
          </div>
          <div class="my-profile__collection">
            <a href="#collection" title="My collection"><img class="my-profile__collection_image" src="assets/images/svg/collection.svg" alt="Collection"></a>
          </div>
          <div class="my-profile__video">
            <iframe src="https://www.youtube.com/embed/x7GKeGsm-_s?si=Vi8CST4hfphmXWko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div class="my-profile__social">
            <a href="https://www.twitch.tv/search?term=free%20to%20play%20game" target="_blank" title="Go to YouTube"><img class="my-profile__social_image" src="assets/images/svg/twitch.svg" alt="Twitch"></a>
            <a href="https://www.youtube.com/results?search_query=free+to+play+game" target="_blank" title="Go to Twitch"><img class="my-profile__social_image" src="assets/images/svg/youtube.svg" alt="YouTube"></a>
          </div>
          <div class="my-profile__pass">
            <h2><span data-language="en">User password:</span><span data-language="ru" class="unvisible">Пароль пользователя</span></h2>
            <div class="my-profile__inputs_box" id="my-profile-box-pass">
              <label for="profile-pass"><span data-language="en">Change password:</span><span data-language="ru" class="unvisible">Изменить пароль:</span></label>
              <input type="password" maxlength="30" id="profile-pass">
            </div>
            <div class="my-profile__save">
              <button class="button button-cancel" id="my-profile-pass-cancel"><span id="my-profile-pass-cancel-e" data-language="en">Cancel</span><span id="my-profile-pass-cancel-r" data-language="ru" class="unvisible">Отмена</span></button>  
              <button class="button button-custom" id="my-profile-pass-save"><span data-language="en">Apply</span><span data-language="ru" class="unvisible">Изменить</span></button>
            </div>
          </div>
        </div>
      </main>
    `;
  }
};

const CollectionPage = {
  id: "collection",
  title: "Collection",
  render: (className = "container", ...rest) => {
    return `
      <a href="#main"><img class="btns btns-home" alt="Home" title="Home" src="assets/images/svg/home.svg" id="btn-collection-home"></a>
      <main class="container area">
        <div class="collection ${className}">
          <h2><span data-language="en">My collection</span><span data-language="ru" class="unvisible">Моя коллекция</span> <i class="icon-images iconmoon"></i></h2>
          <div id="collection-box" class="collection__box"></div>
        </div>
      </main>
    `;
  }
};

const InformationPage = {
  id: "information",
  title: "Information",
  render: (className = "container", ...rest) => {
    return `
      <a href="#main"><img class="btns btns-home" alt="Home" title="Home" src="assets/images/svg/home.svg" id="btn-information-home"></a>
      <main class="container area">
        <div class="information ${className}">
          <h2><span data-language="en">About the APP</span><span data-language="ru" class="unvisible">О приложении</span> <i class="icon-file-text2 iconmoon"></i></h2>
          <h3>Free To Play</h3>
          <p><span data-language="en">This application was created for educational purposes.</span><span data-language="ru" class="unvisible">Данное веб приложение создано в учебных целях.</span></p>
          <p><span data-language="en">The web application is designed for easy search by users of interesting free games on the Internet.</span><span data-language="ru" class="unvisible">Веб приложение предназначено для легкого поиска пользователями интересующих бесплатных игр в интернете.</span></p>
          <p><span data-language="en">The application is a single-page (SPA) CRUD application. </span><span data-language="ru" class="unvisible">Приложение является одностраничным (SPA) CRUD-приложением. </span><a href="https://developer.mozilla.org/ru/docs/Learn/JavaScript/Client-side_web_APIs/Introduction" target="_blank" title="Open">Single Page Application</a>.</p>
          <p><span data-language="en">The web application uses the browser </span><span data-language="ru" class="unvisible">Веб приложение использует браузерное </span><a href="https://developer.mozilla.org/ru/docs/Learn/JavaScript/Client-side_web_APIs/Introduction" target="_blank" title="Open">API</a>.</p>
          <p><span data-language="en">The API of the database that is publicly available from the site is taken as the basis for the source of information about free games </span><span data-language="ru" class="unvisible">За основу источника информации о бесплатных играх взят API базы данных находящейся в открытом доступе с сайта </span><a href="https://www.freetogame.com/api-doc" title="Open" target="_blank">www.freetogame.com</a>.</p>
          <p><span data-language="en">For the correct operation of the database with free games, the proxy server API was used </span><span data-language="ru" class="unvisible">Для корректной работы базы данных с бесплатными играми использовался API прокси-сервер </span><a href="https://rapidapi.com/hub" target="_blank" title="Open">RapidAPI</a>.</p>
          <p><span data-language="en">To send HTTP requests asynchronously and download game data from the server in real time, used </span><span data-language="ru" class="unvisible">Для асинхронной отправки отправки HTTP - запросов и загрузки данных об играх с сервера в режиме реального времени использовался </span><a href="https://developer.mozilla.org/en-US/docs/Web/API/fetch" target="_blank" title="Open">Fetch API</a>.</p>
          <p><span data-language="en">A Google database was used to store information about users and their games - </span><span data-language="ru" class="unvisible">Для хранения информации о пользователях и их играх была использована база данных компании Google - </span><a href="https://firebase.google.com/" target="_blank" title="Open">FireBase</a>.</p>
          <p><span data-language="en">The web application is cross-browser and cross-platform.</span><span data-language="ru" class="unvisible">Веб приложение кроссбраузерно и кроссплатформенно.</span></p>
          <p><span data-language="en">The entire code of the web application is developed by one developer.</span><span data-language="ru" class="unvisible">Весь код веб приложения разработан одним разработчиком.</span></p>
          <p><span data-language="en">For cards with games, a method of operating interface elements is implemented - </span><span data-language="ru" class="unvisible">Для карточек с играми реализован способ оперирования элементами интерфейса - </span><a href="https://en.wikipedia.org/wiki/Drag_and_drop" target="_blank" title="Open">drag and drop</a>.</p>
          <p><span data-language="en">In writing the application code, an object-oriented approach was used to create application components and elements, and a scheme for dividing application data and control logic into three separate components was implemented: model, view, controller - </span><span data-language="ru" class="unvisible">В написании кода приложения использовался объектно-ориентированный подход для создания компонентов и элементов приложения а также реализована схема разделения данных приложения и управляющей логики на три отдельных компонента: модель, представление, контроллер - </span> <a href="https://ru.wikipedia.org/wiki/Model-View-Controller" title="Open" target="_blank">MVC</a>.</p>
          <p><span data-language="en">The application uses the used library - </span><span data-language="ru" class="unvisible">В приложении используется использовалась библиотека - </span><a href="https://jquery.com/" target="_blank" title="Open">jQuery</a>.</p>
          <p><span data-language="en">A multimedia component is connected for detailed display of images - </span><span data-language="ru" class="unvisible">Для подробного отображения изображений подключен мультимедейный компонент - </span><a href="https://fancyapps.com" title="Open" target="_blank">Fancybox</a>.</p>
          <p><span data-language="en">Additionally, a real-time chat based on </span><span data-language="ru" class="unvisible">Дополнительно реализован чат режиме реального времени на основе </span><a href="https://firebase.google.com/" title="Open" target="_blank">Firebase</a>.</p>
          <div class="information__footer">
            <div class="information__footer_icons">
              <a href="https://github.com/YourunB" target="_blank"><img class="btns" src="assets/images/svg/github.svg" alt="GitHub" title="Open github"></a>
              <a href="https://codepen.io/BxYura/pens/public" target="_blank"><img class="btns" src="assets/images/svg/codepen.svg" alt="CodePen" title="Open codepen"></a>
              <a href="https://www.codewars.com/users/rsschool_785da839e5c30a16" target="_blank"><img class="btns" src="assets/images/svg/codewars.svg" alt="CodeWars" title="Open codewars"></a>
            </div>
            <p>&copy; <span data-language="en">The web application was developed in 2023. Developer Yury Butskevich.</span><span data-language="ru" class="unvisible">Веб приложение разработано в 2023 году. Разработчик Буцкевич Юрий.</span></p>
            <a href="https://www.it-academy.by" title="Open" target="_blank"><img class="information__footer_image" src="assets/images/it-academy.png" alt="IT Academy"></a>
          </div>
        </div>
      </main>
    `;
  }
};
