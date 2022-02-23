import React from 'react'

export default class Userinfo extends React.Component{
    render(){
        return(
         <div>
            <p>{this.props.name} {this.props.email} {this.props.website}</p>
         </div>   
        )
    }
}