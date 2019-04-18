import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementAction, decrementAction} from './actions';
import './App.css';

class App extends Component {
	onDecrement() {
		this.props.onDecrement(1);
	}

	onIncrement() {
		this.props.onIncrement(1)
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="container">
						<div style={{marginBottom: '15px'}}>
							<button onClick={this.onDecrement.bind(this)} style={{marginRight: '15px'}} type="button" className="btn btn-info">Giảm</button>
							<button onClick={this.onIncrement.bind(this)} type="button" className="btn btn-info">Tăng</button>
						</div>
						<div>Counts: <span>{this.props.times}</span></div>
					</div>
				</header>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		times: state.counterReducers ? state.counterReducers : 0
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDecrement: (step) => {
			dispatch(decrementAction(step));
		},
		onIncrement: (step) => {
			dispatch(incrementAction(step));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
