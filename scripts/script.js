const FreeToPlay = (function () {

  //-------------------------------------VIEW---------------------------------------

  function View() {
    let myContainer = null;
    let myOverlay = null;

    this.init = function(container) {
      myContainer = container;
      myOverlay = document.querySelector(".overlay")
    }

    this.open = function(window) { window.classList.remove("unvisible"); }
    this.close = function(window) { window.classList.add("unvisible"); }
    this.closeOverlay = function() { myOverlay.classList.add("unvisible"); }
    this.openOverlay = function() { myOverlay.classList.remove("unvisible"); }

    this.audioClick = function() { document.querySelector("#song-click").play(); }
    this.audioMusic = function() { document.querySelector("#song-music").play(); }
    this.audioFail = function() { document.querySelector("#song-fail").play(); }
    this.audioUp = function() { document.querySelector("#song-up").play(); }
  }
  
  //--------------------------------------MODEL----------------------------------------

  function Model() {
    let myView = null;

    this.init = function(view) {
      myView = view;
    };

    this.open = function(window, overlay, timer) {
      myView.open(window);
      if (overlay === true) myView.openOverlay();
      if (timer !== 0) {
        setTimeout(() => {
          myView.close(window);
        }, timer);
      }
    }

    this.close = function(window, overlay, timer) {
      myView.close(window);
      if (overlay === true) myView.closeOverlay();
    }

    this.audio = function(ev) {
      if (ev === "click") myView.audioClick();
    }

  }

  //--------------------------------------CONTROLLER------------------------------------

  function Controller () {
    let myContainer = null;
    let myModel = null;
    let windowWelcome = null;

    this.init = function(model, container) { 
      myModel = model;
      myContainer = container;
      windowWelcome = container.querySelector("#window-welcome");

      windowWelcome.addEventListener("click", () => { 
        this.close(windowWelcome);
        this.open(container.querySelector(".load"), false, 10000);
      });

      
      window.addEventListener("click", () => { this.audio("click"); });
    }

    this.audio = function(ev) { myModel.audio(ev) };
    this.open = function(window, overlay = false, timer = 0) { myModel.open(window, overlay, timer); }
    this.close = function(window, overlay = false, timer = 0) { myModel.close(window, overlay, timer); }
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
