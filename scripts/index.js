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
  };
  /* -------- end view --------- */
  /* ------- begin model ------- */
  function ModuleModel () {
    let myModuleView = null;

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
        });

        window.addEventListener("input", () => {
          if (event.target.id === "volume") this.volume(event.target.value);
        });

        this.updateState();
      }

      this.updateState = function() {
        const hashPageName = location.hash.slice(1).toLowerCase();
        myModuleModel.updateState(hashPageName);
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
