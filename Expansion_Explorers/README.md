# Community Garden Site Finder README
A web-based tool to help locate sites for potential community gardens.

## The Authors
This app was created  for the **ESRI ECCE App Challenge 2024** by the **Expansion Explorers**, otherwise known as Amy Hazlett, Sarah Andrews, and Ashlyn Durrant from the Centre of Geographic Sciences (COGS), Nova Scotia Community College (NSCC).

## The App
The app is an ArcGIS Experience Builder site. It can be accessed at [Community Garden Site Finder](https://experience.arcgis.com/experience/47d5edce13104e3b996faa00fe1ca804). Check out a video about the app [Community Garden Site Finder Video](https://nscc-my.sharepoint.com/:v:/r/personal/w0496021_campus_nscc_ca/Documents/ESRI_AppChallenge2024_ExpansionExplorers/ESRI_AppChallenge2024_ExpansionExplorers_Deliverables/ExpansionExplorers2024.mp4?csf=1&web=1&e=OxWI8f).


## Mission Statement
As cities expand and prices increase, people are looking for ways to cut down on costs while still contributing to their local communities and thus urban agriculture is becoming more popular. Providing spaces and opportunities for citizens to practice urban gardening regardless of their living situation helps to makes cities more livable and community-oriented. 

Our app, Community Garden Site Finder, aims to help citizens search for suitable locations for potential new community gardens around the Edmonton, Alberta area. The app also provides information and some references that can be used to help get a garden started.

## Introduction
The app, Community Garden Site Finder, can be used to find sites that could potentially be used to start a community garden. The app works by letting the user filter through several different layers to find a location that would be suitable for their use; some of the layers include bus stops, zoning information, and neighborhood information.

The app has several maps that are attached to different widgets and tools to help the user access information on different areas of Edmonton so that they can make a more informed decision.

The app also includes an embedded app from the City of Edmonton which showcases all of the current community gardens, as of 2022, in case the user is interested in gardening but not looking to set up their own.

We also included a section with some links to further information and sites which might help with the more practical needs in setting up a new garden. 

## Characteristics of the App
### Map Explorer View 
Aside from finding a group of interested people and determining a budget, finding a location is one of the most important steps in beginning a community garden. Deciding on a location can be influenced by many factors including surrounding transportation options,  zoning regulations, and accessibility to for all community members.  

The **Map Explorer View** displays a map of Edmonton, AB containing parks that may make appropriate sites for community gardens. Also included in the Map Explorer View is information on zoning and a series of point features including nearby Senior Centres and Eco Centres. Zooming in on an area of interest, the Potential Site list updates to the current extent. Additional map layers also become visible.

The user then selects a Potential Site of interest from the list. From this, a 0.5km (or user-defined) buffer is created around the potential site. The user can then view features found within this buffer that may influence their decision on choosing this site location, such as nearby bus stops. In this view, users can toggle off and on layers to discover more about the area surrounding their potential sites.

### Site Details View
In the **Site Details View**, the user is introduced to more details about the potential site that they have chosen. They can view the park type, as well as the address. This view also gives the user greater detail of the applicable zoning in their area of interest, and directs them to where they can find additional details. The user can also find directions to the location using the Direction Tool.

### Reports Page
On the **Reports** page, users can find more details about the different layers around their potential area. They also have the option to print off a report with useful information.

### Current Community Gardens Page
The **Current Community Gardens** page contains an embedded map that is made available on the City of Edmonton Website. This map contains current community gardens in the city and provides useful details about them. The user can use this page if they are interested in potentially joining an existing garden. Groups or individuals starting out their own project would also benefit from being able to contact and gain wisdom from groups already running similar projects.

### Creating Urban Gardens Page
The **Creating Urban Gardens** page provides useful information for getting started on an urban gardening project. This page lists important first steps for starting an urban garden. It also points users towards helpful links and guides.

### Tool Tutorials/ Tooltips
By clicking on the **"?"** buttons throughout the application, users can find mini-tutorials to help them learn about how to use the app and its tools. These features are particularly helpful for users who are newer to using GIS applications.

## Widgets Used in the App
The app makes use of the following widgets available in ArcGIS Experience Builder.
* Basemap Gallery
* Button
* Card
* Directions
* Embed
* Image
* Legend
* List
* Map
* Map Layers
* Near Me
* Print
* Table
* Text 

## Open Data Sources
All data in the app is from open source data sets.
| Type | Dataset | Link to data source |
|-----:|---------------|--|
|Layer|Bike Routes| [Bike Routes: Edmonton Open Data Portal](https://data.edmonton.ca/Transportation-Infrastructure/Bike-Routes/vd4b-a4iv/about_data)|
|Layer|Bus Stops|[Bus Stops: Edmonton Open Data Portal](https://data.edmonton.ca/Transit/ETS-Bus-Schedule-GTFS-Data-Feed-Stops/4vt2-8zrq/about_data)|
|Layer|Compost|[Waste/Recycling Depot List: Edmonton Open Data Portal](https://data.edmonton.ca/Environmental-Services/Waste-Recycling-Depot-List/27pm-x74q/about_data)|
|Layer|LRT Lines|[LRT Routes: Edmonton Open Data Portal](https://data.edmonton.ca/dataset/LRT-Routes/rpjw-4jft/about_data)|
|Layer|Neighbourhoods|[City of Edmonton - Neighbourhoods: Edmonton - Open Data Portal](https://data.edmonton.ca/City-Administration/City-of-Edmonton-Neighbourhoods/65fr-66s6/about_data)<br/>[2021 Federal Census: Households and Families: Edmonton - Open Data Portal](https://data.edmonton.ca/Census/2021-Federal-Census-Households-and-Families/xgkv-ii9t/about_data)<br/>[Community League Halls: Edmonton - Open Data Portal](https://data.edmonton.ca/Community-Centres/Community-League-Halls/kaps-rk7z/about_data) |
|Layer|Potential Sites|[Parks: Edmonton - Open Data Portal](https://data.edmonton.ca/Outdoor-Recreation/Parks/gdd9-eqv9/about_data)<br/>[City Golf Courses: Edmonton - Open Data Portal](https://data.edmonton.ca/Outdoor-Recreation/City-Golf-Courses/2mxf-2xyw/about_data)|
|Layer|Senior Centres|[Senior Centres: Edmonton - Open Data Portal](https://data.edmonton.ca/Community-Centres/Seniors-Centres/zmac-3mxq/about_data)|
|Layer|Vacant Land w Zoning|[Vacant Land Inventory: Edmonton - Open Data Portal](https://data.edmonton.ca/Urban-Planning-Economy/Vacant-Land-Inventory/svsw-2ub7/about_data)|
|Layer|Waste and Recycling|[Waste/Recycling Depot List: Edmonton - Open Data Portal](https://data.edmonton.ca/Environmental-Services/Waste-Recycling-Depot-List/27pm-x74q/about_data)|
|Layer|Zoning|[Zoning Bylaw Geographical Data: Edmonton - Open Data Portal](https://data.edmonton.ca/Thematic-Features/Zoning-Bylaw-Geographical-Data/fixa-tstc/about_data)|
|Data Layer|Zoning Categories|[Land Use Zones: City of Edmonton Publication](https://www.edmonton.ca/sites/default/files/public-files/assets/PDF/CoE_SummaryofLandUseZones_WEB.pdf)|
|Layer|Zoning Overlays|[Zoning Overlays: Edmonton - Open Data Portal](https://data.edmonton.ca/Administrative/Zoning-Overlays/6w3s-58pv/about_data)|


## Image References

afif fudin. (n.d.). Miscellaneous icons. Flaticon. Retrieved from [Flaticon](https://www.flaticon.com/free-icon/dialogue_12099726?term=tooltip&page=5&position=63&origin=search&related_id=12099726)
 
Alchapar, D. P. (n.d.). a number of potted plants near one another. unsplash. Retrieved from [unsplash](https://unsplash.com/photos/a-number-of-potted-plants-near-one-another-ayp1nddWHPk)
 
Freepik. (n.d.). Agriculture icons. Flaticon. Retrieved from [Flaticon](https://www.flaticon.com/free-icon/planting_3227831?term=plant&page=1&position=84&origin=tag&related_id=3227831)
 
Freepik. (n.d.). Agriculture icons. Flaticon. Retrieved from [Flaticon](https://www.flaticon.com/free-icon/plant_708503?term=plant&page=1&position=35&origin=tag&related_id=708503)
 
Holifield, D. (n.d.). orange and green plant in tilt shift lens. unsplash. Retrieved from [unsplash](https://unsplash.com/photos/orange-and-green-plant-in-tilt-shift-lens-y806NLNDVtY)
 
Schaeffer , Z. (n.d.). yellow and red tomatoes on green plastic crate. unsplash. Retrieved from [unsplash](https://unsplash.com/photos/yellow-and-red-tomatoes-on-green-plastic-crate-hmoDcZnB7uw)
 
Spender, H. (n.d.). green fruits with green leaves macro photography. unsplash. Retrieved from [unsplash](https://unsplash.com/photos/green-fruits-with-green-leaves-macro-photography-rMG-Ljb1cQ4)
 
Spiske, M. (n.d.). carrots and onions in brown wicker basket. unsplash. Retrieved from [unsplash](https://unsplash.com/photos/carrots-and-onions-in-brown-wicker-basket-ZKNsVqbRSPE)
 
Spiske, M. (n.d.-b). Homegrown Basil Herb. unsplash. Retrieved from [unsplash](https://unsplash.com/photos/green-plant-on-brown-pot-S6ieGQAD5pU)


## Music References
Point Being - Go By Ocean /Ryan Mccaffrey from Youtube Audio Library  (No Copyright Free Music from youtube audio library) [Point Being - Go By Ocean - Ryan McCaffrey](https://www.youtube.com/watch?v=g9ncucTGfwM)


## Video References

August Domingo. (2022). Woman cycling on bridge in Edmonton. Retrieved from: [Woman Cycling on Bridge in Edmonton Free Stock Video Footage, Royalty-Free 4K & HD Video Clip (pexels.com)](https://www.pexels.com/video/woman-cycling-on-bridge-in-edmonton-11312723/) 

Braeson Holland. (2022) Apartment buildings in Edmonton. Retrieved from: [Apartment Buildings in Edmonton Free Stock Video Footage, Royalty-Free 4K & HD Video Clip (pexels.com)](https://www.pexels.com/video/apartment-buildings-in-edmonton-12097525/)

Braeson Holland. (2022). Drone footage of a highway and a rail yard in Toronto city. Retrieved from: [Drone  Footage of a Highway and a Rail Yard in Toronto City Free Stock Video  Footage, Royalty-Free 4K & HD Video Clip (pexels.com)](https://www.pexels.com/video/drone-footage-of-a-highway-and-a-rail-yard-in-toronto-city-13580743/)

Coverr-Free-Footage. (2016). Plant watering grow gardening. Retrieved from: [Plant, Watering, Grow. Free Stock Video (Pixabay)](https://pixabay.com/videos/plant-watering-grow-gardening-ewer-5635/)

Dan Critian Paduret. (2019). The changing color of the tree leaves during autum season. Retrieved from: [The  Changing Color Of The Tree Leaves During Autumn Season Free Stock Video  Footage, Royalty-Free 4K & HD Video Clip (pexels.com)](https://www.pexels.com/video/the-changing-color-of-the-tree-leaves-during-autumn-season-3145794/)

Fauxels. (2019). A group of people raise their hands in unison for a high five. Retrieved from: [A  Group Of People Raise Their Hands In Unison For A High Fives Free Stock  Video Footage, Royalty-Free 4K & HD Video Clip (pexels.com)](https://www.pexels.com/video/a-group-of-people-raise-their-hands-in-unison-for-a-high-fives-3248217/)

Free Videos. (2017). Blurry footage of people walking. Retrieved from: [Blurry Footage Of People Walking Free Stock Video Footage, Royalty-Free 4K & HD Video Clip (pexels.com)](https://www.pexels.com/video/blurry-footage-of-people-walking-853884/)

George Morina. (2020). People jogs and riding bikes in the city park. Retrieved from: [People Jogs and Riding Bikes in the City Park Free Stock Video Footage, Royalty-Free 4K & HD Video Clip (pexels.com)](https://www.pexels.com/video/people-jogs-and-riding-bikes-in-the-city-park-4077806/)

George Morina. (2020). People enjoying the day in the park. Retrived from: [People Enjoying The Day In The Park Free Stock Video Footage, Royalty-Free 4K & HD Video Clip (pexels.com)](https://www.pexels.com/video/people-enjoying-the-day-in-the-park-5201658/)

George Morina. (2020). Wild ducks paddling in the park water pond. Retrieved from: [Wild Ducks Paddling In The Park Water Pond Free Stock Video Footage, Royalty-Free 4K & HD Video Clip (pexels.com)](https://www.pexels.com/video/wild-ducks-paddling-in-the-park-water-pond-5201749/)

German Korb. (2020). Road system  in Montreal Canada for traffic management of motor vehicles. Retrieved from: [Road Systems In Montreal Canada For Traffic Management Of Motor Vehicles  Free Stock Video Footage, Royalty-Free 4K & HD Video Clip (pexels.com)](https://www.pexels.com/video/road-systems-in-montreal-canada-for-traffic-management-of-motor-vehicles-3727445/)

Kampus Production. (2021). Elderly people harvesting the lettuce. Retrieved from: [Elderly People Harvesting the Lettuce Free Stock Video Footage, Royalty-Free 4K & HD Video Clip (pexels.com)](https://www.pexels.com/video/elderly-people-harvesting-the-lettuce-7655282/)


## References
Current Community Garden map:
Community gardens. City of Edmonton. (n.d.). [City of Edmonton](https://www.edmonton.ca/residential_neighbourhoods/gardens_lawns_trees/community-gardens )
