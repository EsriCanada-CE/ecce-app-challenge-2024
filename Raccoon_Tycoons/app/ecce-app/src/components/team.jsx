import Tiana from '../assets/tiana.jpg'
import Vincent from '../assets/vincent.jpg'
import '../App.css'

export default function Team() {
    return (
        <>
            <h1 className='text-center mt-60 font-bold p-10 bg-delft'>Meet The Team</h1>
            <div className="flex flex-row items-center justify-around w-full h-half mt-20 mb-16">
                
                <div className="flex flex-col items-center">
                    <img src={Tiana} alt="Tiana" className="image-size bg-ucla p-3"/>
                    <p className="bio bg-delft p-6"><span className='font-bold'>Tiana Andjelic</span> is a prospective masters student who will be joining the Spatial Analysis and Modeling Lab at Simon Fraser University in September of 2024. Her future research aims to focus on the impacts of human infrastructure on land erosion as well as preventative measures on local and global scales. She recently completed her undergraduate degree within the Faculty of Environment at SFU with a concurrent GIS certificate. Some of her favourite hobbies to do during her free time are kickboxing, playing piano, and going on hikes with her dog.</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Vincent} alt="Vincent" className="image-size bg-ucla p-3"/>
                    <p className="bio bg-delft p-6"><span className='font-bold'>Vincent Liu</span> is a passionate third-year student pursuing the Geographic Information Science Honours program jointly between the School of Computing Science and the Faculty of Environment at Simon Fraser University. He is currently a prospective software engineer intern at Apple for the summer of 2024. 
                        His career interests lie in the intersection of web development and GIS. Some of his favourite hobbies include playing the guitar and drums, assembling computers, delving into historical narratives, and learning about urbanism.</p>
                </div>
            </div>
        </>
    )
}