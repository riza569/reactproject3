import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import newdata from './data'

export default function App() {
    const bottom=newdata.map((x)=>{
        return <Card 
                key={x.id}
                {...x} 

        />  
    
    })
    return (
        <div>
        <Nav />
        <Hero/>
        <section className="cards-list">
        {bottom}
        </section>
        </div>
    );
}

// export default App;
// img={katie}
// rating={5.0}
// reviewCount={(6)}
// country={"USA"}
// title={"Life Lessons with Katie Zaferes"}
// price={136} />