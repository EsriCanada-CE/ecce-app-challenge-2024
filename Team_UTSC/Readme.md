# Mission Statement
Urban sprawl has become a major issue within urban planning in the Greater Toronto and Hamilton Area. With continued growth and development, there is a critical need to direct this growth and development to protect our valuable habitats and conserve our limited natural resources in the greenbelt, as well as ensuring a sustainable, climate-friendly development pattern within the GTHA. The first part of our app aims to characterize the problem of this outward expansion of the urban areas of the GTHA by mapping population data, along with increasing trip and vehicle counts in the area over a time span. We argue that transit infrastructure has not caught up with the growth and expansion of the GTHA, resulting in increased rates of driving which has led to severe issues such as congestion in and around the GTHA. Not only that, but there is also the addition of pollution and emissions from vehicles.

  

Overall, our app seeks to give the user the ability to navigate through a comprehensive transportation survey data, population density data, transportation infrastructure data, and planned infrastructure data. From being able to survey an existing area, it can be possible to determine where there might be a lack of transportation infrastructure based on population density and the percentage changes in car and transit trips.

# Storymap
## Population Growth Layers
### Widgets used
1. Bookmark
2. Legend
### Data sources
#### Census Dissemination Area Boundaries
- Statistics Canada 2006, 2011, 2016 and 2021 Surveys of population
	- 2021: https://www12.statcan.gc.ca/census-recensement/2021/geo/sip-pis/boundary-limites/index2021-eng.cfm?year=21
	- 2016: https://www12.statcan.gc.ca/census-recensement/2011/geo/bound-limit/bound-limit-2016-eng.cfm
	- 2011:https://www12.statcan.gc.ca/census-recensement/2011/geo/bound-limit/bound-limit-2011-eng.cfm
	- 2006: https://www12.statcan.gc.ca/census-recensement/2011/geo/bound-limit/bound-limit-2006-eng.cfm
#### Population Data
- Census Profile, Statistics Canada 2006, 2011, 2016 and 2021 Surveys of population
- https://open.canada.ca/data/en/dataset/750e6035-adf8-4426-966f-4c25b12a999e/resource/623afabe-16a8-45cc-8979-4abc4cf19ab1#additional-info
### Analysis Methodology
For 2006, dissemination areas were queried to only select municipalities that were considered to be part of the Greater Golden Horseshoe. Afterwards, the total population census tracts was joined using the DAUID field. Then, density for each Dissemination Area was calculated by taking total population density divided by shape area (in kilometers). This step was repeated for 2011, 2016, and 2021.

## Growth Plan, Greenbelt Plan, Built Up Areas
### Widgets
1. Map Layer
2. Legend
### Data Sources
- Greenbelt Outer Boundaries
	 https://data.ontario.ca/dataset/greenbelt-outer-boundary/resource/84770791-1281-441b-bdbc-3875a603f32f
-  Built Up Areas
	- https://data.ontario.ca/dataset/built-up-area
- GGH Boundaries
	- Lower Tier Municipal boundaries under an SQL filter to select only regions outlined in Schedule 1 of the *Growth Plan for the Greater Golden Horseshoe* 
	- https://data.ontario.ca/dataset/municipal-boundaries/resource/82ce5025-bb37-43bd-8791-2a5eebed329a
	- Current version of the Growth plan: https://files.ontario.ca/mmah-place-to-grow-office-consolidation-en-2020-08-28.pdf

## Public transit in the Greater Golden Horseshoe
### Widgets
1. Map Layer
2. Legend
### Analysis methodology 
 Transit data is sourced from GTFS feeds of individual transit agencies from Open Data catalogues. These GTFS schedules are then converted from shapes.txt feeds into features using ArcGIS Pro.
