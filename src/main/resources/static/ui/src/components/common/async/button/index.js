import React, { Component } from 'react';
import { Button } from 'antd';

/**
 * 异步处理事件按钮
 */
export default class AsyncButton extends Component {
    static defaultProps = {
        onClick: null
    };

    constructor(props) {
        super(props);

        // 是否处于等待中状态
        this.mWaiting = false;
        this.state = {
            waiting: false // 是否处于等待中状态
        };
    }

    render() {
        return (
            <Button {...this.props} loading={this.state.waiting} onClick={() => this._onClick()}>
                {this.props.children}
            </Button>
        );
    }

    /**
     * 异步处理完成
     */
    complete() {
        this.mWaiting = false;
        this.setState({
            waiting: false
        });
    }

    _onClick() {
        if (this.props.onClick === null)
            return;

        if (this.mWaiting)
            return;
        
        this.mWaiting = true;
        this.setState({
            waiting: true
        });

        this.props.onClick(this);
    }
}