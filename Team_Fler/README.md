# MetroPulse BC

## Team
Team Fler at BCIT

## Link to Application
https://experience.arcgis.com/experience/3639f568496945f191ea1e780b63afe9/


## Mission Statement

In 2021, nearly three in four Canadians lived in one of the country's large urban centres. As cities continue to densify, what effects will residents see on the social fabric of their communities?

Team Fler's app **MetroPulse BC** describes this trend at the national level, then gives users the ability to quickly explore key metrics related to densification impacts on British Columbia's urban centres (census metropolitan areas and census agglomerations, as defined by Census Canada).

With **MetroPulse BC**, decision makers can view key trends, opportunities, and challenges in provincial-level resources, framed specifically within the context of recent urban densification percentage change (both positive and negative). As a form of data journalism, the general public can also use the app to build greater understanding about urban trends and which areas are being most impacted. Lastly, a geospatially-informed survey invites users to share their experiences about how urban densification has impacted their lives, which Team Fler envisions as a data-collection prototype for community engagement projects.


<br>

# About the Application

## Characteristics 

- Employs an intuitive and friendly interface design, suitable for users ranging from the general public to more specialized professionals (i.e. GIS, policy, and planning).

- Recontextualizes data sets within the metric of percentage change in population density between 2016 and 2021.

- Reconciles varied data sets to the census metropolitan and census agglomeration geographic level for cross-comparison purposes.

- Presents novel / difficult-to-access data (e.g. Social Vulnerability, from the National Human Settlement Layer) alongside metrics from Statistics Canada and the BC Data Catalogue.

- Using structure and storytelling, guides the user through multiple geographic levels: from national to provincial to city, concluding with the local / personal (in the form of a survey).

- Gives users the ability to simply "click and compare" for quick generation of GIS insights about the regions of BC of greatest interest to them.

- Gives users the opportunity to share their experiences about how urban densification has impacted their lives.

- Collects quantitative data such as user demographics alongside qualitative data such as opinions about urban expansion.

- Uses unique visual styling to engage the user and differentiate from templated ArcGIS applications, while leveraging the unique capabilities of ArcGIS Experience Builder to implement low-code solutions for dynamic data display (e.g. Arcade expressions, dynamically linked data sources, and map / widget "Message Actions").

<br>


## Written Description

**MetroPulse BC** is a web-based application that allows its users to interact with key metrics surrounding social health to make informed decisions on behalf of communities across British Columbia. utilising selected metrics from the National Human Settlement Layer (NHSL), Statistics Canada, and BC Data Catalogue, the app provides key insights that contextualize the people within the places where urban expansion is at its apex. 

The app contains three key components: 
1. Introductory Story (national and provincial context)
2. MetroPulse BC Data Explorer
3. Survey


#### 1. Introductory Story (national and provincial contexts)

The "story" component of the app serves as a framing for the national and provincial contexts of urban densification. It introduces the definitions of census metropolitan areas (CMAs) and census agglomerations (CAs), and provides a clickable thematic map showing population density change between 2016 and 2021. Then, moving to the provincial level, the app shows the user a quick snapshot of what rapid urban change looks like in British Columbia. It contrasts the urban areas with the highest positive and negative density change (Squamish and Dawson Creek respectively). The page also contains a list of the densification change rates for every Census Metropolitan Area within BC, ranked from highest percentage of change to lowest. In bridging the statistics with news stories related to densification impacts, users are encouraged to reflect on the social implications of rapid urban change before advancing to the main application. 


#### 2. MetroPulse BC Data Explorer

The data explorer gives users the ability to select one of the 28 CMAs and CAs in BC and view key metrics. In pairing the metrics with an interactive thematic map, users can look for trends between negative and positive density change, as well as explore the geographic regions most relevant to their interest. Comparisons against provincial averages are also supplied, when applicable.

The selected key metrics are:

- Density Change Percentage Score (2016-2021)
- Total Population (2021)
- Social Vulnerability Score
- % Unaffordable Housing (> 30% of income required to support shelter costs)
- Median Age
- % Public Transit use
- Median Household Income
- Healthcare Facilities (count)
- Civic Facilities (count)
- Schools (count)

These metrics were chosen after researching the topic and exploring data surrounding social well-being within the subject of urban expansion. Through our findings, we have determined that these statistics provide a concise look at trends and relationships between rapid development and its effects on communities. As further described in the "Methodology" section, data were extracted, processed, and statistically recontextualized to the CMA / CA geographic level.


#### 3. Survey

Our team is interested in combining quantitative and qualitative lenses to examine the impact of rapid urban densification. To gather additional social data which can be assessed in a geospatial context, we have leveraged the functionality of ArcGIS Survey 123 to ask about app user demographics, opinions about urban expansion, and evaluation of local government responses in addressing the key issues covered in the app. This data could be used to supply urban designers, planners, consultants, and local governments with feedback and context for decision making. 


