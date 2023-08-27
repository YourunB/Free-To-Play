// Список компонент (from components.js)
const components = {
  bacAnime: BackAnime,
  header: Header,
  content: Content,
  footer: Footer,
  click: Click,
  song: Song,
  goup: GoUp,
  load: Load,
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

    this.init = function(container, routes) {
      myModuleContainer = container;
      routesObj = routes;
      menu = myModuleContainer.querySelector("#mainmenu");
      contentContainer = myModuleContainer.querySelector("#content");
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
      document.getElementById("mouse-click").style.left = x + "px";
      document.getElementById("mouse-click").style.top = y + "px";
      document.getElementById("mouse-click").classList.remove("unvisible");
    }
    this.hideClick = function () { document.getElementById("mouse-click").classList.add("unvisible"); }

    this.audioPlay = function (sound) { document.getElementById(sound).play(); }
    this.audioPause = function (sound) { document.getElementById(sound).pause(); }

    this.vibration = function () { navigator.vibrate(250); }

    this.volume = function (vol) { document.getElementById("song-music").volume = vol; }

    this.close = function (element) { element.classList.add("unvisible"); }
    this.open = function (element) { element.classList.remove("unvisible"); }

    this.createCards = function (image, title, genre, date, platform, id, arrPos) {
      let box = document.getElementById("games-box");
      box.append(document.createElement("div"));
      box.getElementsByTagName("div")[box.getElementsByTagName("div").length - 1].classList.add("card");
      box.getElementsByTagName("div")[box.getElementsByTagName("div").length - 1].draggable = true;
      box.getElementsByTagName("div")[box.getElementsByTagName("div").length - 1].innerHTML = `
      <img draggable="false" class="card__img" src="${image}" alt="Game img" data-id="${id}" data-pos="${arrPos}">
      <h3 draggable="false" class="card__title"> ${title}</h3>
      <div draggable="false" class="card__discription">
        <p draggable="false"><span data-language="en">Genre:</span><span data-language="ru" class="unvisible">Жанр:</span> ${genre}</p>
        <p draggable="false"><span data-language="en">Release date:</span><span data-language="ru" class="unvisible">Дата выхода:</span> ${date}</p>
        <p draggable="false"><span data-language="en">Platform:</span><span data-language="ru" class="unvisible">Платформа:</span> ${platform}</p>
        <img draggable="false" class="card__btn" alt="Star" title="To favorites" src="assets/images/svg/star.svg" data-id="${id}" data-pos="${arrPos}">
      </div>
      `;
    }

    this.showCardDescription = function (id, image, title, dev, pub, link, genre, platform, date, description) {
      let app = document.getElementById("app");
      app.append(document.createElement("div"));
      app.getElementsByTagName("div")[app.getElementsByTagName("div").length - 1].id = "window-description";
      let windowDescription = document.getElementById("window-description");
      windowDescription.innerHTML = `
      <div class="overlay" id="overlay-description"></div>
      <div class="card-show" id="window-description">
        <div class="card-show__play">
          <img class="card-show__background" src="${image}" alt="Game image">
          <img class="card-show__img" src="${image}" alt="Game image">
          <a class="card-show__play_link" href="${link}" target="_blank" title="Play in game"><img class="card-show__play_icon" src="assets/images/svg/play.svg" alt="Icon play"></a>
        </div>
        <h3 class="card-show__play_title">${title}</h3>
        <p><span data-language="en">Developer:</span><span data-language="ru" class="unvisible">Разработчик:</span> ${dev}</p>
        <p><span data-language="en">Publisher:</span><span data-language="ru" class="unvisible">Издатель:</span> ${pub}</p>
        <p><span data-language="en">Genre:</span><span data-language="ru" class="unvisible">Жанр:</span> ${genre}</p>
        <p><span data-language="en">Platform:</span><span data-language="ru" class="unvisible">Платформа:</span> ${platform}</p>
        <p><span data-language="en">Release date:</span><span data-language="ru" class="unvisible">Дата релиза:</span> ${date}</p>
        <p><span data-language="en">Description:</span><span data-language="ru" class="unvisible">Описание:</span> ${description}</p>
        <img class="btns card-show__btn-close" alt="Close" title="Close" src="assets/images/svg/close.svg" id="close-window-description">
        <img data-id="${id}" class="card__btn card-show__btn-to-favorite" alt="Star" title="To favorites" src="assets/images/svg/star.svg" id="btn-favorites-discription-main">
      </div>
      `;
    }

    this.deleteElementById = function (id) { document.getElementById(id).remove(); };

    this.deleteCards = function () {
      let cards = document.getElementsByClassName("card");
      if (cards.length > 0) {
        for (let i = cards.length -1; cards.length !== 0; i--) {
          cards[i].remove();
        }
      }
    }

    this.showCategoryGamesTitle = function (title) {
      document.getElementById("games-title").textContent = title;
    }

    this.resetSortWindow = function () {
      for (let i = 0; i <= document.getElementsByName("genre").length - 1; i++) {
        if (document.getElementsByName("genre")[i].checked === true) document.getElementsByName("genre")[i].checked = false;
      }
      for (let i = 0; i <= document.getElementsByName("platform").length - 1; i++) {
        if (document.getElementsByName("platform")[i].checked === true) document.getElementsByName("platform")[i].checked = false;
      }
      for (let i = 0; i <= document.getElementsByName("arrange").length - 1; i++) {
        if (document.getElementsByName("arrange")[i].checked === true) document.getElementsByName("arrange")[i].checked = false;
      }
      document.getElementById("search-game").value = "";
    }

    this.changeBackground = function (category) {
      if (document.body.classList.value != category) {
        let nameClass = document.body.classList.value;
        document.body.classList.remove(nameClass);
        document.body.classList.add(category);
      }
    }

    this.showLoad = function () {
      document.getElementById("load-create").classList.remove("unvisible");
    }

    this.hideLoad = function () {
      document.getElementById("load-create").classList.add("unvisible");
    }

  };
  /* -------- end view --------- */
  /* ------- begin model ------- */
  function ModuleModel () {
    let myModuleView = null;

    let arrCards = [];
    let arrSearch = [];
    let maxCards = 0;
    let countCards = 0;

    let arrCardsDouble = [];
    let maxCardsDouble = 0;
    let countCardsDouble = 0;

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
      let x = event.pageX;
      let y = event.pageY;
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
          maxCards = data.length;
          countCards = 0;
          console.log(arrCards);
        } catch (error) {
        	console.error(error);
        }
      }
    }

    this.createCards = function () {
      myModuleView.showLoad();
      setTimeout(() => {
        let length = countCards + 20;
        for (let i = countCards; i < length; i++) {
          if (countCards < maxCards) {
            myModuleView.createCards(arrCards[i].thumbnail, arrCards[i].title, arrCards[i].genre, arrCards[i].release_date, arrCards[i].platform, arrCards[i].id, i); 
            countCards = countCards + 1;
          } else {
            myModuleView.hideLoad();
            return;
          }
        }
        myModuleView.hideLoad();
      }, 1000);
    }

    this.showCardDescription = function (id, pos) { 
      let title = arrCards[pos].title;
      let dev = arrCards[pos].developer;
      let pub = arrCards[pos].publisher;
      let link = arrCards[pos].game_url;
      let genre = arrCards[pos].genre;
      let platform = arrCards[pos].platform;
      let date = arrCards[pos].release_date;
      let description = arrCards[pos].short_description;
      let image = arrCards[pos].thumbnail;
      myModuleView.showCardDescription(id, image, title, dev, pub, link, genre, platform, date, description);
    }

    this.deleteElementById = function (id) { myModuleView.deleteElementById(id); }

    this.throttle = function (callee, timeout) {
      let timer = null
    
      return function perform(...args) {
        if (timer) return
    
        timer = setTimeout(() => {
          callee(...args)
    
          clearTimeout(timer)
          timer = null
        }, timeout)
      }
    }

    this.deleteCards = function () {
      myModuleView.deleteCards();
    }

    this.showCategoryGamesTitle = function (title) {
      myModuleView.showCategoryGamesTitle(title);
    }

    this.resetSortWindow = function () {
      myModuleView.resetSortWindow();
    }

    this.changeBackground = function (category) {
      myModuleView.changeBackground(category);
    }

    this.searchGame = function (str) {
      arrCardsDouble = arrCards;
      countCardsDouble = countCards;
      maxCardsDouble = maxCards;

      setTimeout(() => {
      for (let i = 0; i < arrCards.length; i++) {
        for (let key in arrCards[i]) {
          if (key == "title" && arrCards[i][key].toLowerCase().indexOf(str.toLowerCase()) != -1) {
            arrSearch.push(arrCards[i]);
          }
        }
      }
      this.deleteCards();
      countCards = 0;
      arrCards = arrSearch;
      maxCards = arrSearch.length;
      this.createCards();

      setTimeout(() => {
        arrSearch = [];
        arrCards = arrCardsDouble;
        countCards = countCardsDouble;
        maxCards = maxCardsDouble;
      }, 1000)

    },1000)
    }

  }

  /* -------- end model -------- */
  /* ----- begin controller ---- */
  function ModuleController () {
      let myModuleContainer = null;
      let myModuleModel = null;

      let categoryLink = "";
      let platformLink ="";
      let typeLink = "";

      let timer;// Timer identifier
      const waitTime = 2000;

      this.init = function(container, model) {
        myModuleContainer = container;
        myModuleModel = model;

        //window start page
        window.addEventListener("hashchange", this.updateState);
        window.addEventListener("click", () => {
          if (event.target.classList.value === "letter" || event.target.classList.value === "welcome__text" || event.target.classList.value === "welcome__img") {
            this.open(document.getElementById("window-loading"));
            this.audio("song-music", "play");
            myModuleModel.getGames('https://free-to-play-games-database.p.rapidapi.com/api/games');
          }
          this.audio("song-click", "play");
          this.click(event);

          if (event.target.id == "btn-music-off") {
            this.close(event.target);
            this.audio("song-music", "pause");
            this.open(document.getElementById("btn-music-on"))
          }
          if (event.target.id == "btn-music-on") {
            this.close(event.target);
            this.audio("song-music", "play");
            this.open(document.getElementById("btn-music-off"))
          }
          if (event.target.classList == "card__img") {
            myModuleModel.showCardDescription(event.target.dataset.id, event.target.dataset.pos);
          }
          if (event.target.id === "overlay-description" || event.target.id === "close-window-description") {
            this.deleteElementById("overlay-description");
            this.deleteElementById("window-description");
          }
          if (event.target.id === "btn-up") {
            window.scrollTo(0,0);
            this.audio("song-up", "play");
          }
          if (event.target.id === "btn-sort-cancel") {
            this.deleteCards();
            myModuleModel.getGames('https://free-to-play-games-database.p.rapidapi.com/api/games');
            myModuleModel.createCards();
            this.showCategoryGamesTitle("Free To Play Game");
            this.resetSortWindow();
            this.changeBackground("all");
          }
        });

        window.addEventListener("input", () => {
          if (event.target.id === "volume") this.volume(event.target.value);
          if (event.target.name === "genre") {
            categoryLink = "&category=" + event.target.nextSibling.textContent.toLowerCase(); 
            this.sortGames(categoryLink, platformLink, typeLink);
            this.showCategoryGamesTitle(event.target.nextSibling.textContent);
            this.changeBackground(event.target.nextSibling.textContent.toLowerCase());
          }
          if (event.target.name === "platform") {
            platformLink = "&platform=" + event.target.nextSibling.textContent.toLowerCase(); 
            this.sortGames(categoryLink, platformLink, typeLink);
          }
          if (event.target.name === "arrange") {
            typeLink = "&sort-by=" + event.target.nextSibling.textContent.toLowerCase();
            this.sortGames(categoryLink, platformLink, typeLink);
          }

          //debounce for search
          document.getElementById("search-game").addEventListener("keyup", (event) => {
            const text = event.currentTarget.value;
            
            clearTimeout(timer);
        
            timer = setTimeout(() => {
              //if (document.getElementById("search-game").value === "") return;
              this.searchGame(text);
            }, waitTime);
          });

        });

        window.addEventListener("scroll", myModuleModel.throttle( () => {
          if (window.scrollY > 200) document.getElementById("btn-up").classList.remove("unvisible");
          else document.getElementById("btn-up").classList.add("unvisible");
        
      
          let pageSize = document.body.getBoundingClientRect().height;
          let displaySize = window.screen.height;
          let scrollPosition = window.scrollY;
      
          if (scrollPosition + displaySize > pageSize - 20) myModuleModel.createCards(); 
        }, 250));


          window.addEventListener("dragstart", (event) => {
            if (event.target.classList[0] == "card") {
              event.target.classList.add("move-element");
              this.open(document.getElementById("drop-favorite"));
            }
          });
          window.addEventListener("dragend", (event) => {
            event.target.classList.remove("move-element");
            this.close(document.getElementById("drop-favorite"));
          });
          window.addEventListener("dragover", (event) => {
            event.preventDefault();
            const box = document.getElementById("games-box");
            const moveElement = box.getElementsByClassName("move-element")[0];
            const eventElement = event.target;
            const checkMove = moveElement !== eventElement && eventElement.classList.contains("card");

            document.body.onmouseup = function() {
              if (moveElement !== eventElement && eventElement.id == "drop-favorite") {
                console.log("Добавлено", moveElement.children[0].dataset.id); // тут будет метод добавления игры по id в БД
                return;
              }
            }

            if (!checkMove) return;
            const nextElement = (eventElement === moveElement.nextElementSibling) ? eventElement.nextElementSibling : eventElement;
            box.insertBefore(moveElement, nextElement);
          });

          
        this.updateState();
      }

      this.updateState = function() {
        const hashPageName = location.hash.slice(1).toLowerCase();
        myModuleModel.updateState(hashPageName);
        
        if (location.hash === "#main") {
          myModuleModel.getGames('https://free-to-play-games-database.p.rapidapi.com/api/games');
          myModuleModel.createCards();
        }
      }

      this.audio = function (sound, choice) { myModuleModel.audio(sound, choice); };
      this.volume = function (value) { myModuleModel.volume(value); }

      this.click = function () { myModuleModel.click(event); };

      this.open = function (element) { myModuleModel.open(element); }
      this.close = function (element) { myModuleModel.close(element); }

      this.deleteElementById = function (id) { myModuleModel.deleteElementById(id); }

      this.sortGames = function (category, platform, type) {
        myModuleModel.getGames("https://free-to-play-games-database.p.rapidapi.com/api/games?"+ category + platform + type);
        this.deleteCards();
        myModuleModel.createCards();
      }

      this.deleteCards = function () {
        myModuleModel.deleteCards();
      }

      this.showCategoryGamesTitle = function (title) {
        myModuleModel.showCategoryGamesTitle(title);
      }

      this.resetSortWindow = function () {
        myModuleModel.resetSortWindow();
      }

      this.changeBackground = function (category) {
        myModuleModel.changeBackground(category);
      }

      this.searchGame = function (str) {
        myModuleModel.searchGame(str);
      }
      
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
