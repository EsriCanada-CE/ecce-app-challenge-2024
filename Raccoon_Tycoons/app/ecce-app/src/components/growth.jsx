import "../App.css"

export default function Growth() {
    return (
        <>
        <div className="flex flex-row items-center justify-around w-full h-half">
            <div className="title-box font-inter font-bold bg-delft">
                <p className="collapse-text">Isn't it good that our cities are growing?</p>
            </div>
            <div className="info-box font-inter bg-ucla">
                <p className="collapse-text">
                    While urbanization and urban grwoth bring positive aspects like <span className="font-bold">economic development</span> and <span className="font-bold">cultural diversity</span>, it also brings about <span className="font-bold">environmental degradation</span> and <span className="font-bold">social inequality</span>. 
                </p>
            </div>
        </div>
        <div className="more-info bg-powder m-auto">
            In particular, urbanization leads to increased <span className="font-bold">traffic density</span>, resulting in congestion and longer commute times, which also contributes to <span className="font-bold">environmental pollution</span>. 
            <br></br>
            Additionally, urbanization leads to <span className="font-bold">habitat loss</span>, as natural areas are converted into buildings and infrastructure, negatively impacting wildlife and biodiversity. 
            <br></br>
            Furthermore, it often results in the <span className="font-bold">loss of agricultural land</span>, <span className="font-bold">soil degradation</span>, and <span className="font-bold">deforestation</span>, which have long-term consequences for food security and ecosystem health.
        </div>
        </>
    );
}