const FreeToPlay = (function () {

  //-------------------------------------VIEW---------------------------------------

  function View() {
    let myContainer = null,
    myOverlay = null,
    windowEnters = null,
    windowRegistration = null,
    windowLogin = null,
    windowLoading = null,
    windowLoadingImage = null,
    windowLoadingLine = null
    mouseClick = null;

    this.init = function (container) {
      myContainer = container;
      myOverlay = myContainer.querySelector(".overlay")
      //window choice
      windowEnters = myContainer.querySelector("#window-enters");
      //window loading
      windowLoading = myContainer.querySelector("#window-loading");
      windowLoadingImage = myContainer.querySelector("#window-loading-image");
      windowLoadingLine = myContainer.querySelector("#window-loading-line");
      //window registration
      windowRegistration = myContainer.querySelector("#window-registration");
      //window login
      windowLogin = myContainer.querySelector("#window-login");
      //mouse click
      mouseClick = myContainer.querySelector("#mouse-click");
    }

    this.open = function (window) { window.classList.remove("unvisible"); }
    this.close = function (window) { window.classList.add("unvisible"); }
    this.closeAll = function () {
      myOverlay.classList.add("unvisible");
      windowEnters.classList.add("unvisible");
      windowRegistration.classList.add("unvisible");
      windowLogin.classList.add("unvisible");
    }
    this.closeOverlay = function () { myOverlay.classList.add("unvisible"); }
    this.openOverlay = function () { myOverlay.classList.remove("unvisible"); }
    this.showAllBtns = function () {
      myContainer.querySelector("#btn-music-off").classList.remove("unvisible");
      myContainer.querySelector(".settings").classList.remove("unvisible");
      myContainer.querySelector(".search").classList.remove("unvisible");
      myContainer.querySelector("#btn-enter").classList.remove("unvisible");
      myContainer.querySelector(".about").classList.remove("unvisible");
    }

    this.audioClick = function () { document.querySelector("#song-click").play(); }
    this.audioMusic = function () { document.querySelector("#song-music").play(); }
    this.audioMusicPause = function () { document.querySelector("#song-music").pause(); }
    this.audioFail = function () { document.querySelector("#song-fail").play(); }
    this.audioUp = function () { document.querySelector("#song-up").play(); }

    this.showBtnMusicOn = function () { myContainer.querySelector("#btn-music-on").classList.remove("unvisible"); }
    this.hideBtnMusicOn = function () { myContainer.querySelector("#btn-music-on").classList.add("unvisible"); }
    this.showBtnMusicOff = function () { myContainer.querySelector("#btn-music-off").classList.remove("unvisible"); }
    this.hideBtnMusicOff = function () { myContainer.querySelector("#btn-music-off").classList.add("unvisible"); }

    this.vibration = function () { navigator.vibrate(250); }

    this.toggleTheme = function () {
      myContainer.classList.toggle("light");
      windowLoading.classList.toggle("light");
      windowLoadingImage.classList.toggle("light__img");
      windowLoadingLine.classList.toggle("light__img");
    }

    this.showClick = function (x, y) {
      mouseClick.style.left = x + "px";
      mouseClick.style.top = y + "px";
      mouseClick.classList.remove("unvisible");
    }
    this.hideClick = function () { mouseClick.classList.add("unvisible"); }

    this.switchLanguage = function () {
      for (let i = 0; i < myContainer.getElementsByTagName("span").length; i++) {
        if (myContainer.getElementsByTagName("span")[i].dataset.language === "en" || myContainer.getElementsByTagName("span")[i].dataset.language === "ru") myContainer.getElementsByTagName("span")[i].classList.toggle("unvisible");
      }
    };

    this.volume = function (vol) {
      document.querySelector("#song-music").volume = vol;
    }

  }
  
  //--------------------------------------MODEL----------------------------------------

  function Model() {
    let myView = null;

    this.init = function (view) {
      myView = view;
    };

    this.open = function (window, overlay, timer, additionally) {
      myView.open(window);
      if ('vibrate' in navigator) { myView.vibration(); }
      if (timer !== 0) {
        setTimeout(() => {
          myView.close(window);
          if (window.id === "window-loading" &&  additionally.id === "window-enters") {
            myView.close(window);
            myView.open(additionally);
            myView.openOverlay();
            myView.showAllBtns();
          }
        }, timer);
      }
      if (overlay === true) myView.openOverlay();
    }

    this.close = function (window, overlay, timer, additionally) {
      myView.close(window);
      if (overlay === true) myView.closeOverlay();
    }

    this.closeAll = function () { myView.closeAll(); }

    this.audio = function (ev, choice) {
      if (ev === "click" && choice === "play") myView.audioClick();
      if (ev === "music" && choice === "play") {
        myView.audioMusic();
        myView.hideBtnMusicOn();
        myView.showBtnMusicOff();
      }
      if (ev === "music" && choice === "pause") {
        myView.audioMusicPause();
        myView.showBtnMusicOn();
        myView.hideBtnMusicOff();
      }
    }

    this.click = function (event) { 
      let x = event.clientX;
      let y = event.clientY;
      myView.showClick(x, y);
      setTimeout(() => {
        myView.hideClick();
      }, 250);
    }

    this.toggleTheme = function () { myView.toggleTheme(); }

    this.switchLanguage = function () { myView.switchLanguage(); }

    this.volume = function (value) {
      let vol = value / 100;
      myView.volume(vol);
    }

  }

  //--------------------------------------CONTROLLER------------------------------------

  function Controller () {
    let myContainer = null,
    myModel = null,
    windowWelcome = null,
    overlay = null,
    //window choice enters
    windowEnters = null;
    btnWindowEntersClose = null,
    btnWindowEntersOpenRegistration = null,
    btnWindowEntersOpenLogin = null,
    //window registration
    btnWindowRegistrationClose = null,
    btnWindowRegistrationSave = null,
    //window login
    btnWindowLoginClose = null,
    btnWindowLoginOpen = null,
    //main window
    btnMainWundowMusicOff = null,
    btnMainWundowMusicOn = null,
    btnMainWindowSearch = null,
    btnMainWindowSettings = null,
    btnMainWindowEnter = null
    //window settings
    switchLanguage = null;
    switchTheme = null;
    musicVolume = null;

    this.init = function (model, container) { 
      myModel = model;
      myContainer = container;
      windowWelcome = myContainer.querySelector("#window-welcome");
      overlay = myContainer.querySelector(".overlay");
      //window choice enters
      windowEnters = myContainer.querySelector("#window-enters");
      btnWindowEntersClose = myContainer.querySelector("#btn-window-enters-close");
      btnWindowEntersOpenRegistration = myContainer.querySelector("#btn-window-choice-sign-up");
      btnWindowEntersOpenLogin = myContainer.querySelector("#btn-window-choice-sign-in");
      //window registratin
      btnWindowRegistrationClose = myContainer.querySelector("#btn-window-registration-close");
      btnWindowRegistrationSave = myContainer.querySelector("#btn-window-registration-save");
      //window login
      btnWindowLoginClose = myContainer.querySelector("#btn-window-login-close");
      btnWindowLoginOpen  = myContainer.querySelector("#btn-window-login");
      //main window
      btnMainWundowMusicOff = myContainer.querySelector("#btn-music-off");
      btnMainWundowMusicOn = myContainer.querySelector("#btn-music-on");
      btnMainWindowSettings = myContainer.querySelector("#btn-settings");
      btnMainWindowEnter = myContainer.querySelector("#btn-enter");
      btnMainWindowSearch = myContainer.querySelector("#btn-enter");
      //window settings
      switchLanguage = myContainer.querySelector("#language");
      switchTheme = myContainer.querySelector("#theme");
      musicVolume = myContainer.querySelector("#volume");

      //main window
      btnMainWundowMusicOff.addEventListener("click", () => { this.audio("music", "pause"); });
      btnMainWundowMusicOn.addEventListener("click", () => { this.audio("music", "play"); });
      btnMainWindowEnter.addEventListener("click", () => { this.open(windowEnters, true) });
      //window welcome
      windowWelcome.addEventListener("click", () => { 
        this.close(windowWelcome);
        this.open(myContainer.querySelector(".load"), false, 10000, myContainer.querySelector("#window-enters"));
        this.audio("music", "play");
      });
      //window settings
      musicVolume.addEventListener("input", () => { this.volume(musicVolume.value); });
      switchLanguage.addEventListener("click", this.switchLanguage);
      switchTheme.addEventListener("click", () => { this.toggleTheme(); })
      //window choice enters
      window.addEventListener("click", () => { 
        this.audio("click", "play");
        this.click(event);
      });
      btnWindowEntersClose.addEventListener("click", () => { this.close(myContainer.querySelector("#window-enters"), true); });
      //window registratin
      btnWindowEntersOpenRegistration.addEventListener("click", () => { 
        this.close(myContainer.querySelector("#window-enters"), true);
        this.open(myContainer.querySelector("#window-registration"), true); 
      });
      btnWindowRegistrationClose.addEventListener("click", () => {
        this.close(myContainer.querySelector("#window-registration"), true); 
      });
      //window login
      btnWindowEntersOpenLogin.addEventListener("click", () => { 
        this.close(myContainer.querySelector("#window-enters"), true);
        this.open(myContainer.querySelector("#window-login"), true); 
      });
      btnWindowLoginClose.addEventListener("click", () => {
        this.close(myContainer.querySelector("#window-login"), true); 
      });
      //overlay
      overlay.addEventListener("click", this.closeAll);

      window.addEventListener('beforeunload', () => { this.warning(event); });
    }

    this.volume = function (value) { myModel.volume(value); }
    this.audio = function (ev, choice) { myModel.audio(ev, choice); };
    this.click = function () { myModel.click(event); };

    this.open = function (window, overlay = false, timer = 0, additionally = "") { myModel.open(window, overlay, timer, additionally); }
    this.close = function (window, overlay = false, timer = 0, additionally = "") { myModel.close(window, overlay, timer, additionally); }
    this.closeAll = function () { myModel.closeAll(); }

    this.toggleTheme = function () { myModel.toggleTheme(); }

    this.switchLanguage = function () { myModel.switchLanguage(); }

    this.warning = function (event) {
      event.preventDefault();
      event.returnValue = '';
    }
  }

  //-------------------------------------INIT-------------------------------------------

  return {

    start: function(container) {
      this.main();

      const appView = new View();
      const appModel = new Model();
      const appController = new Controller();

      const appContainer = container;

      appModel.init(appView);
      appView.init(appContainer);
      appController.init(appModel, appContainer);
    },

    main: function() { console.log("v1.0") },
  }

})();

FreeToPlay.start(document.body);
