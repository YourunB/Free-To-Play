const FreeToPlay = (function () {

  //-------------------------------------VIEW---------------------------------------

  function View() {
    let myContainer = null;
    let myOverlay = null;

    this.init = function(container) {
      myContainer = container;
      myOverlay = document.querySelector(".overlay")
    }

    this.open = function() {
    }

    this.close = function() {
    }

  }
  
  //--------------------------------------MODEL----------------------------------------

  function Model() {
    let myView = null;

    this.init = function(view) {
      myView = view;
    };

    this.open = function() {
    }

    this.close = function() {
    }

  }

  //--------------------------------------CONTROLLER------------------------------------

  function Controller () {
    let myContainer = null;
    let myModel = null;

    this.init = function(model, container) { 
      myModel = model;
      myContainer = container;

      const windowWelcome = document.querySelector("#window-welcome");
      windowWelcome.addEventListener("click", () => { this.close(); });
    }

    this.open = function() { 
    }

    this.close = function() {
      alert("close")
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

    main: function() { //предварительное действие
    },
  }

})();

FreeToPlay.start(document.body);