import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Style from '../home/home.style';
import { Heading, RegularText } from '../../../ui/index';
import Cake from '../../containers/cake';
import IceCream from '../../containers/iceCream';
import FormPost from '../http/FormPost';
import OwlCarosuel from '../owl-carosuel';


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Parameshwar',
    lastName: 'Savale'
};





class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { time: 20, city: "Bangalore" };
        // this.name = props.name;
        // this.age = props.age;
    }

    componentDidMount() {
        var setTimer = setInterval(() => {
            this.setState({ time: this.state.time - 1 });
            if (this.state.time <= 0)
                clearInterval(setTimer);

        }, 1000);
    }



    changeCity() {
        //  console.log("this",this);
        this.setState({ city: "pune" });
    }

    render() {
        //   console.log(this.changeCity.bind(this));
        return (
            <div>
                <div className="header-wrapper">

                    <div className="header-content1">
                        <Grid container style={Style.container} alignContent="center" justify="center">

                            <div style={Style.contentContainer}>
                                <Heading text="keep it simple" />
                                <RegularText>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book</RegularText>
                                <div>
                                    <Button variant="outlined">Default</Button>
                                    <Button variant="outlined" color="primary" style={{ borderRadius: "50" }}> Primary</Button>
                                </div>
                            </div>
                        </Grid>
                    </div>

                    <div className="header-content">
                        <OwlCarosuel/>

                    </div>
                    <div className="header-content2">
                        <h1>
                            Hello, {formatName(user)}!
                        </h1>

                        <span>Hello this is {this.props.name} and my age is {this.props.age}</span>
                        <div><span>my driving license expires in {this.state.time} min </span></div>

                        <div>I'm travelling to {this.state.city}</div>
                        <button onClick={this.changeCity.bind(this)}>change city</button>
                    </div>
                </div>

                <div className="left-container">

                    <div>
                        <h2> You can Buy Cake and Ice Cream here</h2>
                        <Cake />
                        <IceCream />
                    </div>
                </div>

                <div className="main-content">

                    <div className="carosuel">

                    </div>

                </div>

                <div className="right-container">
                    <div>
                        <h2> We are here to help you ! Contact Us</h2>
                        <FormPost />
                    </div>
                </div>

            </div>
        )
    }
}

export { Home }