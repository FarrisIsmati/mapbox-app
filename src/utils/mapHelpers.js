//DEPENDENCIES
import { store }  from "../index"

//REDUX
import {
          changeMarkerCoords
        }                             from '../redux/actions/gameActions'

export function draggableMarker(state) {
  let isDragging, isCursorOverPoint
  let canvas = state.map.getCanvasContainer()
  console.log(store)
  let geojson = {
      "type": "FeatureCollection",
      "features": [{
          "type": "Feature",
          "geometry": {
              "type": "Point",
              "coordinates": store.getState().game.mapMarkerCoords
          }
      }]
  }

  state.map.addSource('point', {
      "type": "geojson",
      "data": geojson
  })

  state.map.addLayer({
      "id": "point",
      "type": "circle",
      "source": "point",
      "paint": {
          "circle-radius": 20,
          "circle-color": "#3887be"
      }
  })

  // When the cursor enters a feature in the point layer, prepare for dragging.
  state.map.on('mouseenter', 'point', function() {
    canvas.style.cursor = 'move';
    isCursorOverPoint = true;
    state.map.dragPan.disable();
  });

  state.map.on('mouseleave', 'point', function() {
      canvas.style.cursor = '';
      isCursorOverPoint = false;
      state.map.dragPan.enable();
  });

  state.map.on('mousedown', mouseDown.bind(this));

  function mouseDown() {
      if (!isCursorOverPoint) return;

      isDragging = true;

      // Set a cursor indicator
      canvas.style.cursor = 'grab';
      // Mouse events
      state.map.on('mousemove', onMove.bind(this));
      state.map.once('mouseup', onUp);
  }

  function onMove(e) {
      if (!isDragging) return;
      let coords = e.lngLat;

      // Set a UI indicator for dragging.
      canvas.style.cursor = 'grabbing';

      // Update the Point feature in `geojson` coordinates
      // and call setData to the source layer `point` on it.
      store.dispatch(changeMarkerCoords([coords.lng, coords.lat]))
      geojson.features[0].geometry.coordinates = store.getState().game.mapMarkerCoords;
      state.map.getSource('point').setData(geojson);
  }

  function onUp(e) {
      if (!isDragging) return;
      let coords = e.lngLat;

      canvas.style.cursor = '';
      isDragging = false;

      // Unbind mouse events
      state.map.off('mousemove', onMove);
  }
}
