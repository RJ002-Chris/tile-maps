# Tile Map Design
In this project, we will be using QGIS and Mapbox Studios together to design and produce a tile map. Firstly, we will design it in Mapbox Studios using their tools to create a basemap, we then export it to QGIS using a plugin called QMetaTiles. This plugin will allow us to download our map as tiles while setting the zoom levels to our own preferences. There are 4 maps showcased in this repo:
- A tile set is a base map provided by MapBox customized to my preferences
- A thematic layer with proportional symbols showing the magnitude of earthquakes in Japan from 1/1/2024 to 1/10/2024 (Noto earthquake)
- A tile set composed of the thematic layer and the basemap from the first tile set
- UW themed map layer designed over Mapbox

#### "Vultures" dark-themed base map designed by me
![Vultures](img\map-1.png)

I really love dark themes so I decided to make my twist on the dark version basemap from Mapbox that I used in my previous assignment. I changed the fonts to create a more formal look while adjusting the brightness of the roads so that it can be clearly seen as it contrasts with the dark surroundings. A dark map also makes it easier for users to see the other ohjects and layers that I will be putting on the map.

#### Japan Noto Eathquake (1/1/2024 to 1/10/2024) proportional symbols
![Japan Noto Eathquake](img\map-2.png)

For my thematic layer, I chose the topic of the Japan Noto earthquake that occurred during new years. The data is retreived from the USGS earthquake catalog with a 10 day period of 1/1/2024 to 1/10/2024. I then loaded the data into QGIS where I created the proportional symbols corresponding to the magnitude of the earthquake. I chose the color red for the symbols because it will be easily seen on the dark map.

#### Japan Noto Eathquake proportional symbols overlayed on dark-themed base map
![Dark Earth](img\map-1.png)

This is an interactive choropleth web map that allows users to see more information when hovering above certain areas. The different colors represent different Covid-19 rates as shown in the legend.

#### UW themed map
![Japan Noto Eathquake](img\map-2.png)

This is an interactive proportional symbols map that allows users to see more information when clicking on certain points. The different colors and size of the points represent different Covid-19 counts as shown in the legend.

#### Acknowledgments
These inforgraphics were achieved using latest version of mapbox-gl-js.css and mapbox-gl-js.js javascript library and were implemented in HTML and CSS.