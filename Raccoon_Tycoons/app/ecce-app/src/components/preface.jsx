import "../App.css"

export default function Preface() {
    return (
        <div className="flex flex-row items-center justify-around w-full h-half">
            <div className="title-box font-inter font-bold bg-delft">
                <p className="collapse-text">Okay, first of all, what is urbanization?</p>
            </div>
            <div className="info-box font-inter bg-ucla">
                <p className="collapse-text">
                    Urbanization refers to the phenomenon where significant populations gravitate towards and settle in <span className="underline">compact zones</span>, ultimately giving rise to cities.                    
                    Some concepts of urbanization include <span className="font-bold">urban sprawl</span>, which is the expansion of urban areas into rural areas, and <span className="font-bold">urban renewal</span>, which is the redevelopment of urban areas.
                </p>
            </div>
        </div>
    )
}