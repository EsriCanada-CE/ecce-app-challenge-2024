import { useState } from 'react'
import Header from './components/header'
import Preface from "./components/preface"
import Growth from "./components/growth"
import Prevention from './components/prevention'
import Team from './components/team'
import tramImg from './assets/tram.jpg'
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <h1 className="font-inter font-bold font-2xl pt-28 pb-2 text-center">Is Urbanization Good For Us?</h1>
      <h4 className="font-inter font-sm pb-8 text-center">A Study of the Greater Toronto Area</h4>
      <img className='w-full opacity-50' src={tramImg} alt='Tram in Toronto' />
      <Preface></Preface>
      <h1 className="font-inter font-bold font-2xl mt-32 text-center bg-delft p-8">Urban land classification in the Greater Toronto Area from 1971 to 2021</h1>
      <div class="embed-container">
        <iframe frameborder="0" marginheight="0" marginwidth="0" title="Urban areas 1971 vs 2021" src="//tianaandj.maps.arcgis.com/apps/Embed/index.html?webmap=4f14ac8db4704984bd0c794edbf92967&extent=-80.7947,43.3618,-78.2925,44.3952&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legendlayers=true&disable_scroll=true&theme=dark"></iframe>
      </div>
      <p className="bg-ucla p-8 mb-20">
        A map depicting the change in urban land cover within the Greater Toronto Area from 1971 to 2021.
        Over the last 50 years, the urban area in the Greater Toronto Area has expanded significantly, with the conversion of agricultural and natural lands into urban developments. This growth has been driven by population growth, economic development, and infrastructure expansion. 
        As cities continue to grow, it is important to consider how to manage urbanization sustainably to ensure the well-being of both people and the environment.
      </p>
      <Growth></Growth>
      <h1 className="font-inter font-bold font-2xl mt-32 text-center bg-delft p-8">Ontario Greenbelt Within Toronto Census Metropolitan Area</h1>
      <div class="embed-container"><iframe frameborder="0" marginheight="0" marginwidth="0" title="Ontario Greenbelt Within Toronto Census Metropolitan Area" src="//tianaandj.maps.arcgis.com/apps/Embed/index.html?webmap=d2be845b89dc4af0bdda0441bb8686ed&extent=-80.7728,43.4119,-78.2707,44.4444&home=true&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legendlayers=true&disable_scroll=true&theme=dark"></iframe></div>      
      <p className="bg-ucla p-8">
        A map depicting the greenbelt zones within the Toronto Census Metropolitan Area.
        The greenbelt is a protected area of land that surrounds the Greater Toronto Area and is designated for conservation and sustainable land use. 
        It helps to protect natural habitats, water resources, and agricultural lands from urban development.
        The greenbelt plays a crucial role in maintaining biodiversity, supporting ecosystem services, and providing recreational opportunities for residents.
        However, urbanization threatens greenbelt zones in the Toronto Census Metropolitan Area by converting natural habitats into urban landscapes, fragmenting ecosystems, polluting water sources, diminishing biodiversity, and increasing resource demands, all while exacerbating the impacts of climate change and diminishing cultural and recreational values.

      </p>
      <Prevention></Prevention>
      <Team></Team>
    </>
  )
}

export default App
