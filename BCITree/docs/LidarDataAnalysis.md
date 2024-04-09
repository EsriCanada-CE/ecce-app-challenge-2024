# 30% Canopy Cover workflow (ArcGIS Pro with 3D Analyst Extension)

### Part I
#### 1.	Create LAS dataset with all 181 Vancouver 2022 LiDAR tiles:
![CanopyCoverWorklow1](./images/CanopyCoverWorklow1.png)

#### 2.	Select only high vegetation and run LAS Dataset to Raster tool with a cell size of 0.25 m, interpolation type of binning, and output data type of integer:
![CanopyCoverWorklow2](./images/CanopyCoverWorklow2.png)

#### 3.	Run Raster Calculator tool with Con(“inputraster”>0,1) to turn all pixels greater than 0 to 1 so the polygons we create are already dissolved:
![CanopyCoverWorklow3](./images/CanopyCoverWorklow3.png)

#### 4.	Run Raster to Polygon tool and don’t simplify polygons so we can have greater control in the next steps:
![CanopyCoverWorklow4](./images/CanopyCoverWorklow4.png)

#### 5.	Run Select Layer by Attribute tool to select shapes with area greater than 0.5 m:
![CanopyCoverWorklow5](./images/CanopyCoverWorklow5.png)

#### 6.	Run Eliminate Polygon Part tool to remove holes less than 0.5 m in area and previous polygons not selected in step 5:
![CanopyCoverWorklow6](./images/CanopyCoverWorklow6.png)

#### 7.	Run Generalize tool with a tolerance of 0.15 m to create CanopyPoly layer:
![CanopyCoverWorklow7](./images/CanopyCoverWorklow7.png)

### Part II
#### 1.	Run Pairwise Dissolve tool on CanopyPoly to dissolve all polygons into one multipart polygon. This will simplify the next steps:
![CanopyCoverWorklow8](./images/CanopyCoverWorklow8.png)

#### 2.	Run Pairwise Intersect tool with the DisseminationAreas Layer and the CanopyPoly layer. Make sure shape_area updates correctly:
![CanopyCoverWorklow9](./images/CanopyCoverWorklow9.png)

#### 3.	Run Join Field tool on the DisseminationAreas feature class to perform a one-to-one join of the layer from step 2 to DisseminationAreas on any unique field (we chose DAUID). This will join the shape_area of the intersected layer to DisseminationAreas:
![CanopyCoverWorklow10](./images/CanopyCoverWorklow10.png)

#### 4.	Add a field called CanopyPercentage of type double to DisseminationAreas:
![CanopyCoverWorklow11](./images/CanopyCoverWorklow11.png)

#### 5.	Calculate this field as 100*Shape_Area_1/Shape_Area:
![CanopyCoverWorklow12](./images/CanopyCoverWorklow12.png)

#### 6.	Repeat with VancouverNeighbourhoods but first clip to DisseminationAreas to remove the water in the neighbourhoods layer to ensure the area is accurate.

# Seeing Three Trees Workflow
### Part I Create Tree Tops Point Layer
#### 1.	Create LAS dataset with all 181 Vancouver 2022 LiDAR tiles and select high vegetation:
![TreeTopWorkflow1](./images/TreeTopWorkflow1.png)

#### 2.	Run LAS Dataset to Raster with a cell size of 0.5 m, interpolation type of binning, cell assignment of maximum, and output data type of integer:
![TreeTopWorkflow2](./images/TreeTopWorkflow2r.png)

#### 3.	Run Focal Statistics tool with a 15x15 m rectangular neighbourhood (this value was determined with experimentation) and statistics type of maximum:
![TreeTopWorkflow3](./images/TreeTopWorkflow3r.png)

#### 4.	Run Raster Calculator tool with Con(“raster”==”rasterfocalstats”,1) to select cells that represent a local maxima:
![TreeTopWorkflow4](./images/TreeTopWorkflow4r.png)

#### 5.	Run Raster to Multipoint to create a point layer from the our raster with cells that are 1 representing local maxima:

#### 6.	Run Clip tool with our point layer as the input and CanopyPoly as the clip feature. This removes trees that we already removed from the CanopyPoly layer for being too small to represent a tree.

### Part II Find Number of Trees Near Individual Buildings

#### 1.	Run the Buffer tool on the residential property polygon layer from 300m park workflow by 30m and set to no dissolve ending up with a unique polygon buffer for each building:
![TreeTopWorkflow6](./images/TreeTopWorkflow6.png)
#### 2.	Run Summarize Within tool for this buffered layer and the TreeTops point layer to find the number of trees in each buffer:
![TreeTopWorkflow7](./images/TreeTopWorkflow7.png)
#### 3.  Run Add Join tool to join this summarized layer to the buildings layer so we have the point count in the buildings layer.

#### 4.	Add a field in buildings layer called VisibleTrees.
   
#### 5.	Calculate field for VisibleTrees by multiplying PointCount by a factor representing the average percentage of nearby trees that are visible. In our case 0.25 seemed to provide decent results. More experimentation would be needed to figure out an accurate value for this and the buffer distance:
![TreeTopWorkflow8](./images/TreeTopWorkflow8.png)
