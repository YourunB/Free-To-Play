const FreeToPlay = (function () {

  //-------------------------------------VIEW---------------------------------------

  function View() {
    let myContainer = null;
    let myOverlay = null;
    let windowChoiceEnter = null;
    let windowLoading = null;
    let windowLoadingImage = null;
    let windowLoadingLine = null;

    this.init = function (container) {
      myContainer = container;
      myOverlay = document.querySelector(".overlay")
      //window choice
      windowChoiceEnter = document.querySelector("#window-enters");
      //window loading
      windowLoading = document.querySelector("#window-loading");
      windowLoadingImage = document.querySelector("#window-loading-image");
      windowLoadingLine = document.querySelector("#window-loading-line");
    }

    this.open = function (window) { window.classList.remove("unvisible"); }
    this.close = function (window) { window.classList.add("unvisible"); }
    this.closeOverlay = function () { myOverlay.classList.add("unvisible"); }
    this.openOverlay = function () { myOverlay.classList.remove("unvisible"); }

    this.audioClick = function () { document.querySelector("#song-click").play(); }
    this.audioMusic = function () { document.querySelector("#song-music").play(); }
    this.audioFail = function () { document.querySelector("#song-fail").play(); }
    this.audioUp = function () { document.querySelector("#song-up").play(); }

    this.vibration = function () { navigator.vibrate(500); }

    this.toggleTheme = function () {
      myContainer.classList.toggle("light");
      windowLoading.classList.toggle("light");
      windowLoadingImage.classList.toggle("light__img");
      windowLoadingLine.classList.toggle("light__img");
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
          }
        }, timer);
      }
      if (overlay === true) myView.openOverlay();
    }

    this.close = function (window, overlay, timer) {
      myView.close(window);
      if (overlay === true) myView.closeOverlay();
    }

    this.audio = function (ev) {
      if (ev === "click") myView.audioClick();
      if (ev === "music") myView.audioMusic();
    }

    this.toggleTheme = function () { myView.toggleTheme(); }

  }

  //--------------------------------------CONTROLLER------------------------------------

  function Controller () {
    let myContainer = null;
    let myModel = null;
    let windowWelcome = null;
    let overlay = null;

    this.init = function (model, container) { 
      myModel = model;
      myContainer = container;
      windowWelcome = container.querySelector("#window-welcome");
      overlay = container.querySelector(".overlay");

      windowWelcome.addEventListener("click", () => { 
        this.close(windowWelcome);
        this.open(container.querySelector(".load"), false, 10000, document.querySelector("#window-enters"));
        this.audio("music");
      });
      
      window.addEventListener("click", () => { this.audio("click");
    this.toggleTheme(); });

    }

    this.audio = function (ev) { myModel.audio(ev) };
    this.open = function (window, overlay = false, timer = 0, additionally = "") { myModel.open(window, overlay, timer, additionally); }
    this.close = function (window, overlay = false, timer = 0, additionally = "") { myModel.close(window, overlay, timer, additionally); }

    this.toggleTheme = function () { myModel.toggleTheme(); }
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
  
