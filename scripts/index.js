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
  lossConnection: LossConnection,
  lockDisplay: LockDisplay,
};

// Список поддердживаемых роутов (from pages.js)
const routes = {
  welcome: WelcomePage,
  main: MainPage,
  profile: ProfilePage,
  collection: CollectionPage,
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

      if (location.hash === "#main" || location.hash === "#profile" || location.hash === "#collection") document.getElementById("header").classList.remove("unvisible");
      else document.getElementById("header").classList.add("unvisible");
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

    this.close = function (element) {
      if (element === "signUp") {
        document.getElementById("window-registration").classList.add("unvisible");
        this.clearInput(document.getElementById("window-registration"));
        return;
      }
      if (element === "signIn") {
        document.getElementById("window-login").classList.add("unvisible");
        this.clearInput(document.getElementById("window-registration"));
        return;
      }
      element.classList.add("unvisible");
    }

    this.open = function (element) {
      if (element === "signIn") {
        document.getElementById("window-login").classList.remove("unvisible");
        return;
      }
      if (element === "signUp") {
        document.getElementById("window-registration").classList.remove("unvisible");
        return;
      }
      if (element === "logOut") {
        document.getElementById("window-login").classList.remove("unvisible");
        return;
      }
      element.classList.remove("unvisible");
    }

    this.createCards = function (image, title, genre, date, platform, id, arrPos) {
      let box = document.getElementById("games-box");
      box.append(document.createElement("div"));
      box.getElementsByTagName("div")[box.getElementsByTagName("div").length - 1].classList.add("card");
      box.getElementsByTagName("div")[box.getElementsByTagName("div").length - 1].draggable = true;
      box.getElementsByTagName("div")[box.getElementsByTagName("div").length - 1].innerHTML = `
      <img draggable="false" class="card__img" src="${image}" alt="Game img" data-id="${id}" data-title="${title}" data-image="${image}" data-pos="${arrPos}">
      <h3 draggable="false" class="card__title"> ${title}</h3>
      <div draggable="false" class="card__discription">
        <p draggable="false"><span data-language="en">Genre:</span><span data-language="ru" class="unvisible">Жанр:</span> ${genre}</p>
        <p draggable="false"><span data-language="en">Release date:</span><span data-language="ru" class="unvisible">Дата выхода:</span> ${date}</p>
        <p draggable="false"><span data-language="en">Platform:</span><span data-language="ru" class="unvisible">Платформа:</span> ${platform}</p>
        <img draggable="false" class="card__btn" alt="Star" title="To favorites" src="assets/images/svg/star.svg" data-id="${id}" data-title="${title}" data-image="${image}">
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
        <img data-id="${id}" data-title="${title}" data-image="${image}" class="card__btn card-show__btn-to-favorite" alt="Star" title="To favorites" src="assets/images/svg/star.svg" id="btn-favorites-description-main">
        <img data-id="${id}" class="detail btns" alt="Detail" title="Detail" src="assets/images/svg/detail.svg" id="detail">
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

    this.showLossConnection = function () {
      document.getElementById("loss-connection").classList.remove("unvisible");
    }

    this.windowRefresh = function () {
      window.location.reload();
    }

    this.clearInput = function (parent) {

    }

    this.elementsLogin = function () {
      document.getElementById("my-profile").classList.remove("unvisible");
      document.getElementById("my-collection").classList.remove("unvisible");
      document.getElementById("my-profile-exit").classList.remove("unvisible");
      document.getElementById("my-profile-enter").classList.add("unvisible");
    }

    this.elementsLogout = function () {
      document.getElementById("my-profile").classList.add("unvisible");
      document.getElementById("my-collection").classList.add("unvisible");
      document.getElementById("my-profile-exit").classList.add("unvisible");
      document.getElementById("my-profile-enter").classList.remove("unvisible");
    }

    this.createCardsGamesUserCollection = function (obj) {
      if (obj) {
        let arr = [];
        const collectionBox = document.getElementById("collection-box");
        for (let key in obj) {
          console.log(key, obj[key].split("|"));
          arr = obj[key].split("|");
          collectionBox.append(document.createElement("div"));
          collectionBox.getElementsByTagName("div")[collectionBox.getElementsByTagName("div").length - 1].classList.add("collection__box_card");
          collectionBox.getElementsByTagName("div")[collectionBox.getElementsByTagName("div").length - 1].dataset.id = key; 
          collectionBox.getElementsByTagName("div")[collectionBox.getElementsByTagName("div").length - 1].innerHTML = `
          <img class="collection__box_card_image" src="${arr[1]}" data-id="${key}" alt="Game">
          <h3>${arr[0]}</h3>
          <img data-id="${key}" class="btns collection__box_card_btn" src="assets/images/svg/remove.svg" alt="Delete game">
          `;
        }
      }
    }

    this.createFullDescriptionCollectionGame = function (data) {
      let app = document.getElementById("app");
      app.append(document.createElement("div"));
      app.getElementsByTagName("div")[app.getElementsByTagName("div").length - 1].id = "full-description";
      let fullDescription = document.getElementById("full-description");
      fullDescription.classList.add("full-description");
      fullDescription.innerHTML = `
        <img class="full-description__background" src="${data.screenshots[0].image}" alt="Game image">
        <h2 class="full-description__title">${data.title}</h2>
        <img class="full-description__image" src="${data.thumbnail}" alt="Game image">
        <p><span class="red" data-language="en">Genre:</span><span data-language="ru" class="unvisible red">Жанр:</span> ${data.genre}</p>
        <p><span class="red" data-language="en">Description:</span><span data-language="ru" class="unvisible red">Описание:</span> ${data.description}</p>
        <p><span class="red" data-language="en">Status:</span><span data-language="ru" class="unvisible red">Статус:</span> ${data.status}</p>
        <p><span class="red" data-language="en">Platform:</span><span data-language="ru" class="unvisible red">Платформа:</span> ${data.platform}</p>
        <p><span class="red" data-language="en">Developer:</span><span data-language="ru" class="unvisible red">Разработчик:</span> ${data.developer}</p>
        <p><span class="red" data-language="en">Publisher:</span><span data-language="ru" class="unvisible red">Издатель:</span> ${data.publisher}</p>
        <p><span class="red" data-language="en">Game link:</span><span data-language="ru" class="unvisible red">Ссылка на игру:</span><a class="full-description__link" href="${data.game_url}" target="_blank"> ${data.game_url}</a></p>
        <div class="full-description__requirements">
          <span class="yellow" data-language="en">Minimum system requirements:</span><span data-language="ru" class="unvisible red">Минимальные системные требования:</span>
          <ul>
            <li><span class="red">GPU:</span> ${(data['minimum_system_requirements']) ? data['minimum_system_requirements'].graphics: "none"}</li>
            <li><span class="red">CPU:</span> ${(data['minimum_system_requirements']) ? data['minimum_system_requirements'].processor : "none"}</li>
            <li><span class="red">RAM:</span> ${(data['minimum_system_requirements']) ? data['minimum_system_requirements'].memory : "none"}</li>
            <li><span class="red">SYS:</span> ${(data['minimum_system_requirements']) ? data['minimum_system_requirements'].os : "none"}</li>
          </ul>
        </div>
        <div class="full-description__screenshots">
          <a data-fancybox="gallery" href="${data.screenshots[0].image}"><img class="full-description__screenshots_image" src="${data.screenshots[0].image}" alt="Game screenshot"></a>
          <a data-fancybox="gallery" href="${data.screenshots[1].image}"><img class="full-description__screenshots_image" src="${data.screenshots[1].image}" alt="Game screenshot"></a>
          <a data-fancybox="gallery" href="${data.screenshots[2].image}"><img class="full-description__screenshots_image" src="${data.screenshots[2].image}" alt="Game screenshot"></a>
        </div>
        <img class="btns card-show__btn-close" alt="Close" title="Close" src="assets/images/svg/close.svg" id="close-full-description">
      `;
    }

    this.createFullDescriptionGame = function (data) {
      let app = document.getElementById("app");
      app.append(document.createElement("div"));
      app.getElementsByTagName("div")[app.getElementsByTagName("div").length - 1].id = "full-description";
      let fullDescription = document.getElementById("full-description");
      fullDescription.classList.add("full-description");
      fullDescription.innerHTML = `
        <img class="full-description__background" src="${data.screenshots[0].image}" alt="Game image">
        <h2 class="full-description__title">${data.title}</h2>
        <img class="full-description__image" src="${data.thumbnail}" alt="Game image">
        <p><span class="red" data-language="en">Genre:</span><span data-language="ru" class="unvisible red">Жанр:</span> ${data.genre}</p>
        <p><span class="red" data-language="en">Description:</span><span data-language="ru" class="unvisible red">Описание:</span> ${data.description}</p>
        <p><span class="red" data-language="en">Status:</span><span data-language="ru" class="unvisible red">Статус:</span> ${data.status}</p>
        <p><span class="red" data-language="en">Platform:</span><span data-language="ru" class="unvisible red">Платформа:</span> ${data.platform}</p>
        <p><span class="red" data-language="en">Developer:</span><span data-language="ru" class="unvisible red">Разработчик:</span> ${data.developer}</p>
        <p><span class="red" data-language="en">Publisher:</span><span data-language="ru" class="unvisible red">Издатель:</span> ${data.publisher}</p>
        <p><span class="red" data-language="en">Game link:</span><span data-language="ru" class="unvisible red">Ссылка на игру:</span><a class="full-description__link" href="${data.game_url}" target="_blank"> ${data.game_url}</a></p>
        <div class="full-description__requirements">
          <span class="yellow" data-language="en">Minimum system requirements:</span><span data-language="ru" class="unvisible red">Минимальные системные требования:</span>
          <ul>
            <li><span class="red">GPU:</span> ${(data['minimum_system_requirements']) ? data['minimum_system_requirements'].graphics: "none"}</li>
            <li><span class="red">CPU:</span> ${(data['minimum_system_requirements']) ? data['minimum_system_requirements'].processor : "none"}</li>
            <li><span class="red">RAM:</span> ${(data['minimum_system_requirements']) ? data['minimum_system_requirements'].memory : "none"}</li>
            <li><span class="red">SYS:</span> ${(data['minimum_system_requirements']) ? data['minimum_system_requirements'].os : "none"}</li>
          </ul>
        </div>
        <div class="full-description__screenshots">
          <a data-fancybox="gallery" href="${data.screenshots[0].image}"><img class="full-description__screenshots_image" src="${data.screenshots[0].image}" alt="Game screenshot"></a>
          <a data-fancybox="gallery" href="${data.screenshots[1].image}"><img class="full-description__screenshots_image" src="${data.screenshots[1].image}" alt="Game screenshot"></a>
          <a data-fancybox="gallery" href="${data.screenshots[2].image}"><img class="full-description__screenshots_image" src="${data.screenshots[2].image}" alt="Game screenshot"></a>
        </div>
        <img class="btns card-show__btn-close" alt="Close" title="Close" src="assets/images/svg/close.svg" id="close-full-description">
      `;
    }

    this.deleteCardGameCollection = function (gameId) {
      const cards = document.getElementsByClassName("collection__box_card");
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].dataset.id === gameId) cards[i].remove();
      }
    }

    this.themeDark = function () {
      document.body.classList.remove("light");
      if (location.hash === '') {
        document.getElementById("window-loading").classList.remove("light");
        document.getElementById("window-loading-image").classList.remove("light__img");
        document.getElementById("window-loading-line").classList.remove("light__img");
      }
    }
    this.themeLigth = function () {
      document.body.classList.add("light");
      if (location.hash === '') {
        document.getElementById("window-loading").classList.add("light");
        document.getElementById("window-loading-image").classList.add("light__img");
        document.getElementById("window-loading-line").classList.add("light__img");
      }
    }
    this.languageRus = function () {
      for (let i = 0; i < document.getElementsByTagName("span").length; i++) {
        if (document.getElementsByTagName("span")[i].dataset.language === "ru") document.getElementsByTagName("span")[i].classList.remove("unvisible");
        if (document.getElementsByTagName("span")[i].dataset.language === "en") document.getElementsByTagName("span")[i].classList.add("unvisible");
      }
    }
    this.languageEng = function () {
      for (let i = 0; i < document.getElementsByTagName("span").length; i++) {
        if (document.getElementsByTagName("span")[i].dataset.language === "ru") document.getElementsByTagName("span")[i].classList.add("unvisible");
        if (document.getElementsByTagName("span")[i].dataset.language === "en") document.getElementsByTagName("span")[i].classList.remove("unvisible");
      }
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

    let userTheme = 'dark';
    let userLang = 'en';

    let arrCardsDouble = [];
    let maxCardsDouble = 0;
    let countCardsDouble = 0;

    this.init = function(view) {
      myModuleView = view;
    }

    this.updateState = function(pageName) {
      myModuleView.renderContent(pageName);
      this.checkUser();
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
          window.open("#main","_self");
        }, 10000)
      }
    }

    this.getGames = function (link) {
      const url = link;
      const options = {
      	method: 'GET',
      	headers: {
      		'X-RapidAPI-Key': 'f9d6719b45msh2c8aad6c5d685ffp1c59ebjsn90e5e228a426',
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
          if (error != "") {
            myModuleView.showLossConnection();
            myModuleView.audioPlay("song-fail");
          }
        }
      }
    }

    this.getIdGameInfo = function (id, ev) {
      const url = "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id;
      const options = {
      	method: 'GET',
      	headers: {
      		'X-RapidAPI-Key': 'f9d6719b45msh2c8aad6c5d685ffp1c59ebjsn90e5e228a426',
      		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      	}
      };
      fetchAsync();
      async function fetchAsync() { 
        try {
        	const response = await fetch(url, options);
        	const data = await response.json();
          console.log(data);
          if (ev === "detail") {

            myModuleView.showLoad();
            setTimeout(() => {
              myModuleView.createFullDescriptionGame(data);
              myModuleView.hideLoad();
            }, 1000);
          }
          
        } catch (error) {
          if (error != "") {
            myModuleView.showLossConnection();
            myModuleView.audioPlay("song-fail");
          }
        }
      }
    }

    this.getCardDescriptionUserCollection = function (id) {
      const url = "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id;
      const options = {
      	method: 'GET',
      	headers: {
      		'X-RapidAPI-Key': 'f9d6719b45msh2c8aad6c5d685ffp1c59ebjsn90e5e228a426',
      		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      	}
      };
      fetchAsync();
      async function fetchAsync() { 
        try {
        	const response = await fetch(url, options);
        	const data = await response.json();
          console.log(data);

            myModuleView.showLoad();
            setTimeout(() => {
              myModuleView.createFullDescriptionCollectionGame(data);
              myModuleView.hideLoad();
            }, 1000);
          
        } catch (error) {
          if (error != "") {
            myModuleView.showLossConnection();
            myModuleView.audioPlay("song-fail");
          }
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
        setTimeout(()=>{this.checkLanguage();},0);
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
        
      }, 1000)
    }

    this.windowRefresh = function () {
      myModuleView.windowRefresh();
    }

    this.addUser = function (username, useremail) {
      myAppDB
        .ref("users/" + `user_${username.replace(/\s/g, "").toLowerCase()}`)
        .set({
          username: `${username}`,
          email: `${useremail}`,
        })
        .then(function () {
          console.log("Пользователь добавлен в коллецию users");
        })
        .catch(function (error) {
          console.error("Ошибка добавления пользователя: ", error);
        });
    };

    this.signIn = function (userEmail, userPass) {
      if (userEmail && userPass) {
        auth
          .signInWithEmailAndPassword(userEmail, userPass)
          .then((userCredential) => {
            // Signed in
            localStorage.setItem('login', true);
            const user = userCredential.user;
            console.log(user.multiFactor.user.email)
            alert('Hello');
            myModuleView.close("signIn");
            this.checkUser();
          })
          .catch(function (error) {
            console.log("Error: " + error.message);
           alert("Неверный email или пароль. Введите корректные данные.");
          });
      } else {
        alert("Заполните все поля!");
      }
    };

    this.signUp = function (userEmail, userPass) {
      if (userEmail && userPass) {
        auth
          .createUserWithEmailAndPassword(userEmail, userPass)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('Зарегистрирован новый пользователь');
            myModuleView.close('signUp');
            myModuleView.open('signIn');
          })
          .catch((error) => {
            console.log("Error: " + error.message);
            alert("Введите корректные данные.");
            // ..
          });
      } else {
        alert("Заполните все поля!");
      }
    };

    this.logout = function () {
      firebase.auth().signOut().then(() => {
        delete localStorage.login;
        alert("Вы вышли из аккаунта");
        this.checkUser();
      });
    };

    this.deleteUser = function () {
      let user = firebase.auth().currentUser;
      user.delete().then(function() {
        window.open("#main","_self");
        this.checkUser();
        alert("Пользователь удален");
      }).catch(function(error) {
        alert("Не удалось удалить пользователя")
        console.log("Error: " + error.message);
      });
    }

    this.changePassword = function (userPass) {
      if (userPass) {
        const user = firebase.auth().currentUser;
        const newPassword = userPass;
        user.updatePassword(newPassword).then(() => {
          alert("Пароль изменен");
          console.log('Update SuccessFul');
        }).catch((error) => {
          console.log("Error: " + error.message);
        });
      } else {
        alert("Заполните все поля!");
      }
    };
/*
    this.checkUser = function () {
      const user = firebase.auth().currentUser;
      if (user !== null) {
        console.log("User IN");
        myModuleView.elementsLogin();
      } else {
        myModuleView.elementsLogout();
        console.log("User OUT");
      }
    }
*/  
    this.checkUser = function () {
      if (localStorage.login === "true") {
        myModuleView.elementsLogin();
      } else {
        myModuleView.elementsLogout();
      }
    }

    this.checkTheme = function () {
      if (localStorage.theme === "light") {
        myModuleView.themeLigth();
      } else {
        myModuleView.themeDark();
      }
    }

    this.checkLanguage = function () {
      if (localStorage.lang === "ru") {
        myModuleView.languageRus();
      } else {
        myModuleView.languageEng();
      }
    }

    this.addGameToCollection = function (gameId, gameTitle, gameImage) {
      const user = firebase.auth().currentUser;
      if (user !== null) {
        myAppDB
          .ref("users/" + [user.multiFactor.user.uid] + "/games/")
          .update({
            /*email: user.multiFactor.user.email,
            games: { */
            [gameId] : gameTitle + "|" + gameImage, /*} 
            image: gameImage,*/
          })
          .then(function () {
           alert("Игра добавлена в коллекцию");
          })
          .catch(function (error) {
            console.error("Ошибка добавления: ", error);
          });
        } else {
          alert("Сначала залогиньтесь");
        }
    };

    this.getGamesUserCollection = function () {
      const user = firebase.auth().currentUser;
      myAppDB
        .ref("users/" + [user.multiFactor.user.uid] + "/games/")
        .once("value")
        .then(function (snapshot) {
          const obj = snapshot.val();
          myModuleView.createCardsGamesUserCollection(obj);
        })
        .catch(function (error) {
          console.log("Error: " + error.code);
        });
    };

    this.deleteCardGameCollection = function (gameId) {
      console.log(gameId)
      const user = firebase.auth().currentUser;
      myAppDB
        .ref("users/" + [user.multiFactor.user.uid] + "/games/" + gameId)
        .remove()
        .then(function () {
          myModuleView.deleteCardGameCollection(gameId);
          alert("Игра удалена");
        })
        .catch(function (error) {
          console.error("Ошибка удаления: ", error);
        });
    };

    this.getUsersList = function () {
      myAppDB
        .ref("users/")
        .once("value")
        .then(function (snapshot) {
          console.log(snapshot.val());
        })
        .catch(function (error) {
          console.log("Error: " + error.code);
        });
    };

    this.showLoad = function() { myModuleView.showLoad(); }
    this.hideLoad = function() { myModuleView.hideLoad(); }

    this.changeTheme = function() {
      if (localStorage.theme !== "light") localStorage.setItem("theme", "light");
      else delete localStorage.theme;
      this.checkTheme();
    }

    this.changeLanguage = function () {
      if (localStorage.lang !== "ru") localStorage.setItem("lang", "ru");
      else delete localStorage.lang;
      this.checkLanguage();
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

      let complete = null;

      this.init = function(container, model) {
        myModuleContainer = container;
        myModuleModel = model;

        //window start page
        window.addEventListener("hashchange", this.updateState);
        
        myModuleContainer.addEventListener("click", () => {
          if (event.target.classList.value === "letter" || event.target.classList.value === "welcome__text" || event.target.classList.value === "welcome__img") {
            this.open(document.getElementById("window-loading"));
            this.audio("song-music", "play");
            //myModuleModel.getGames('https://free-to-play-games-database.p.rapidapi.com/api/games');
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
            this.scrollOff();
          }
          if (event.target.id === "overlay-description" || event.target.id === "close-window-description") {
            this.deleteElementById("overlay-description");
            this.deleteElementById("window-description");
            this.scrollOn();
          }

          if (event.target.id === "close-full-description") {
            this.deleteElementById("full-description");
          }
          if (event.target.id === "btn-up") {
            window.scroll({top: 0, behavior: "smooth"});
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
          if (event.target.id === "reload-page") myModuleModel.windowRefresh();
          if (event.target.id === "detail") {
            myModuleModel.getIdGameInfo(event.target.dataset.id, event.target.id);
          }
          if (event.target.id === "btn-window-enters-close") this.close(document.getElementById("window-enters"));
          if (event.target.id === "btn-window-login-close") this.close(document.getElementById("window-login"));
          if (event.target.id === "btn-window-registration-close") this.close(document.getElementById("window-registration"));
          if (event.target.id === "btn-window-choice-sign-up") {
            this.close(document.getElementById("window-enters"));
            this.open(document.getElementById("window-registration"));
          }
          if (event.target.id === "btn-window-choice-sign-in") {
            this.close(document.getElementById("window-enters"));
            this.open(document.getElementById("window-login"));
          } 
          if (event.target.id === "go-to-signup" || event.target.textContent === "SignUp" || event.target.textContent === "Регистрация") {
            this.close(document.getElementById("window-login"));
            this.open(document.getElementById("window-registration"));
          }
          if (event.target.id === "go-to-login" || event.target.textContent === "LogIn" || event.target.textContent === "Войти") {
            this.close(document.getElementById("window-registration"));
            this.open(document.getElementById("window-login"));
          }
          /*if (event.target.id === "btn-window-registration-save") {
            event.preventDefault();
            myModuleModel.addUser(document.getElementById("input-registration-mail").value, document.getElementById("input-registration-pass").value);
          }*/
          if (event.target.id === "btn-window-login") {//signIn
            myModuleModel.signIn(document.getElementById("input-login-mail").value, document.getElementById("input-login-pass").value);
          }
          if (event.target.id === "btn-window-registration-save") {//signUp
            myModuleModel.signUp(document.getElementById("input-registration-mail").value, document.getElementById("input-registration-pass").value);
          }
          if (event.target.id === "my-profile-enter" || event.target.textContent === "Log-In" || event.target.textContent === "Учетная запись") {
            this.open(document.getElementById("window-enters"));
          }
          if (event.target.id === "my-profile-exit" || event.target.textContent === "Log-Out" || event.target.textContent === "Выйти из профиля") {
            myModuleModel.logout();
          }
          if (event.target.id === "my-profile-pass-save") myModuleModel.changePassword(document.getElementById("profile-pass").value);
          if (event.target.id === "my-profile-delete" || event.target.textContent === "Delete profile" || event.target.textContent === "Удалить профиль") {
            myModuleModel.deleteUser();
          }
          if (event.target.classList.value === "card__btn" || event.target.classList.value === "card__btn card-show__btn-to-favorite") {//add game to collection
            myModuleModel.addGameToCollection(event.target.dataset.id, event.target.dataset.title, event.target.dataset.image);
          }
          if (event.target.classList.value === "collection__box_card_image") {
            myModuleModel.getCardDescriptionUserCollection(event.target.dataset.id);
          }
          if (event.target.classList.value === "btns collection__box_card_btn") {
            myModuleModel.deleteCardGameCollection(event.target.dataset.id);
          }
          if (event.target.id === "theme") { myModuleModel.changeTheme(); }
          if (event.target.id === "language") { myModuleModel.changeLanguage(); }
          if (event.currentTarget === "app") myModuleModel.checkUser();
          if (event.target.id === "go-home") document.getElementById("lock").classList.add("unvisible");
          console.log(event.target)
        });

        myModuleContainer.addEventListener("input", () => {
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
      
          if (scrollPosition + displaySize > pageSize - 20 && location.hash === "#main") myModuleModel.createCards(); 
        }, 250));


          myModuleContainer.addEventListener("dragstart", (event) => {
            if (event.target.classList[0] == "card") {
              event.target.classList.add("move-element");
              this.open(document.getElementById("drop-favorite"));
            }
          });
          myModuleContainer.addEventListener("dragend", (event) => {
            event.target.classList.remove("move-element");
            setTimeout(() => {
              this.close(document.getElementById("drop-favorite"));
            }, 250); 
          });
          myModuleContainer.addEventListener("dragover", (event) => {
            event.preventDefault();
            const box = document.getElementById("games-box");
            const moveElement = box.getElementsByClassName("move-element")[0];
            const eventElement = event.target;
            const checkMove = moveElement !== eventElement && eventElement.classList.contains("card");

            document.getElementById("drop-favorite").onmouseleave = () => {
              if (moveElement !== eventElement && eventElement.id == "drop-favorite") {
                //alert("Добавлено", moveElement.children[0].dataset.id,moveElement.children[0].dataset.title, moveElement.children[0].dataset.image); // тут будет метод добавления игры по id в БД
                myModuleModel.addGameToCollection(moveElement.children[0].dataset.id, moveElement.children[0].dataset.title, moveElement.children[0].dataset.image);
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

        if (location.hash === "#profile" && localStorage.login !== "true") {
          document.getElementById("lock").classList.remove("unvisible");
        }
        if (location.hash === "#collection" && localStorage.login !== "true") {
          document.getElementById("lock").classList.remove("unvisible");
        }
        if (location.hash === "#collection" && localStorage.login === "true") {
          myModuleModel.showLoad();
          setTimeout(()=>{
            myModuleModel.getGamesUserCollection();
            myModuleModel.hideLoad();
          }, 2500);
        }

        myModuleModel.checkUser();
        myModuleModel.checkTheme();
        myModuleModel.checkLanguage();
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
        myModuleModel.changeLanguage();
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

      this.scrollOff = function () { document.body.classList.add("scroll-off"); }
      this.scrollOn = function () { document.body.classList.remove("scroll-off"); }
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
