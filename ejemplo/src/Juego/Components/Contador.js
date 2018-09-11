import React, { Component } from 'react';
import {Button} from 'react-materialize';

export class Contador extends Component {
	componentDidMount() {
		alert(`Mucho exito ${this.props.nombre}!`);
	}

	componentWillUnmount() {
		alert(`Mejor suerte a la proxima!`);
	}

	render() {
		return (
			<div>
				<br />
				{this.props.nombre} : {this.props.cont}
				<Button onClick={() => this.props.parar(this.props.index)}>
					Parar
				</Button>
				<br />
				<Button onClick={() => this.props.eliminar(this.props.index)}>
					Ya no quiero jugar
				</Button>
				<br />
			</div>
		);
	}
}

export default Contador;
