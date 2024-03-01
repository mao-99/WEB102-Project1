import { useState } from "react"


export default function Card({name, country, link, image, field}){
    return (
        <>
            <div className="cardContainer" style={{ alignItems:'center', alignContent:'center', textAlign:'center', height:'402px', width:'372px', padding:'0.25rem', border:'3px', borderRadius:'1rem', boxShadow: '5px 5px 15px rgba(0,0,0,0.2)', margin:'1.5rem'}}>
                <img src={image} alt={`${name}`} style={{height:'189px', width:'360px', marginTop: '.5rem'}}/>
                <h1>{name}</h1>
                <h4>Country: {country}</h4>
                <p>Field: {field}</p>
                <button style={{height:'30px', width:'auto'}}><a href={link} target='_blank' style={{textDecoration:'none', fontSize:'1rem'}}>View Menu</a></button>
            </div>
            

        </>
    )
}