### Data sources
- Toronto Transit Commission:n https://open.toronto.ca/dataset/ttc-routes-and-schedules/
- GO Transit: https://assets.metrolinx.com/raw/upload/Documents/Metrolinx/Open%20Data/GO-GTFS.zip
- Union Pearson Express: https://www.gotransit.com/en/information-resources/software-developers
- Mississauga Miway: https://www.miapp.ca/GTFS/google_transit.zip
- Brampton Transit: https://www.arcgis.com/sharing/rest/content/items/a355aabd5a8c490186bdce559c9c75fb/data
- Durham Region Transit: https://opendata.durham.ca/documents/931bc536b42e4b3aa72270dab4133c90/about
- York Region Transit: https://www.yrt.ca/en/about-us/open-data.aspx
- Kitchener-Waterloo GRT: https://www.regionofwaterloo.ca/opendatadownloads/GRT_GTFS.zip
- Oakville Transit: https://portal-exploreoakville.opendata.arcgis.com/datasets/d78a1c1ad6a940009de8b68839a8f606/about
- Burlington Transit: https://opendata.burlington.ca/gtfs-rt/GTFS_Data.zip
- Hamilton Street Railway: https://open.hamilton.ca/documents/6eeccf172c824c2db0484aea54ed7fe4/explore
- Guelph Transit: http://data.open.guelph.ca/dataset/guelph-transit-gtfs-data
- Barrie Transit: https://www.barrie.ca/services-payments/transportation-parking/barrie-transit/barrie-gtfs

### Additional Layers
  - Greenbelt Outer Boundaries
	 https://data.ontario.ca/dataset/greenbelt-outer-boundary/resource/84770791-1281-441b-bdbc-3875a603f32f
-  Built Up Areas
	- https://data.ontario.ca/dataset/built-up-area
- GGH Boundaries
	- Lower Tier Municipal boundaries: https://data.ontario.ca/dataset/municipal-boundaries/resource/82ce5025-bb37-43bd-8791-2a5eebed329a

## Current Road Infrastructure in the GGH
#### Widgets used
1. Map layer
2. Legend
#### Methodology
- The Highway network file was first clipped to fit within the filtered GGH boundary shapefile, then filtered using SQL to only display Highways as categorized by Statistics Canada
- The road network follows a similar methodology, but was filtered to show roads, streets and concessions within the GGH area.
#### Data source
- Roads networks: https://www150.statcan.gc.ca/n1/en/catalogue/92-500-X2023001
- GGH boundary: https://data.ontario.ca/dataset/municipal-boundaries/resource/82ce5025-bb37-43bd-8791-2a5eebed329a

