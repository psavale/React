import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Styles from './app.style'
import Home from '../home.content'

class App extends Component {
    render() {
        return (
            <div>
                <Grid container className="" spacing={2} direction="column" >
                    <Grid container direction="row" style={Styles.headerContainer} justify="space-between" alignItems="center">

                        <Grid item >
                            <Grid container direction="row" justify="flex-start"  alignItems="center" >
                                <Grid item style={Styles.MenuItem}>
                                    <a href="#">Home</a>
                                </Grid>
                                <Grid item style={Styles.MenuItem}>
                                    <a href="#">Coaches</a>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item style={Styles.headerNavRight}>
                            <a href="#">Sign In</a>
                        </Grid>
                    </Grid>

                    <Grid container direction="row">
                        <Grid item justify="center" alignItems="center" style={Styles.contentContainer} >
                            <Grid container direction="row">
                                <Grid item xs={3} style={{ display: "block", background: "blue" }}>Side nav1</Grid>
                                <Grid item xs={9} style={{ background: "grey" }}>Side nav2</Grid>
                            </Grid>

                            <Home />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="center" direction="row" style={Styles.footerContainer} >
                        <Grid item>
                            @cpoy right reserved
                    </Grid>
                    </Grid>

                </Grid>
            </div>
        );
    }
}
export default App
