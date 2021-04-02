const Overview = ( { OverviewData, toggle } ) => {
    
    return ( 
        <main>
            { OverviewData.map ( over =>(
                
                <section key={ over.id } className="overview-card"
                 style={{borderTopStyle: "solid", borderColor: over.border, background: toggle ? "#fff" : "hsl(228, 28%, 20%)" }}>
                    <div className="inner-text">
                        <img src={ over.site } alt="Site Logo"/>
                        <span style={{ color: toggle ? "hsl(228, 28%, 20%)" : "hsl(0, 0%, 100%)"}}>{ over.user }</span>
                        <h1 style={{ color: toggle ? "hsl(228, 28%, 20%)" : "hsl(0, 0%, 100%)"}}>{ over.followers }</h1>
                        <h2>{ over.text }</h2>
                    </div>
                    <div className="date">
                            <img src={ over.arrows } alt="arrow"/>
                            <span>{ over.today }</span>
                        </div>
                </section>
                
            ))}

        </main>
     );
}
 
export default Overview;