require(["esri/WebScene","esri/views/SceneView","esri/Camera","esri/widgets/Home","dojo/domReady!"], function(WebScene, SceneView, Camera, Home) 

{var scene = new WebScene({portalItem:{id:"8046207c1c214b5587230f5e5f8efc77" }
  });
var camera = new Camera({position: [-71.060217, 42.382655,2500],tilt:0,heading: 0})
var camera2 = new Camera({position: [-71.07, 42.37, 1000 ], tilt: 0, heading: 0
  });
var view = new SceneView({container: "viewDiv",map: scene,viewingMode:"global",camera: camera,environment: {lighting: {date: new Date(),directShadowsEnabled: true,cameraTrackingEnabled: false
            }
        },
  });
var homeBtn = new Home({view: view
  });
var view = new SceneView({container: "viewDiv",map: scene,viewingMode: "global",camera: camera
  });
view.ui.add(homeBtn, "bottom-left");
      
      
[boston, MA].forEach(function(button) {button.style.display = 'flex';view.ui.add(button, 'top-right');
  });
MA.addEventListener('click', function() {view.goTo({target:camera2});
  });
    
boston.addEventListener('click', function() {view.goTo({target:camera});
  });
v3.addEventListener('click', function() {view.goTo({position: {x: -71.0572, y: 42.3557, z: 1000}, tilt: 0, heading: 0});
  });
[boston, MA, v3].forEach(function(button) { button.style.display = 'flex'; view.ui.add(button, 'top-right'); });
  });
