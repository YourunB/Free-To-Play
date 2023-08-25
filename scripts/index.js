// Список компонент (from components.js)
const components = {
  bacAnime: BackAnime,
  header: Header,
  content: Content,
  footer: Footer,
};

// Список поддердживаемых роутов (from pages.js)
const routes = {
  welcome: WelcomePage,
  main: MainPage,

  default: WelcomePage,
  error: ErrorPage,
};

/* ----- spa init module --- */
const mySPA = (function() {

  /* ------- begin view -------- */
  function ModuleView() {
    let myModuleContainer = null;
    let menu = null;
    let contentContainer = null;
    let routesObj = null;
    let mouseClick = null;

    this.init = function(container, routes) {
      myModuleContainer = container;
      routesObj = routes;
      menu = myModuleContainer.querySelector("#mainmenu");
      contentContainer = myModuleContainer.querySelector("#content");
      mouseClick = document.querySelector("#mouse-click");
    }

    this.renderContent = function(hashPageName) {
      let routeName = "default";

      if (hashPageName.length > 0) routeName = hashPageName in routes ? hashPageName : "error";

      window.document.title = routesObj[routeName].title;
      contentContainer.innerHTML = routesObj[routeName].render(`${routeName}-page`);

      if (location.hash !== "#main") document.getElementById("header").classList.add("unvisible");
      else document.getElementById("header").classList.remove("unvisible");
    }

    this.showClick = function (x, y) {
      mouseClick.style.left = x + "px";
      mouseClick.style.top = y + "px";
      mouseClick.classList.remove("unvisible");
    }
    this.hideClick = function () { mouseClick.classList.add("unvisible"); }

    this.audioPlay = function (sound) { document.querySelector(sound).play(); }
    this.audioPause = function (sound) { document.querySelector(sound).pause(); }

    this.vibration = function () { navigator.vibrate(250); }

    this.volume = function (vol) { document.querySelector("#song-music").volume = vol; }

    this.close = function (element) { element.classList.add("unvisible"); }
    this.open = function (element) { element.classList.remove("unvisible"); }

    this.createCards = function (image, title, genre, date, platform, id, arrPos) {
      let box = document.getElementById("games-box");
      box.append(document.createElement("div"));
      box.getElementsByTagName("div")[box.getElementsByTagName("div").length - 1].classList.add("card");
      box.getElementsByTagName("div")[box.getElementsByTagName("div").length - 1].innerHTML = `
      <img class="card__img" src="${image}" alt="Game img">
      <h3 class="card__title"> ${title}</h3>
      <div class="card__discription" data-id="${id}" data-pos="${arrPos}">
        <p><span data-language="en">Genre:</span><span data-language="ru" class="unvisible">Жанр:</span> ${genre}</p>
        <p><span data-language="en">Release date:</span><span data-language="ru" class="unvisible">Дата выхода:</span> ${date}</p>
        <p><span data-language="en">Platform:</span><span data-language="ru" class="unvisible">Платформа:</span> ${platform}</p>
        <img class="card__btn" alt="Star" title="To favorites" src="assets/images/svg/star.svg">
      </div>
      `;
    }

    this.showCardDescription = function () {
      let app = document.getElementById("app");
      app.append(document.createElement("div"));
      app.getElementsByTagName("div")[app.getElementsByTagName("div").length - 1].id = "window-description";
      let windowDescription = document.getElementById("window-description");
      windowDescription.innerHTML = `
      <di v class="overlay"></div>
      <div class="card-show">
        <div class="card-show__play">
          <img class="card-show__background" src="https://www.freetogame.com/g/508/thumbnail.jpg" alt="Game img">
          <img class="card-show__img" src="https://www.freetogame.com/g/508/thumbnail.jpg" alt="Game img">
          <a class="card-show__play_link" href="#"><img class="card-show__play_icon" src="../Downloads/top_icon_124040 (1).svg" alt="Icon play"></a>
        </div>
        <h3 class="card-show__play_title">Genshin Impact asdasdas</h3>
        <p><span data-language="en">Developer:</span><span data-language="ru" class="unvisible">Разработчик:</span> Blizzard Entertainment</p>
        <p><span data-language="en">Publisher:</span><span data-language="ru" class="unvisible">Издатель:</span> Activision</p>
        <p><span data-language="en">Genre:</span><span data-language="ru" class="unvisible">Жанр:</span> Strategy</p>
        <p><span data-language="en">Platform:</span><span data-language="ru" class="unvisible">Платформа:</span> PC Windows BRowser</p>
        <p><span data-language="en">Release date:</span><span data-language="ru" class="unvisible">Дата релиза:</span> "2022-02-11"</p>
        <p><span data-language="en">Description:</span><span data-language="ru" class="unvisible">Описание:</span> "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed."</p>
        <img class="btns card-show__btn-close" alt="Close" title="Close" src="assets/images/svg/close.svg" id="btn-close-discription-main">
        <img class="card__btn card-show__btn-to-favorite" alt="Star" title="To favorites" src="assets/images/svg/star.svg" id="btn-favorites-discription-main">
      </div>
      `;
    }

  };
  /* -------- end view --------- */
  /* ------- begin model ------- */
  function ModuleModel () {
    let myModuleView = null;

    let arrCards = [];
    let maxCards = 0;
    let countCards = 0;

    this.init = function(view) {
      myModuleView = view;
    }

    this.updateState = function(pageName) {
      myModuleView.renderContent(pageName);
    }

    this.audio = function (sound, choice) {
      if (choice === "play") myModuleView.audioPlay(sound);
      if (choice === "pause") myModuleView.audioPause(sound);
    }

    this.volume = function (value) {
      let vol = value / 100;
      myModuleView.volume(vol);
    }

    this.click = function (event) { 
      let x = event.clientX;
      let y = event.clientY;
      myModuleView.showClick(x, y);
      setTimeout(() => {
        myModuleView.hideClick();
      }, 200);
    }

    this.close = function close (element) {
      if ('vibrate' in navigator) myModuleView.vibration();
      myModuleView.close(element);
    }
    this.open = function open (element) {
      if ('vibrate' in navigator) myModuleView.vibration();
      myModuleView.open(element);
      if (element.id === "window-loading") {
        setTimeout(() => {
          myModuleView.close(element);
          window.open("#main","_self")
        }, 10000)
      }
    }

    this.getGames = function (link) {
      const url = link;
      const options = {
      	method: 'GET',
      	headers: {
      		'X-RapidAPI-Key': 'a103204f4fmsh27c54e4cba38877p121bd4jsn8f32775b6bb9',
      		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      	}
      };

      fetchAsync();
      async function fetchAsync() { 
        try {
        	const response = await fetch(url, options);
        	const data = await response.json();
        	arrCards = data;
          console.log(arrCards)
          maxCards = data.length;
        } catch (error) {
        	console.error(error);
        }
      }
    }

    this.createCards = function () {
      let length = countCards + 20;
      for (let i = countCards; i < length; i++) {
        if (countCards < maxCards) {
          myModuleView.createCards(arrCards[i].thumbnail, arrCards[i].title, arrCards[i].genre, arrCards[i].release_date, arrCards[i].platform, arrCards[i].id, i); 
          countCards = countCards + 1;
        } else return;
      }
    }

  }

  /* -------- end model -------- */
  /* ----- begin controller ---- */
  function ModuleController () {
      let myModuleContainer = null;
      let myModuleModel = null;

      this.init = function(container, model) {
        myModuleContainer = container;
        myModuleModel = model;

        //window start page
        window.addEventListener("hashchange", this.updateState);
        window.addEventListener("click", () => {
          if (event.target.classList.value === "letter" || event.target.classList.value === "welcome__text" || event.target.classList.value === "welcome__img") {
            this.open(document.getElementById("window-loading"));
            this.audio("#song-music", "play");
          }
          this.audio("#song-click", "play");
          this.click(event);

          if (event.target.id == "btn-music-off") {
            this.close(event.target);
            this.audio("#song-music", "pause");
            this.open(document.getElementById("btn-music-on"))
          }
          if (event.target.id == "btn-music-on") {
            this.close(event.target);
            this.audio("#song-music", "play");
            this.open(document.getElementById("btn-music-off"))
          }
          
          console.log(event.target.parentElement.classList.value)
          console.log(event.target.classList.value)
        });

        window.addEventListener("input", () => {
          if (event.target.id === "volume") this.volume(event.target.value);
        });

        this.updateState();
      }

      this.updateState = function() {
        const hashPageName = location.hash.slice(1).toLowerCase();
        myModuleModel.updateState(hashPageName);
        
        if (location.hash === "#main") {
          myModuleModel.getGames('https://free-to-play-games-database.p.rapidapi.com/api/games');
          setTimeout(()=>{myModuleModel.createCards();}, 1000);
        }
      }

      this.audio = function (sound, choice) { myModuleModel.audio(sound, choice); };
      this.volume = function (value) { myModuleModel.volume(value); }

      this.click = function () { myModuleModel.click(event); };

      this.open = function (element) { myModuleModel.open(element); }
      this.close = function (element) { myModuleModel.close(element); }
  };
  /* ------ end controller ----- */

  return {
      init: function({ container, routes, components }) {
        this.renderComponents(container, components);

        const view = new ModuleView();
        const model = new ModuleModel();
        const controller = new ModuleController();

        view.init(document.getElementById(container), routes);
        model.init(view);
        controller.init(document.getElementById(container), model);
      },

      renderComponents: function (container, components) {
        const root = document.getElementById(container);
        const componentsList = Object.keys(components);
        for (let item of componentsList) {
          root.innerHTML += components[item].render("component");
        }
      },
  };

}());
/* ------ end app module ----- */

/*** --- init module --- ***/
document.addEventListener("DOMContentLoaded", mySPA.init({
  container: "app",
  routes: routes,
  components: components
}));
