import React from "react"
import withErrorHandler from './HocCOmponent'
import Fallback from './FallBack'
class Hero extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Name:props.heroName
        }
    }
 
render(){
    if(this.state.Name==='Joker')
    {
        throw new Error('Not a Hero')
    }
    return(
       <div>{this.state.Name}
       </div> 
    )

}
}
export default withErrorHandler(Fallback,Hero)