#### Appendix

The "Appendix" tab cites raw data sources and links to the ECCE GitHub for this additional resource on methodologies and process.



<br>

# Methodology

### Data Methodology
The data methodology employed ArcGIS Pro for spatial analysis and data manipulation, complemented by Python libraries such as openpyxl for processing Excel data. This comprehensive approach facilitated efficient extraction, organization, and standardization of diverse datasets.

##### Social Fabric: Polygon
The process for creating the custom social fabric dataset begins with obtaining the National Human Settlement polygon layer from Natural Resources Canada / Open Government. Initially, the layer is loaded into ArcGIS Pro, overlaid, and clipped to the Census Metropolitan Area (CMA) layer, ensuring alignment with the geographic boundaries of urban areas. 
Following this, filtering selections are applied to both layers: specific CMA is selected, and in the social fabric dataset, a ‘Select by Location’ operation isolates all Social Fabric layer polygons within the selected CMA boundary. This step allows for focused analysis on social indicators within each urban region. Subsequently, summary statistics are calculated to retrieve the mean values for the fields: 

- Social Vulnerability Score
- Population Using Public Transit
- Shelter Costs Exceeding 30% of Income
- Average Household Income

This generates a single-row table of summarized data for the selected CMA, which is then stored in a Catalog folder containing the individual rows.
Finally, extensive quality assurance and quality control measures are applied when manually copying the single row values into the social fabric layer. The QAQC step is crucial as it validates the accuracy and reliability of the custom social fabric dataset. This involves meticulous review and verification of the data to ensure its integrity and usability for further analysis and decision-making purposes.

##### Civic Facilities:	Point
Point layer data for civic facilities is loaded into ArcGIS Pro and selected by location using the CMA layer as an overlay. The “Table to Excel” geoprocessing tool exports the layer’s table into a form that can be manipulated with the application of the openpyxl Python module. A condition is applied to the raw data which only writes out the rows that match the list of the CMAs. In Excel, the keyword field describing each facility is cleaned and standardized. This involves splitting the keywords and capitalizing the values for aesthetics and readability. A two-column table output is generated containing the CMA names and corresponding facility counts, serving as a concise summary of the facility data for further analysis and reporting purposes.

##### Healthcare Facilities: Tabular
Hospitals table & Clinics tables:
The tabular data for hospitals and walk-in clinics are separately processed through the same openpyxl script. This script processes the tables by isolating all rows in the Hospitals and Clinics tables that correspond to the 28 Census Metropolitan Areas (CMAs). A two-column table output is generated containing the CMA names and the corresponding facility counts. Both new two-column tables for hospitals and walk-in clinics are imported into ArcGIS Pro, where the “Calculate Field” geoprocessing tool generates a new field, “Healthcare Facilities,” populated using the sum of hospital and clinic values for each row. The table is exported as another standalone table, “Healthcare Facilities,” representing one field for CMA names and another with the healthcare facility count.

##### Median Age: Tabular
Using the Custom Census Reports as raw data, a nearly 30,000-row table is processed. An openpyxl script is created to efficiently extract and organize median age data for specific CMAs. It imports the raw data table and only accesses the rows that match the CMAs, the year 2021, and represent the total population. In this data, each field represents the age, with the total for each age represented in the census data for that year. A loop is created to iterate through each of the specified cells in each row (the age columns). Once the conditions are met, the script determines the median age for the corresponding CMA by calculating the midpoint, summing up the age values in successive columns until reaching half of the total population. The script writes the new output table, populating the first field with the CMA name and the second field “Median Age” with the corresponding header of the cell calculated to be the median (the header represents the age). The output table, “Median Age,” is then imported to ArcGIS Pro as a standalone table.

##### Schools: Tabular
An openpyxl script is created to efficiently extract and organize a school count for specific CMAs. The script loads the Excel input file containing education data using the openpyxl library and specifies the rows to be iterated over, which contain data specific to British Columbia overall as well as the specific school districts. The script then loops through the specified rows, and counts the schools in each of the CMA districts. After counting the schools for each CMA, the script writes the CMA names and their corresponding school counts to the output table. The new “Schools” output table is then imported to ArcGIS Pro.

##### CMA: Polygon
Creating the main CMA layer involved organizing and standardizing data for comprehensive analysis and visualization. In ArcGIS Pro, 2 separate layers of this dataset were created, one, kept whole was the federal level, the other, clipped to the BC boundaries, represented the Provincial level. At the Federal Level, and Provincial level the openpyxl library is utilized to split values in the 'Location' field ensuring that the data is formatted consistently, this step is crucial for future joins. This step also lends itself to clarity and readability.
The next step involved manipulating the provincial level layer in ArcGIS Pro for our data exploration purposes. Joining fields from the customized tables including Social Fabric, Civic Facilities, Healthcare Facilities, Median Age and BC Schools. Within the main CMA layer, specific fields from those tables are mapped to the main CMA layer, streamlining data management for analysis. 

