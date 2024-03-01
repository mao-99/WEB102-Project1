import Card from "./card";

{}

export default function Grid({restaurants}){
    return(
        <div className="grid" style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap', alignItems:'center', textAlign:'center', alignContent:'center', margin: '0 auto', marginTop: '2rem', padding:'1.5rem'}}>
           {restaurants.map((restaurant, index)=>{
            return(
                <Card key={index} name={restaurant.name} link={restaurant.link} image={restaurant.image} country={restaurant.country} field={restaurant.field} />
            )
           })} 
        </div>
    )
}