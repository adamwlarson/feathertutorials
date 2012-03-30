

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
      
      //Load the inital content here, which is "What Is Feather"
      //Then listen for events from the tutorialNav widget for examples
      //and tutorials that need be displayed
      

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
        //Tutorial Click Events
        me.domEvents.bind( me.get("#tut1"), "click", function(e){
          me.fire("tutorial", 0 );
        });

        me.domEvents.bind( me.get("#tut2"), "click", function(e){
          me.fire("tutorial", 1 );
        });

        me.domEvents.bind( me.get("#tut3"), "click", function(e){
          me.fire("tutorial", 2 );
        });

        me.domEvents.bind( me.get("#tut4"), "click", function(e){
          me.fire("tutorial", 3 );
        });

        me.domEvents.bind( me.get("#tut5"), "click", function(e){
          me.fire("tutorial", 4 );
        });

        me.domEvents.bind( me.get("#tut6"), "click", function(e){
          me.fire("tutorial", 5 );
        });

        me.domEvents.bind( me.get("#tut7"), "click", function(e){
          me.fire("tutorial", 6 );
        });
        
        //Examples Click Events
        me.domEvents.bind( me.get("#exm1"), "click", function(e){
          me.fire("example", 0 );
        });

        me.domEvents.bind( me.get("#exm2"), "click", function(e){
          me.fire("example", 1 );
        });

        me.domEvents.bind( me.get("#exm3"), "click", function(e){
          me.fire("example", 2 );
        });
      }
    }
  });
})();

/* ========== content.client.js ========== */

feather.ns("feathertutorials");
(function() {
  feathertutorials.content = feather.Widget.create({
    name: "feathertutorials.content",
    path: "widgets/content/",
    prototype: {
      onInit: function() {
        
      },
      onReady: function() {
        
      }
    }
  });
})();

/* ========== tutorial1.client.js ========== */

feather.ns("feathertutorials");
(function() {
  feathertutorials.tutorial1 = feather.Widget.create({
    name: "feathertutorials.tutorial1",
    path: "widgets/tutorial1/",
    prototype: {
      onInit: function() {
        
      },
      onReady: function() {
        
      }
    }
  });
})();