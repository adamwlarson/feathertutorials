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