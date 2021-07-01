import React from 'react'
//import ErrorBoundary from './HocCode'
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

