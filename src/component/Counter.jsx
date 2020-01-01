import React, { Component } from 'react';

class Counter extends Component {
    state = {
        angka: 0
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        // console.log('plus : ', this)
        this.setState({
        angka: this.state.angka + 1
        }, () => {
            this.handleCounterChange(this.state.angka);
        });
    }

    handleMinus = () => {
        // console.log('minus : ', this)
        if (this.state.angka > 0) {
            this.setState({
                angka: this.state.angka - 1
            }, () => {
                this.handleCounterChange(this.state.angka);
            }); 
        }
    }

    render () {
        return (
            <div className="col-lg-12">
                <div className="container">
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <button className="btn btn-md btn-outline-danger" onClick={this.handleMinus}>Minus</button>
                        </div>
                        <div className="form-group col-md-4">
                            <input disabled className="form-control" style={{textAlign: 'center'}} type="text" value={this.state.angka} />
                        </div>
                        <div className="form-group col-md-4">
                            <button className="btn btn-md btn-outline-success" onClick={this.handlePlus}>Plus</button>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }

export default Counter;