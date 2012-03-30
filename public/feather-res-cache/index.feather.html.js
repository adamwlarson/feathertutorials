

/* ========== app.client.js ========== */

feather.ns("feathertutorials");
(function() {
  feathertutorials.app = feather.Widget.create({
    name: "feathertutorials.app",
    path: "widgets/app/",
    prototype: {
      onInit: function() {
        
      },
      onReady: function() {
        var me = this;
        me.get( ".topBar" ).effect("bounce", { times: 3 }, 300);
        me.domEvents
        //me.get( ".topBar" ).hide( "drop", { direction: "down", mode: "show"}, 1000);
      }
    }
  });
})();

/* ========== tutorialNav.client.js ========== */

feather.ns("feathertutorials");
(function() {
  feathertutorials.tutorialNav = feather.Widget.create({
    name: "feathertutorials.tutorialNav",
    path: "widgets/tutorialNav/",
    prototype: {
      onInit: function() {
        
      },
      onReady: function() {
        var me = this;
        //Bind click events
        me.domEvents.bind( me.get("#tut1"), "click", function(e){
          alert( "Hello" );
        });
      }
    }
  });
})();