Key fields included:

- Healthcare Facilities
- Civic Facilities
- Social Vulnerability Score
- Population Using Public Transit
- Shelter Costs Exceeding 30% of Income
- Average Household Income
- Census Population Data for 2016 and 2021 (2 separate fields)
- Median Age
- Schools 

This ensures that the data is organized and standardized, ready for analysis and visualization. By merging these datasets, the CMA layer is enriched, providing a holistic view of urban areas.

<br>

## Data

These data sources were processed and statistically recontextualized to the CMA / CA geographic level using ArcGIS Pro and openpyxl. For full details on data processing, please see the methodology section.

#### Population Change from 2016 to 2021, by census subdivision (CSD) 
- Statistics Canada, 2022
- This map illustrates the percentage change in population from 2016 to 2021 across census subdivisions in British Columbia.
- Datatype: Polygon Layer
https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/dv-vd/cpdv-vdpr/index-eng.cfm

#### National Human Settlement Layers: Social Fabric
- Natural Resources Canada / Open Government, 2020 (last updated 2022)
- Insights into neighborhood-scale social vulnerability and community resilience, assessing factors such as housing characteristics, family structure, individual autonomy, and financial agency.
- Datatype: Polygon Layer
- Source: https://open.canada.ca/data/dataset/e9905001-6a39-43ca-a02d-4ab5144df0f8

#### Civic Facilities 
- BC Data Catalogue: GeoBC Branch, 2018
- Identifies local arts, culture and recreational facilities in British Columbia.
- Datatype: Point Layer
- Source: https://catalogue.data.gov.bc.ca/dataset/civic-facilities

#### Hospitals in BC
- BC Data Catalogue: HealthLink BC, 2024
- Table of all BC hospitals.
- Datatype: Tabular
- Source: https://catalogue.data.gov.bc.ca/dataset/hospitals-in-bc/resource/5ff82cf4-0448-4063-804a-7321f0f2b4c6

#### Walk-in Clinics in BC
- BC Data Catalogue: HealthLink BC, 2024
- Table of all BC walk-in clinics.
- Datatype: Tabular
- Source: https://catalogue.data.gov.bc.ca/dataset/walk-in-clinics-in-bc

#### BC Schools – Class Size
- BC Data Catalogue: Education Analytics Office, 2024
- Statistics detailing the composition of public schools in British Columbia, categorized by District, and School levels. (elementary and secondary)
- Datatype: Tabular
- Source: https://catalogue.data.gov.bc.ca/dataset/bc-schools-class-size

#### Custom Census Reports (2021, 2016, 2011, 2006)
- BC Data Catalogue: Planning and Land Use Management, 2024
- This dataset compiles custom Census data from Statistics Canada spanning the past four Census reports (2021, 2016, 2011, 2006).
- Datatype: Tabular
- Source: https://catalogue.data.gov.bc.ca/dataset/custom-census-reports-2021-2016-2011-2006-


### Interface Methodology

The interface for **MetroPulse BC** was built using ArcGIS Experience Builder and ArcGIS online mapping. The interface was highly customized with graphics and styling, with the intention of delivering an experience that is engaging, user-friendly, and unique in its exploration of Experience Builder's capabilities. This includes the use of Arcade expressions for data display, dynamically linked data sources, and map / widget "Message Actions". A custom basemap was also created to reduce visual clutter and highlight only relevant geographic features. Lastly, the interface was designed with accessibility in mind wherever possible, by using alt text on images, accessible font sizes, and high contrast values for legibility. 


<br>

# Sources & Credits

In addition to the above-listed raw data sources, the following assets are used:

**App images:**
- "View of Squamish from the Chief Hike": Benoit Brummer / Wikimedia Commons CC-BY-SA-4.0

- "Dawson Creek Mile Zero Post": Maclean25 / Wikimedia Commons CC-BY-SA-4.0


**Stock video:**
- "Seoul Traffic" https://pixabay.com/videos/seoul-traffic-cars-city-speed-21118/

- "Montreal Cityscape Aerial Views" https://pixabay.com/videos/montreal-cityscape-aerial-view-city-3149/

- "Crosswalk Crowd" https://pixabay.com/videos/crosswalk-crowd-people-many-3630/

- "Seoul city streets" https://pixabay.com/videos/seoul-city-streets-road-night-view-21985/

- "Vehicles and bike traffic" https://pixabay.com/videos/vehicles-bike-traffic-e-bike-173383/

- "Toronto Canada" https://pixabay.com/videos/toronto-canada-big-skyline-ontario-42825/

- "Train buildings condominiums": https://pixabay.com/videos/train-buildings-condominiums-182170/


All other graphic assets developed by Team Fler. 






