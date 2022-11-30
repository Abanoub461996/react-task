// MODULES 
import { useEffect } from "react"

// COMPONENTS
import Filter from "./FilterComponent/Filter"
import GymCard from "./GymCard/Gym";

import "./Home.css"

const Home =()=>{
    let dummyArray =[1, 2, 3]
    // useEffect(()=>{
    //     fetch("https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
    //     {
    //         auth: {
    //             type: "noauth"
    //         },
    //         header: [
    //             {
    //                 key: "Content-Type",
    //                 name: "Content-Type",
    //                 type: "text",
    //                 value: "application/json"
    //             }
    //         ]
    //     },{body:{
    //         mode: "formdata",
	// 		formdata: []
    //     }}
    //     )
					
    //     });
    return (<>
    <Filter/>
    <div className="container-fluid gyms_list" style={{width:"90%"}}>
        <h4>All</h4>
        <div class="row" style={{display: 'flex', alignItems: 'flex-start',flexDirection: 'row',gap: '32px'}}>
            {dummyArray?.map((gym, i)=>{
                return <GymCard gym={gym} key={i}/>
            })}
        </div>
    </div>
        
    </>)
}

export default Home;