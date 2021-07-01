import React from 'react'
import Hero from './Component'
class Main extends React.Component{
render(){
    return(
        <div><center>
        <Hero heroName="BatsMan"/>
        <Hero heroName="Joker"/>
        </center>
        </div>
    )
}
}
export default Main

