import React, { Component } from 'react';

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

export function handleModifyAnswerUpvotes(Answers, answerId, increment) {
    return Answers.map(answer => {
        if (answer.answerId != answerId)
            return answer;
        else {
            return { ...answer, upvotes: answer.upvotes + increment }
        }
    })
}

export const AddTwoNumbers = (a, b) => {
    return a + b;
}

export class CheckboxWithLabel extends Component {

    state = {
        isChecked: false,
    };

    onChange = () => {
        this.setState({ isChecked: !this.state.isChecked });
    };

    render() {
        return (
            <label>
                <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
            </label>
        );
    }
}

export class Link extends Component {

    constructor() {
        super();

        this.state = {
            class: STATUS.NORMAL,
        };
    }
    _onMouseEnter = () => {
        this.setState({ class: STATUS.HOVERED });
    };

    _onMouseLeave = () => {
        this.setState({ class: STATUS.NORMAL });
    };

    render() {
        return (
            <a
                className={this.state.class}
                href={this.props.page || '#'}
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}
            >
                {this.props.children}
            </a>
        );
    }
}

