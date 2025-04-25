
import React from "react";
class UserClass extends React.Component{
constructor(props){
  super(props)
  this.state={
    count:0,
  }
}
  render(){
    
    return(
      <div className="user-card">
        <h1>{this.state.count}</h1>
        <button onClick={()=>{
          this.setState({
            count:this.state.count+1
          })
        }}>count Increase</button>
        <h2>{this.props.name}</h2>
        <h3>Location:Coimbatore</h3>
      </div>
    )
  }
    
}
export default UserClass;