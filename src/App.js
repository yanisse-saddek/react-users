import React from 'react'
import data from './components/data.json'
import Userinfo from './components/userinfos'

export default class usersList extends React.Component {
  render(){
    const newdata = data.map((data)=>{
      return(
        <Userinfo name={data.name} email={data.email} website={data.website}></Userinfo>
        )
    })
    return(
      <div>
        {newdata}
      </div>
      )
  }
}