## Cordon Counts
### Cordon Counts: Peel-Toronto inbound
#### Widgets used
1. Map layer 
2. Legend
3. 3 images for Graphs from processed data table
4. Table
#### Data sources
Data is obtained from[open data for the Cordon Count Program](https://dmg.utoronto.ca/download-cordon-count-data/) from the Data Management Group, Department of Civil & Mineral Engineering, University of Toronto. 

Data used in the 3 graphs are the total auto, total transit, total bus passenger, total GO train passenger and total auto persons counts from 2001, 2006, 2011, 2016 for the Westbound morning peak cordon counts along the Peel-Toronto Boundary.
#### Methodology
Data from the westbound morning peak cordon counts from 2001, 2006, 2011 and 2016 are aggregated in an excel spreadsheet, which is then used to create the three graphs in the page. The data is also displayed in the table widget. Additionally, the map widget can be switched between Transit infrastructure and Road infrastructure at the Cordon. 
### Cordon Counts: Durham-Toronto inbound
#### Widgets used
1. Map layer 
2. Legend
3. 3 images for Graphs from processed data table
4. Table
#### Data sources
Data is obtained from [open data for the Cordon Count Program](https://dmg.utoronto.ca/download-cordon-count-data/) from the Data Management Group, Department of Civil & Mineral Engineering, University of Toronto. 

Data used in the 3 graphs are the total auto, total transit, total bus passenger, total GO train passenger and total auto persons counts from 2001, 2006, 2011, 2016 for the Eastbound morning peak cordon counts along the Durham-Toronto Boundary.
#### Methodology
Data from the westbound morning peak cordon counts from 2001, 2006, 2011 and 2016 are aggregated in an excel spreadsheet, which is then used to create the three graphs in the page. The data is also displayed in the table widget. Additionally, the map widget can be switched between Transit infrastructure and Road infrastructure at the Cordon. 
### Cordon Counts: York-Toronto inbound
#### Widgets used
1. Map layer 
2. Legend
3. 3 images for Graphs from processed data table
4. Table
#### Data sources
Data is obtained from [open data for the Cordon Count Program](https://dmg.utoronto.ca/download-cordon-count-data/) from the Data Management Group, Department of Civil & Mineral Engineering, University of Toronto. 

Data used in the 3 graphs are the total auto, total transit, total bus passenger, total GO train passenger and total auto persons counts from 2001, 2006, 2011, 2016 for the Southbound morning peak cordon counts along the York-Toronto Boundary.
#### Methodology
Data from the westbound morning peak cordon counts from 2001, 2006, 2011 and 2016 are aggregated in an excel spreadsheet, which is then used to create the three graphs in the page. The data is also displayed in the table widget. Additionally, the map widget can be switched between Transit infrastructure and Road infrastructure at the Cordon. 

## Transportation Tomorrow Survey (TTS) 
### TTS data, All modes 
#### Widgets used
- Table
- Legend
#### Data Sources
Data is obtained from [open data for the Transportation Tomorrow Survey](https://dmg.utoronto.ca/download-tts-data/) from the Data Management Group, Department of Civil & Mineral Engineering, University of Toronto. Survey data for Toronto, York, Durham, Halton and Hamilton Planning Districts (PDs) from 2011 and 2016 were used, along with the geospatial data for the planning boundaries in the TTS.
#### Methodology
Percentage differences between the total counts of trips originating and ending in each respective PDs in the Morning peak in 2011 and 2016 were calculated, as shown in the table and used to create the map layers.  Additionally, the map widget can be switched between percentage change in trips from PDs and percentage change in trips to PDs. 
### TTS data, Car trips 
#### Widgets used
- Table
- Legend
#### Data Sources
Data is obtained from [open data for the Transportation Tomorrow Survey](https://dmg.utoronto.ca/download-tts-data/) from the Data Management Group, Department of Civil & Mineral Engineering, University of Toronto. Survey data for Toronto, York, Durham, Halton and Hamilton PDs from 2011 and 2016 were used, along with the geospatial data for the planning boundaries in the TTS.
#### Methodology
Percentage differences between the total counts of auto driver and auto passenger trips originating and ending in each respective PDs in the Morning peak in 2011 and 2016 were calculated and used to create the map layers. Additionally, the map widget can be switched between percentage change in car trips from PDs and percentage change in car trips to PDs.  
### TTS data, Transit trips 
#### Widgets used
- Table
- Legend
#### Data Sources
Data is obtained from [open data for the Transportation Tomorrow Survey](https://dmg.utoronto.ca/download-tts-data/), Department of Civil & Mineral Engineering, University of Toronto. Survey data for Toronto, York, Durham, Halton and Hamilton PDs from 2011 and 2016 were used, along with the geospatial data for the planning boundaries in the TTS.
#### Methodology
Percentage differences between the total count of joint GO train and local transit, GO Train only and local transit only trips originating and ending in each respective PDs in the Morning peak in 2011 and 2016 were calculated and used to create the map layers.  Additionally, the map widget can be switched between percentage change in car trips from PDs and percentage change in car trips to PDs.  
## Future Transit Connections
### 2041 RTP Stations and Network 
#### Data sources
- Data from [Metrolinx Open Data](https://assets.metrolinx.com/raw/upload/v1693928524/Documents/Metrolinx/Open%20Data/September%205,%202023%20-%20FRTN/GIS_Data_-_Future_Transit_Network_-_2023-05-12.zip): 
- Proposed Transport Infrastructure from Province of Ontario: https://data.ontario.ca/dataset/ontario-builds-key-infrastructure-projects/resource/35dc5416-2b86-4a79-b3e6-acbfe004c81a
	- The data was filtered to keep only transit projects in the Ministry of Infrastructure central region. These projects were then geocoded using the provided latitude and longitude values in the data. 

## Conclusion
#### Widgets
- Button to full app
# Full App
#### Widgets used
- table
- legend
- button to storymap page


## Image credits
[https://dailyhive.com/vancouver/2016-census-toronto-montreal-and-vancouver-home-to-one-third-of-all-canadians](https://dailyhive.com/vancouver/2016-census-toronto-montreal-and-vancouver-home-to-one-third-of-all-canadians)

[https://www.studyabroadfoundation.org/blogs/why-toronto-most-multicultural-city-world](https://www.studyabroadfoundation.org/blogs/why-toronto-most-multicultural-city-world)

[https://www.alamy.com/population-growth-outline-icon-thin-line-style-from-icons-collection-pixel-perfect-simple-element-population-growth-icon-for-web-design-apps-image261898895.html](https://www.alamy.com/population-growth-outline-icon-thin-line-style-from-icons-collection-pixel-perfect-simple-element-population-growth-icon-for-web-design-apps-image261898895.html)

[https://www.theglobeandmail.com/arts/art-and-architecture/article-changing-lanes-on-the-future-of-the-gardiner-expressway/](https://www.theglobeandmail.com/arts/art-and-architecture/article-changing-lanes-on-the-future-of-the-gardiner-expressway/) 

[https://www.metrolinx.com/en/projects-and-programs/yonge-north-subway-extension](https://www.metrolinx.com/en/projects-and-programs/yonge-north-subway-extension)

[https://commons.wikimedia.org/wiki/File:Toronto_ON_King-Street-West_2019-04-01_(2).jpg](https://commons.wikimedia.org/wiki/File:Toronto_ON_King-Street-West_2019-04-01_(2).jpg) by Milan Suvajac, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons

[https://www.utsc.utoronto.ca/home/ttc-public-transit](https://www.utsc.utoronto.ca/home/ttc-public-transit) 

## Data Attributions
This project contains data from:
- Statistics Canada under  [Statistics Canada Open Licence](https://www.statcan.gc.ca/en/reference/licence)
- Goverment Of Ontario under [Open Government Licence – Ontario](https://www.ontario.ca/page/open-government-licence-ontario)
- City of Toronto under [Open Government License - Toronto](https://open.toronto.ca/open-data-license/)
- Region of Durham under [Region of Durham - Open Data Licence](https://www.durham.ca/en/regional-government/resources/Documents/OpenDataLicenceAgreement.pdf)
- York Region Transit under [York Region Transit Open Data License Agreement](https://www.yrt.ca/en/about-us/open-data-licence-agreement.aspx)
- City of Mississauga under [City of Mississauga ‐ Terms of Use](http://www5.mississauga.ca/research_catalogue/CityofMississauga_TermsofUse.pdf)
- City of Hamilton under [City of Hamilton - Open Data License](https://www.hamilton.ca/city-initiatives/strategies-actions/open-data-licence-terms-and-conditions)
- City of Burlington under [Open Data Burlington- Terms of use](https://opendata.burlington.ca/opendata-terms-of-use/City%20of%20Burlington%20-%20Open%20Data%20Terms%20of%20Use.pdf)
- Region of Waterloo under [Region of Waterloo Open Data Licence](https://www.regionofwaterloo.ca/en/regional-government/open-data.aspx#Open-Data-Licence)
- City of Guelph under [City of Guelph Open Government Licence](http://data.open.guelph.ca/pages/open-government-licence)
- Town of Milton under [Open Government Licence – Milton](https://discover-milton.hub.arcgis.com/pages/disclaimer-and-terms-of-use)
- Town of Oakville under [Open Data licence-Town of Oakville](https://www.oakville.ca/town-hall/town-studies-plans-projects/town-initiatives/open-data/open-data-licence/)
- Metrolinx under [Open Government Licence – Ontario – Metrolinx](https://assets.metrolinx.com/image/upload/v1663237565/Documents/Metrolinx/Open-Government-Licence-Ontario-Metrolinx.pdf)
- Transportation Tomorrow Survey under [Data Management Group Open Data Licence Agreement](https://dmg.utoronto.ca/open-data/)
- Cordon Count Program under [Data Management Group Open Data Licence Agreement](https://dmg.utoronto.ca/open-data/)
