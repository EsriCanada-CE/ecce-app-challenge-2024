# ECCE APP CHALLENGE 2024 (Team Code Monkeys)
This repository contains the source code for the ESRI ECCE App Challenge 2024 for Team Code Monkeys from the University of Waterloo.

## Team Mission Statement

With Vancouver, BC being touted as one of the most unaffordable cities in the world, it presents the question: What made Vancouver so unaffordable?

This wasn’t always the case, with Vancouver housing prices even taking a [dip in 1982.](https://www.cbc.ca/archives/when-vancouver-real-estate-prices-were-falling-in-1982-1.5680987) However, with Vancouver’s population growing by almost 60% between 1981 and 2021, the mismatch between supply and demand has caused Vancouver’s housing market to skyrocket. One particular culprit for Vancouver’s unaffordability is its zoning policies – especially those that favor single family homes.

As a result, on [October 17, 2023](https://www.shapeyourcity.ca/multiplexes/news_feed/nov-2023-r1-1-documents-and-application-materials-available-2), the City of Vancouver implemented a new [Residential Inclusive Zone (R1-1)](https://bylaws.vancouver.ca/zoning/zoning-by-law-district-schedule-r1-1.pdf), which [rezoned 9 residential zones (RS zones)](https://council.vancouver.ca/20230725/documents/rr2.pdf) originally intended for single family dwellings into the new zoning designation R1-1. The R1-1 zone allows multiplex units up to a maximum of 6 dwelling units and 8 rental dwelling units, depending on the size of the site. With this change, areas previously restricted to single family homes are now eligible to be redeveloped into ‘missing middle’ housing. 

The [missing middle](https://www.youtube.com/watch?v=sJFn20hzccI) refers to the lack of medium-density housing in neighbourhoods, particularly in North American cities. In these cities, residential areas are either strictly single-family homes, or high-density condominiums and apartments. However, with the introduction of the new R1-1 zone, permits for medium-density housing such as multiplexes and townhouses can now be granted in areas previously restricted to single family dwellings, increasing the supply of housing. This is a massive change, considering that around half of Vancouver’s land area was previously set aside for single-family homes.

With MetroBooming, users are able to visualize Vancouver’s urban expansion from the past and have a glimpse into Vancouver’s future by assessing the potential of R1-1. By focusing on specific census tracts, our app enables users to see how neighborhoods developed differently over time. By combining a 3D visualization of Vancouver’s development with population and dwelling census characteristics, users can gain a better understanding of the root cause of Vancouver’s unaffordability. Moreover, users can simulate the benefits of the new R1-1 zoning by exploring a range of scenarios within the app. This innovative tool allows users to visualize and compare potential outcomes, from the best-case scenario where the number of new housing units is maximized, to scenarios where the status quo remains unchanged.

By visualizing Vancouver’s expansion over time, and presenting the future implications of R1-1, MetroBooming gives a unique perspective into Vancouver’s development from the past and into future. With this unique lens into urban development, planners and policymakers alike will gain a better understanding of Vancouver’s housing crisis, helping them to inspire new ways to promote affordable housing. 


### Members
- Andrew Ding
- Kevin Lu
- Franco Chen

## Statement of Characteristics

To better understand Vancouver’s expansion over time, and how zoning plays an important role in affordable housing, MetroBooming presents an interactive visualization of Vancouver’s development, and how the new R1-1 zoning type can boost housing into the future.

When a census tract is selected, the application visualizes the current buildings within the census tract, using a 3D scene. By adding a third dimension to the visualization, users have a better visualization of building density within the different regions of Vancouver, as the increased density with high rise apartments is lost in 2D maps.

In addition, the buildings are symbolized by their zoning type, demonstrating the massive gap in missing middle housing in many of Vancouver’s census tracts. Moreover, with a filter, users can step back into time, and see which builds remained in the past, and which ones were constructed more recently.

Finally, interactive graphs show the change in population and dwelling count over time. The aim of the graph demonstrates that much of Vancouver’s dwellings is in medium or high-density housing such as apartments and row houses. While single-family dwellings take up much of the space, they do not add much to the total dwelling count. This emphasizes the importance of the introduction of the R1-1 zone type, which allows these single-family dwellings to be redeveloped into multiple unit housing.

To emphasize the potential of the R1-1 zone, MetroBooming allows users to simulate scenarios with different levels of redevelopment within R1-1 parcels. This provides the user statistics on the number of potential additional units with the redevelopment scenario, as well as how it helps push the dwelling to 1000 residents ratio closer to 476, which is the ideal ratio, given Vancouver’s average household size of 2.1.

In essence, MetroBooming provides an easy to use, and visually appealing way to analyze temporal development in Vancouver, looking back at the past, and into the future.

## Demo Video

<a href="http://www.youtube.com/watch?feature=player_embedded&v=_Dg5WqB7Trk" target="_blank">
 <img src="./images/metrobooming_thumbnail.jpg" alt="Demo Video" width="859" height="483" border="10" />
</a>

## Methodology

The construction date of buildings within Vancouver was able to be determined using three open datasets from the City of Vancouver. The municipal property tax report provided tabular information on land values, property values, the construction date, and information on zoning. In order to add geographic context to the tax data, it was joined to Vancouver parcels feature class through a ‘land_coordinate’ ID in ArcGIS Pro.

The City of Vancouver provides two building footprints, one for the year of 2009, and one for the year of 2015. While the 2015 dataset is more recent, the 2009 dataset provided information on building heights, allowing for the visualization of buildings in 3D. 

In order to determine hot and cold spots of development, the Getis-Ord Gi* statistic using ArcGIS Pro was calculated for all buildings in the 2015 building footprints dataset, based on the year of construction. The goal of this analysis was to identify statistically significant clusters of low and high values (ie clusters of older buildings, and newer buildings). By conducting this analysis, it paints a clear picture of how Vancouver sprawled over time.

As a result, both datasets will be used. The 2015 dataset will be used for the identification of hot / cold spots of Vancouver's development using the Getis-Ord Gi* statistics, and using the additional height variables included in the 2009 dataset, it will be used when displaying data in 3D.

Both buildings footprint feature classes were spatially joined to the parcels feature class, providing the year of construction for each building, along with additional attributes.

In order to determine the maximum number of additional units in the parcels rezoned to R1-1, the parcels feature class was joined to the Vancouver zoning feature class. Thus, the maximum number of additional units was determined based on if the parcel was reclassed to R1-1, as well as the size of the parcel. Then the number of maximum additional dwelling units per parcel was calculated using the table below:

![R1-1 Table](https://i.imgur.com/a1Vu5Kd.png)

With the R1-1 tool in the app, it determines the amount of potential new dwelling units, given a redevelopment scenario which ranges from the status quo, to maximum redevelopment. In this analysis, it assumes that parcels which are redeveloped are redeveloped to provide the maximum number of additional units, given the parcel size. While this may not be the case in the real world, the app provides a optimistic outlook on the potential of R1-1 in reshaping Vancouver's housing market.

To supplement the visualization of buildings per census tract, census data was calculated and aggregated from the 1981 Canadian Census to the most recent 2021 Canadian Census. As Vancouver grew, census tracts were subdivided such that populations within each tract such that populations in each tract remained below 8,000. However, in order to have stable census tracts between 1981 to 2021 to facilitate temporal analysis of population and dwelling trends, census tracts and their census data were reaggregated to their original unsubdivided polygons. Data on population and dwelling structural type (ie single-detached, semi-detached, apartment, etc.) was obtained to compare with the development of Vancouver’s housing over time.


## Data Sources

#### City of Vancouver

- Building Footprints (2015): https://opendata.vancouver.ca/explore/dataset/building-footprints-2015/information/ 

- Building Footprints (2009): https://opendata.vancouver.ca/explore/dataset/building-footprints-2009/information/

- Parcels: https://opendata.vancouver.ca/explore/dataset/property-parcel-polygons/information/

- Property Tax Reports: https://opendata.vancouver.ca/explore/dataset/property-tax-report/information/

- Vancouver Zoning Districts: https://opendata.vancouver.ca/explore/dataset/zoning-districts-and-labels/information

#### Statistics Canada

- Population and Dwelling Types by Census Tract: https://www12.statcan.gc.ca/datasets/Index-eng.cfm

- Census Tract Polygons: https://www12.statcan.gc.ca/census-recensement/2021/geo/sip-pis/boundary-limites/index2021-eng.cfm?year=21 

#### Information on R1-1

- Zoning Bylaws: https://bylaws.vancouver.ca/zoning/zoning-by-law-district-schedule-r1-1.pdf

- Referral Report: https://council.vancouver.ca/20230725/documents/rr2.pdf

## Assumptions:

- The building footprints data is from 2009, therefore buildings that are built after 2009 will either display their pre-2009 footprints, or are not present in the map.

- The R1-1 tool assumes that eligible parcels will be redveloped to have the maximum number of dwellings, based on the size of the parcel (see the table above)

- No tax data is available for census tract 9330069 (University of British Columbia), thus no year built or zoning information is available.

- If the map / map layers does not intially load on the app, please refresh the page.

## How to run locally
Make sure your computer has Node.js v18.17.1 or similar installed.

1. Switch (cd) to the project's root directory
2. Execute command `npm install`
3. Make a copy of `.env` in the project's root directory and call it `.env.local`. Add your ESRI API Key.
4. Execute command `npm run dev` and follow the instructions from your terminal

## How to host it
We prefer using Vercel to host the app, since it's free. This project is configured to be easily hosted on Vercel.

This project is using Vite, please follow [their guide](https://vitejs.dev/guide/build) to build and deploy it if you want to use another service.

Important: make sure to enable re-writing all routes to `/` so when users are linked to the `/app` page, they won't encounter a 404 error!

## Video Sources

#### Stock Footage:
https://www.pexels.com/video/time-lapse-footage-of-a-ships-in-the-sea-5454928/

https://www.pexels.com/video/time-lapse-video-of-a-city-and-buildings-6049316/

https://www.pexels.com/video/hands-hand-rich-green-3943965/

https://www.pexels.com/video/timelapse-videos-of-cars-crossing-the-second-narrows-bridge-6009677/

https://www.pexels.com/video/people-in-business-ending-a-meeting-with-a-shake-hand-3209211/

https://www.pexels.com/video/drone-footage-of-an-avenue-with-colorful-trees-11331039/

https://www.pexels.com/video/sea-sunny-beach-ocean-3888935/

https://www.pexels.com/video/drone-view-of-houses-2113326/

https://www.pexels.com/video/drone-footage-of-a-residential-area-5442763/

https://www.pexels.com/video/parked-cars-on-the-side-of-the-street-4543761/

https://www.pexels.com/video/modern-architectural-design-of-a-house-4301618/

https://www.pexels.com/video/aerial-footage-of-a-building-10227696/


#### Images:
Old Vancouver: https://www.vancouverheritagefoundation.org/resources/history-resources/

Vancouver Housing Price Graph: https://globalnews.ca/news/2531266/one-chart-shows-how-unprecedented-vancouvers-real-estate-situation-is/

Vancouver Zoning Map: https://www.reillywood.com/vanmap/overview/

Decreasing Density / Sprawl / Limited Housing Choice: Screenshots from MetroBooming

Missing Middle Image: https://www.shapeyourcity.ca/multiplexes

#### Articles:
https://vancouver.citynews.ca/2023/06/27/vancouver-bc-least-affordable-in-canada/

https://vancouversun.com/news/local-news/vancouver-third-least-affordable-city-demographia

https://bc.ctvnews.ca/vancouver-ranked-world-s-second-least-affordable-housing-market-again-1.4777809

https://www.cbc.ca/archives/when-vancouver-real-estate-prices-were-falling-in-1982-1.5680987

https://bylaws.vancouver.ca/zoning/zoning-by-law-district-schedule-r1-1.pdf

https://council.vancouver.ca/20230725/documents/rr2.pdf

#### Stats:
60% Population Growth: Statisics Canada Census Data

50% of Land Area zoned for Single Family Homes: Zoning Polygons

#### Music:

Produced by the talented [Kevin Lu](https://open.spotify.com/artist/05pfWWuTpMuWrQY7B6AwHI?si=DBBE0qlmQPWza9ChXzOPiQ)