const Header = {
  render: (customClass = "") => {
    return `   
      <header class="header ${customClass}" id="header">
        <div class="header-btns__box">
          <img class="btns unvisible" alt="Music" title="Music start/pause" src="assets/images/svg/music-on.svg" id="btn-music-on">
          <img class="btns" alt="Music" title="Music start/pause" src="assets/images/svg/music-off.svg" id="btn-music-off">

          <div class="settings">
            <img class="btns btns-rotate" alt="Settings" title="Setting" src="assets/images/svg/settings.svg" id="btn-settings">
            <div class="settings__param">
              <div>
                <p class="settings__param_volume"><span data-language="en">Music volume</span><span data-language="ru" class="unvisible">Громкость музыки <i class="icon-volume-medium iconmoon"></i></span></p>
                <input type="range" min="1" max="100" value="100" id="volume">
              </div>
              <label class="toggle">
                <input class="toggle-checkbox" type="checkbox" checked id="theme">
                <span class="toggle-switch"></span>
                <span class="toggle-label"><span data-language="en">Change theme</span><span data-language="ru" class="unvisible">Сменить тему</span></span>
              </label>
              <label class="toggle">
                <input class="toggle-checkbox" type="checkbox" checked id="language">
                <span class="toggle-switch"></span>
                <span class="toggle-label"><span data-language="en">Change language</span><span data-language="ru" class="unvisible">Изменить язык</span></span>
              </label>
            </div>
          </div>
    
          <div class="profile">
            <img class="btns btns-rotate" alt="Enter" title="Enter" src="assets/images/svg/enter.svg" id="btn-enter">
            <div class="profile__param">
              <p class="unvisible" id="my-profile"><a href="#profile" title="My profile"><span data-language="en">My profile</span><span data-language="ru" class="unvisible">Мой профиль</span></a> <i class="icon-key iconmoon"></i></p>
              <p class="unvisible" id="my-collection"><a href="#collection" title="My collection"><span data-language="en">My сollection</span><span data-language="ru" class="unvisible">Моя коллекция</span></a> <i class="icon-images iconmoon"></i></p>
              <p class="unvisible" id="my-profile-exit"><span data-language="en">Log-Out</span><span data-language="ru" class="unvisible">Выйти из профиля</span> <i class="icon-exit iconmoon"></i></p>
              <p id="my-profile-enter"><span data-language="en">Log-In</span><span data-language="ru" class="unvisible">Учетная запись</span> <i class="icon-enter iconmoon"></i></p>
            </div>
          </div>
        </div>
    
        <div class="about">
          <img class="btns btns-rotate" alt="About" title="About developer" src="assets/images/svg/info.svg" id="about">
          <div class="about__param">
            <h2><span data-language="en">About Developer</span><span data-language="ru" class="unvisible">О разработчике</span></h2>
            <p>&copy; 2023 <span data-language="en">Yury Butskevich</span><span data-language="ru" class="unvisible">Юрий Буцкевич</span></p>
            <div class="about__param_social">
              <span data-language="en">Works:</span><span data-language="ru" class="unvisible">Работы:</span>
              <a href="https://github.com/YourunB" target="_blank"><img class="btns" src="assets/images/svg/github.svg" alt="GitHub" title="Open github"></a>
              <a href="https://codepen.io/BxYura/pens/public" target="_blank"><img class="btns" src="assets/images/svg/codepen.svg" alt="CodePen" title="Open codepen"></a>
              <a href="https://www.codewars.com/users/rsschool_785da839e5c30a16" target="_blank"><img class="btns" src="assets/images/svg/codewars.svg" alt="CodeWars" title="Open codewars"></a>
            </div>
            <p><span data-language="en">Email: </span><span data-language="ru" class="unvisible">Почта: </span><a href="mailto:bxyura@gmail.com" target="_blank" class="about__param_social_mail">bxyra@gmail.com</a></p>
          </div>
        </div>
      </header>
    `;
  }
};

