import React, { Component } from 'react';

class Greeting extends Component {

    constructor(props) {
        super(props);

        const user = {
            name: "psavale",
            age: 29,
            initial: "PS"
          }

        const [initial, changeInitial] = useState(user.initial);
        const [greeting, changeGreeting] = useState("Evening");

        setTimeout(() => {
            this.changeGreeting("Good Evening");
            this.changeInitial("SP")
          }, 3000);
    }    
    
     greetMsg=()=> {
        let greeting = "Evening" ? "Morning" : "Evening";
        return greeting;
      }
    
      change=()=> {    
        let msg = greetMsg();
        changeGreeting(msg);
    
      }
    
    render() {
        
        return (
            <div>
                <button onClick={() => change}>
                    Switch to {greeting === "Evening" ? "Morning" : "Evening"}
                </button>
            </div>
        );
    }
}

export default Greeting;