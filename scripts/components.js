const Header = {
  render: (customClass = "") => {
    return `   
      <header class="header ${customClass}" id="header">
        <img class="btns btns__music unvisible" alt="Music" title="Music start/pause" src="assets/images/svg/music-on.svg" id="btn-music-on">
        <img class="btns btns__music" alt="Music" title="Music start/pause" src="assets/images/svg/music-off.svg" id="btn-music-off">
    
        <div class="header-btns__box">
          <div class="search">
            <img class="btns" alt="Search" title="Search" src="assets/images/svg/search.svg" id="btn-search">
            <div class="search__param">
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
    
          <div class="settings">
            <img class="btns" alt="Settings" title="Setting" src="assets/images/svg/settings.svg" id="btn-settings">
            <div class="settings__param">
              <div>
                <p class="settings__param_volume"><span data-language="en">Music volume</span><span data-language="ru" class="unvisible">Громкость музыки</span></p>
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
            <img class="btns" alt="Enter" title="Enter" src="assets/images/svg/enter.svg" id="btn-enter">
            <div class="profile__param">
              <p><span data-language="en">Profile settings</span><span data-language="ru" class="unvisible">Настройки профиля</span></p>
              <p><span data-language="en">My сollection</span><span data-language="ru" class="unvisible">Моя коллекция</span></p>
            </div>
          </div>
        </div>
    
        <div class="about">
          <img class="btns" alt="About" title="About developer" src="assets/images/svg/info.svg" id="about">
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
