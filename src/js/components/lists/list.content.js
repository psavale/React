import React, { Component } from 'react'
import { red, green } from '@material-ui/core/colors';

class List extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            activeUser:0,
            members:[{name:"Parameshwar", age:29},{name:"bala", age:31},{name:"Amulya", age:30}]
        }
        
    }

    // componentDidMount()
    // {
    //     const {members, activeUser}=this.state;
    //     this.props.handleChange(members[activeUser].name);
    // }

    DeleteNumber(index)
    {
        console.log(index);
        const {members, activeUser}=this.state;
        console.log("numbers length", members.length);
        let tempObj=this.state.members.slice(0,members.length);
        
        console.log(tempObj);
        tempObj.splice(index,1);
        this.setState({members:tempObj});
    }


    changeActiveUser(index)
    {
       
      this.setState({activeUser:index},
        ()=>{
            const {members, activeUser}=this.state;
            this.props.handleChange(members[activeUser].name);
        });
        
    }

    changeName(e, userIndex)
    {
        const {members, activeUser}=this.state;
        let tempObj=this.state.members.slice(0,members.length);
        
        console.log("user name",  tempObj[userIndex].name);

       tempObj[userIndex].name=e.target.value;
         this.setState({members:tempObj});
    }

    render()
    {
       
        let {activeUser, members}=this.state;
        
        return(
            <div style={{borderColor:"red", width:"30%", alignItems:"center", justifyContent:"center", justifyItems:"center"}}>
                <input type="text" value={members[activeUser].name} onChange={(e)=>{this.changeName(e, activeUser)}}></input>
            <ul style={{listStyle:"none"}}>
                {
                    this.state.members.map((n,index)=>{
                        return <li  key={n.name} onClick={(n)=>{this.changeActiveUser(index)}} style={
                             (activeUser==index)?{border:"1px solid blue", backgroundColor:"green"}:{border:"1px solid #1ccc", backgroundColor:"red"}}>
                            <h2>name={n.name}</h2>
                             <p> Age={n.age} </p>
                             </li>
                    })
                }
            </ul>
            </div>
        )
    }
}

export default List;