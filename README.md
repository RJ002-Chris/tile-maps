# Tile Map Design
In this project, we will be using QGIS and Mapbox Studios together to design and produce a tile map. Firstly, we will design it in Mapbox Studios using their tools to create a basemap, we then export it to QGIS using a plugin called QMetaTiles. This plugin will allow us to download our map as tiles while setting the zoom levels to our own preferences. There are 4 maps showcased in this repo:
- A tile set is a base map provided by MapBox customized to my preferences
- A thematic layer with proportional symbols showing the magnitude of earthquakes in Japan from 1/1/2024 to 1/10/2024 (Noto earthquake)
- A tile set composed of the thematic layer and the basemap from the first tile set
- UW themed map layer designed over Mapbox

#### "Vultures" dark-themed base map designed by me
![Vultures](img\dark.png)

I really love dark themes so I decided to make my twist on the dark version basemap from Mapbox that I used in my previous assignment. I changed the fonts to create a more formal look while adjusting the brightness of the roads so that it can be clearly seen as it contrasts with the dark surroundings. A dark map also makes it easier for users to see the other ohjects and layers that I will be putting on the map. This map is centered on the Noto Peninsula in Ishikawa Prefecture, Japan. This map contains zoom levels from 3 to 11.

#### Japan Noto Eathquake (1/1/2024 to 1/10/2024) proportional symbols
![Japan Noto Eathquake](img\notosymbol.png)

For my thematic layer, I chose the topic of the Japan Noto earthquake that occurred during new years. The data is retreived from the USGS earthquake catalog with a 10 day period of 1/1/2024 to 1/10/2024. I then loaded the data into QGIS where I created the proportional symbols corresponding to the magnitude of the earthquake. I chose the color red for the symbols because it will be easily seen on the dark map. This map is centered on the Noto Peninsula in Ishikawa Prefecture, Japan, but the basemap isn't included. This map contains zoom levels from 3 to 14.

#### Japan Noto Eathquake proportional symbols overlayed on dark-themed base map
![Dark Earth](img\darkearth.png)

This map contains both the dark-themed base map and the proportional symbols from the Japan Noto earthquake map. Here, when overlayed with each other, users can clearly see all different magnitudes of earthquakes that occurred during the 10 day period of time, with the largest one being a 7.6 earthquake that struck the Noto Peninsula in Ishikawa Prefecture, Japan. This map contains zoom levels from 3 to 14.

#### UW themed map
![Japan Noto Eathquake](img\uw.png)

This map was created using the main colors of UW, purple and gold. Since we want to keep the properties of the map, I made sure to adjust the colors so that the map and its elements are still easily identifiable and readble while keeping its UW colors. This map is centered on Seattle where the University of Washington can be observed. This map contains zoom levels from 3 to 14.

#### Acknowledgments
These inforgraphics were made using Mapbox Studio and QGIS and were implemented in HTML and JS.