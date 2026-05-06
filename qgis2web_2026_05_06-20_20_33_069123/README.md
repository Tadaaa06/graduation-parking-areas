# Graduation Parking Areas Map

An interactive web map displaying parking areas for graduation events, built with QGIS2Web and OpenLayers.

## Features

- **Interactive Map**: Pan, zoom, and explore parking areas
- **Layer Controls**: Toggle different map layers (Buildings, Parking Areas, Roads, Land Use)
- **North Arrow**: Orientation indicator that rotates with map rotation
- **Scale Bar**: Distance reference at the bottom-right corner
- **Responsive Design**: Works on desktop and mobile devices

## Project Contents

- `index.html` - Main map interface
- `layers/` - GeoJSON layer files
  - `building_1.js` - Building footprints
  - `ParkingAreas_2.js` - Parking areas layer
  - `roads_3.js` - Roads network
  - `landuse_4.js` - Land use areas
- `styles/` - Layer styling definitions
- `resources/` - JavaScript and CSS libraries (OpenLayers, Leaflet Switcher, etc.)

## Map Components

- **Title**: GRADUATION PARKING AREAS (top-left)
- **Legend**: Layer switcher (bottom-left)
- **North Arrow**: Navigation indicator (top-right, below title)
- **Scale Bar**: Distance measurement (bottom-right)
- **Zoom Controls**: Plus/minus buttons (top-right)

## How to Use

1. Open `index.html` in a web browser
2. Use the mouse to pan the map (click and drag)
3. Use the zoom buttons or scroll wheel to zoom in/out
4. Click the "Layers" button to toggle visibility of different layers
5. The north arrow shows map orientation
6. The scale bar displays distance reference

## Technologies Used

- [OpenLayers](https://openlayers.org/) - Web mapping library
- [QGIS2Web](https://github.com/qgis2web/qgis2web) - QGIS to web export plugin
- HTML5 / CSS3 / JavaScript

## Deployment

Simply deploy all files to any web server. No backend or database required.

## License

Created with QGIS2Web. See individual component licenses for details.

## Contact

For questions or issues, please create an issue in the repository.
