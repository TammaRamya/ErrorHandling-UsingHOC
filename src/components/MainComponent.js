import React from 'react'
//import ErrorBoundary from './HocCode'
import Hero from './hoctasks/Component'
class Main extends React.Component{
render(){
    return(
        <div><center>
        <Hero heroName="BatsMan"/>
        </center>
        </div>
    )
}
}
export default Main