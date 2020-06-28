import React, { Component } from 'react';
import HookCounterTwo from '../hooks/HookCounterTwo'

class HookExamples extends Component {
    render() {
        return (
            <div>
                <h5>useState counter example -- counter</h5>
                <HookCounterTwo />
            </div>
        );
    }
}
export default HookExamples;