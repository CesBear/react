import React, { Component } from 'react';
import {Button,Tag} from 'react-materialize';

export class Gusta extends Component {

	constructor(props) {
		super(props);
		this.state = { like: 0 };
	}

	btnLike = () =>
	{
		this.setState({
			like: this.state.like + 1
		});
	};

	btnDislike = () =>
	{
		this.setState({
			like: this.state.like - 1
		});
	}

	render() {
		return (
			<div style={{margin:'100px'}}>
				<Button onClick={this.btnLike}>
					Like
				</Button>
                      <Tag>{ this.state.like }</Tag>
				<Button onClick={this.btnDislike}>
					Dislike
				</Button>
			</div>
		);
	}
}

export default Gusta;
