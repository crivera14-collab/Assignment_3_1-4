require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/Camera",
  "esri/widgets/Home",
  "dojo/domReady!"
], function(WebScene, SceneView, Camera, Home) {

  var scene = new WebScene({
    portalItem: {
      id: "8046207c1c214b5587230f5e5f8efc77"
    }
  });

  var camera = new Camera({
    position: {
      x: -71.060217, // longitude
      y: 42.382655, // latitude
      z: 2500 // elevation m
    },
    tilt: 0,
    heading: 0
  });

  var camera2 = new Camera({
    position: {
      x: -71.0589, // longitude
      y: 42.3601, // latitude
      z: 4000000 // elevation m
    },
    tilt: 0,
    heading: 0
  });

  var camera3 = new Camera({
    position: {
      x: -71.0589, // longitude
      y: 42.3601, // latitude
      z: 10000 // elevation m
    },
    tilt: 0,
    heading: 180
  });

  var view = new SceneView({
    container: "viewDiv",
    map: scene,
    camera: camera
  });

  var bostonBtn = document.createElement('button');
  bostonBtn.textContent = 'Boston';
  bostonBtn.classList.add('esri-widget-button', 'esri-icon-map-pin');

  var atlanticBtn = document.createElement('button');
  atlanticBtn.textContent = 'Atlantic Ocean';
  atlanticBtn.classList.add('esri-widget-button', 'esri-icon-globe');

  var downtownBtn = document.createElement('button');
  downtownBtn.textContent = 'Downtown';
  downtownBtn.classList.add('esri-widget-button', 'off');

  bostonBtn.addEventListener('click', function() {
    view.goTo({
      target: {
        latitude: 42.3601, // Boston's latitude
        longitude: -71.0589 // Boston's longitude
      },
      zoom: 10
    });
  });

  atlanticBtn.addEventListener('click', function() {
    view.goTo({
      target: {
        latitude: 30, // Latitude of the Atlantic Ocean
        longitude: -60 // Longitude of the Atlantic Ocean
      },
      zoom: 3
    });
  });

  downtownBtn.addEventListener('click', function() {
    view.goTo({
      camera: camera3
    });
  });

  view.ui.add(bostonBtn, 'top-right');
  view.ui.add(atlanticBtn, 'top-right');
  view.ui.add(downtownBtn, 'top-right');

  // Add Home button to the UI
  var homeBtn = new Home({
    view: view
  });
  view.ui.add(homeBtn, 'top-left');

  // Event listener for the v3 button
  v3.addEventListener('click', function() {
    view.goTo({
      position: {
        x: -71.0669, // Longitude of Boston Common
        y: 42.3554,   // Latitude of Boston Common
        z: 100,       // Elevation m
      },
      tilt: 60, // Tilt Heading Angle
      heading: 45 // Heading Angle
    });
  });
});