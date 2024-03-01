import { useState } from 'react'
import Header from './components/header'
import Card from './components/card'
import Grid from './components/cardGrid'

function App() {
  
  const allRestaurants = [
    {name:'Liverpool', country: 'England', link: 'https://www.liverpoolfc.com/', image: "/anfield.jpg", field: "Anfield"},
    {name:'Manchester City', country: 'England', link: 'https://www.mancity.com', image: "/etihad.jpg", field: "Etihad Stadium"},
    {name:'Manchester United', country: 'England', link: 'https://www.manutd.com/', image: "/oldtrafford.jpg", field: "Old Trafford"},
    {name:'Real Madrid', country: 'Spain', link: 'https://www.realmadrid.com/', image: "/bernabeau.jpg", field:"Santiago Bernabeu"},
    {name:'Barcelona', country: 'Spain', link: 'https://www.fcbarcelona.com/', image: "/campnou.jpg", field:"Camp Nou"},
    {name:'Atletico Madrid', country: 'Spain', link: 'https://en.atleticodemadrid.com/', image: "/wandametropolitano.jpg", field:"Wanda Metropolitano"},
    {name:'Bayern Munich', country: 'Germany', link: 'https://fcbayern.com/en', image: "/allianz.jpg", field:"Allianz Arena"},
    {name:"Borrusia Dortmund", country: 'Germany', link: 'https://www.bvb.de/eng', image: "/signal.jpg", field:"Signal Iduna Park"},
    {name:"Bayer Leverkusen", country: 'Germany', link: 'https://www.bayer04.de/en-us', image: "/bayarena.jpg", field:'Bay Arena'},
    {name:'Inter Milan', country: 'Italy', link: 'https://www.inter.it/en', image: "/sansiro.jpg", field:"San Siro"},
    {name:"Napoli", country: 'Italy', link: 'https://sscnapoli.it/en/', image: "/stadioadm.jpg", field:"Stadio Armando Diego Maradona"},
    {name:'Juventus', country: 'Italy', link: 'https://www.juventus.com/en/', image: "/allianzArena.jpg", field:"Allianz Stadium"},
  ]
  return (
    <>
      <Header />
      {/* <Card name={allRestaurants[0][0]} country={allRestaurants[0][1]} link={allRestaurants[0][2]} image={allRestaurants[0][3]} /> */}
      <Grid restaurants={allRestaurants} />
    </>
  )
}

export default App
