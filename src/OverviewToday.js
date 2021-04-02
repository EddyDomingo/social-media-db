const OverviewToday = ( {OverToday, toggle} ) => {
    return ( 
        <main>
            <h1>Overview - Today</h1>
            { OverToday.map ( today => (
                <section key={today.id} class="overview-today" style={{background: toggle ? "#fff" : "hsl(228, 28%, 20%)" }}>
                    <span class="today-view" style={{ color: toggle ? "hsl(228, 28%, 20%)" : "hsl(0, 0%, 100%)"}}>{ today.view }</span>
                    <img src={today.site} alt="Site" class="img-site"/>
                    <h2 class="today-count" style={{ color: toggle ? "hsl(228, 28%, 20%)" : "hsl(0, 0%, 100%)"}}>{today.count}</h2>
                    <img src={today.arrows} alt="" class="today-arrow"/>
                    <span class="today-percent" style={{ color: toggle ? "hsl(228, 28%, 20%)" : "hsl(0, 0%, 100%)"}}>{today.percent}</span>


                </section>
            ))}
        </main>
     );
}
 
export default OverviewToday;