const Content = {
  render: (customClass = "") => {
    return `<div class="content ${customClass}" id="content"></div>`;
  }
};

const BackAnime = {
  render: (customClass = "") => {
    return `
    <ul class="circles ${customClass}">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
    `;
  }
};

const Footer = {
  render: (customClass = "") => {
    return `
      <footer class="footer ${customClass}"><a href="https://github.com/YourunB" target="_blank" class="footer-link">&copy; <span data-language="en">2023 Application created for educational purposes.</span><span data-language="ru" class="unvisible">2023 Приложение, созданное в учебных целях.</span></a></footer>
    `;
  }
};

const Click = {
  render: (customClass = "") => {
    return `
      <div class="mouse-anime unvisible ${customClass}" id="mouse-click"></div>
    `;
  }
};

const Song = {
  render: (customClass = "") => {
    return `
      <div class="${customClass}">
        <audio src="assets/sounds/music.mp3" id="song-music" loop></audio>
        <audio src="assets/sounds/click.mp3" id="song-click"></audio>
        <audio src="assets/sounds/fail.mp3" id="song-fail"></audio>
        <audio src="assets/sounds/up.mp3" id="song-up"></audio>
      </div>
    `;
  }
};

const GoUp = {
  render: (customClass = "") => {
    return `
      <img id="btn-up" class="go-up ${customClass} btns unvisible" src="assets/images/svg/to-top.svg" title="Up" alt="Up">
    `;
  }
};

const Load = {
  render: (customClass = "") => {
    return `
      <img id="load-create" class="load-create ${customClass} unvisible" src="assets/images/load.gif" alt="Load">
    `;
  }
};

const LossConnection = {
  render: (customClass = "") => {
    return `
      <div class="${customClass} loss-connection unvisible" id="loss-connection">
        <div class="loss-connection__box">
          <img id="reload-page" class="loss-connection__box_img" src="assets/images/svg/internet.svg" alt="Earth">
          <h3 class="loss-connection__box_message"><span data-language="en">Sorry, connection problems. Reload the page.</span><span data-language="ru" class="unvisible">Извините, проблемы с соединением. Перезагрузите страницу.</span></h3>
        </div>
      </div>
    `;
  }
};

const LockDisplay = {
  render: (customClass = "") => {
    return `
      <div id="lock" class="lock ${customClass} unvisible">
        <div class="lock__image">
          <a href="#main" title="Go to main"><img id="go-home" class="lock__image_img" src="assets/images/svg/home.svg" alt="Home"></a>
        </div>
        <h3><span data-language="en">Error</span><span data-language="ru" class="unvisible">Ошибка</span></h3>
        <p><span data-language="en">You need to LogIn. Go back to the main page.</span><span data-language="ru" class="unvisible">Необходимо залогиниться. Вернитесь на главную страницу.</span></p>
      </div>
    `;
  }
};

const Message = {
  render: (customClass = "") => {
    return `
      <div class="message ${customClass} unvisible" id="message">
        <h3><span data-language="en" id="message-eng"></span><span data-language="ru" class="unvisible" id="message-rus"></span></h3>
      </div>
    `;
  }
};

const BtnChat = {
  render: (customClass = "") => {
    return `
      <img id="chat-open" class="${customClass} btns btn-chat-show" src="assets/images/svg/chat.svg" title="Chat" alt="Chat">
    `;
  }
};

const Chat = {
  render: (customClass = "") => {
    return `
      <div class = "chat ${customClass} chat-hide" id="chat">
        <img class="btns chat__close" alt="Close" title="Close" src="assets/images/svg/close.svg" id="chat-close">
        <div class = "chat__window" id = "chat-window">
          <ul id = "messages" class="chat__window_messages">
          </ul>
          <form id = "messageForm" autocomplete="off" class="chat__window_form">
            <input type = "text" id = "msg-input" placeholder="Enter a message">
            <button class="chat__window_form_btn" id = "msg-btn" type = "submit"><i class="icon-mail iconmoon"></i></button>
          </form>
        </div>
      </div>
    `;
  }
};
