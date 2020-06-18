import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import axios from 'axios'

class SignUp extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:"Param", passWord:"Param@123"
        };

    }

    updatePassword()
    {

    }

    login()
    {
        axios.post("", {user_name:"parameshwar", passWord:"password"})
        .then(function(response){
            console.log(response);
        })
        .catch(function(response){
        console.log(response);
        });
    }

    changeInput(e,param)
    {
        let {formFields}=this.state;
        let tempObj={};
        Object.assign(tempObj,this.state);
        tempObj[param]=e.target.value;
        console.log("tempObj  ", tempObj);
        console.log("Orginal  ", this.state);
        
        this.setState({...tempObj})
        // console.log(this.state.name);
    }   
  

    render()
    {
        return(
            <div>
                    <div>
                        <input type="text" value={this.state.name} onChange={(e)=>this.changeInput(e,"uname")}></input>
                        <input type="password" value={this.state.passWord} onChange={(e)=>this.changeInput(e,"pass")}></input>
                        <button onClick={()=>this.login}>Sign In</button>
                    </div>
            </div>
        )
    }
}

export default SignUp;