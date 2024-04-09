# Raccoon Tycoons - App Challenge Code Repository

Project Name: Urbantario

Urbantario Website Link: https://www.vinn03.dev/urbantario

Urbantario Experience App: https://experience.arcgis.com/experience/10a4405ff6a94cc8b87dffc3c01c0d45/

How to navigate the web page:
- The header at the top contains navigational elements.
  - "Home" takes you back to the top of the page.
  - "Teams" takes you to the bottom of the page, where the contributors are listed.
  - "Experience" takes you to the ArcGIS Experience App associated with the project, and opens a new window when clicked on.
  
- To interact with the embedded maps:
  - Click on the +/- buttons to zoom in/out of the map.
  - Click ont he home button to zoom back to the default extent of the map.
  - To view/hide the legend, click on the "toggle" button above the zoom buttons, denoted by two parallel arrows.
  - To view/hide certain map layers, check/uncheck the checkboxes associated with each layer in the legend.
 
How to use the ArcGIS Experience app:
- Upon opening the Experience Builder, users encounter a splash screen with a brief introduction explaining the app's purpose and directing them to click the info icon on the main page for further details. The splash screen can be closed by pressing OK in the bottom right corner.
- After closing the splash screen, users are presented with the main map displaying census metropolitan areas (urban settlements) from 1971 and 2020. Various icons such as 'Map Layers', 'Legend', 'Search', and 'Home' are available on the map.
- The 'Map Layers' button allows users to toggle urban area layers and Greenbelt-related layers such as regions, towns, parks, crops, and riverways. These layers are not initially visible but can be activated using this widget.
- The 'Legend' button displays the current layers on the map. Users can search for addresses using the 'Search' button (magnifying glass), located alongside the other buttons in the top left corner.
- Zoom keys and a 'Home' button for returning to the original map scale are located in the bottom right corner of the map.
- The left side of the screen features an info icon and an arrow to open a sidebar containing instructions on app usage and a summary of urbanization.
- In the top right corner of the screen, there is an embedded link to the app's website.

Goals of the app:
- To give users an understanding of urbanization at a basic level.
- To provide visual insight towards the spread of urbanization in Canada, using the Greater Toronto Area as an example.
- To describe how urbanization can be harmful, especially to the environment.
- To provide visual insight towards the threat of urbanization towards protected nature areas within the Greater Toronto Area.
- To give insight towards potential solutions to the negative effects of urbanization.
- Users can learn about Ontario’s Greenbelt and which currently protected areas are susceptible to future development.
- Data for the greenbelt include the regional categories, towns and villages, hamlets (undeveloped settlements), riverways, specialty crops, and parks (provincial and municipal). 
- Data showing urban growth from 1971 to 2020 that are categorized as established areas (population of at least 500 residents).
- Users can overlap the data layers to see the extent of the urban areas and possible encroachment onto the Greenbelt.


How to run this web page locally on your machine (instead of visiting the website link above):
- Download the contents of this directory as a .zip file.
- Install Node.js: https://nodejs.org/en/learn/getting-started/how-to-install-nodejs
- After you extract the contents into a folder, navgiate to the ecce-app folder and open a new terminal instance at said folder.
  - Execute the following command: "npm install", once the terminal is open.
- After the dependencies are installed, execute the following command: "npm run dev", to run to instance of the web page locally.
- By default, the web page is accessible through the following URL: localhost:4173, in your browser.
  
References:

https://pixabay.com/photos/city-transit-streetcar-toronto-4490237/ - Toronto Streetcar Image

https://www.britannica.com/topic/urbanization - Urbanization Definition

https://www.fs.usda.gov/research/treesearch/60941 - Urbanization Effects

https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4796288/ - Urbanization Effects

https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2936977/ - Urbanization and Smart Growth
