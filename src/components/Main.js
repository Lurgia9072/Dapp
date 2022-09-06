import React, { Component } from 'react';
import sy from '../img/syb.png';

class Main extends Component {
    render() {
        return (
            <div id="content" className="mt-3">
            <table className="table table-borderless text-muted text-center">
                <thead>
                    <tr>
                        <th scope="col">Balance de Staking</th>
                        <th scope="col">Balance de recompensas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} JAM</td>
                        <td>{window.web3.utils.fromWei(this.props.stellarTokenBalance, 'Ether')} STE </td>
                    </tr>
                </tbody>                
            </table>
            <div className="card mb-3">
                <div className='card-body'>
                    <form className = 'mb-3' onSubmit={(event) => {
                        event.preventDefault()
                        let amout 
                        amout = this.input.value.toString()
                        amout = window.web3.utils.toWei(amout, 'Ether')
                        this.props.stakeTokens(amout)
                    }}                     
                    >
                        <div>
                            <label className='float-left'>
                                <b>Stake Tokens </b>
                            </label>
                            <span className='float-right text-muted'>
                                Balance: {window.web3.utils.fromWei(this.props.jamTokenBalance, 'Ether')}
                            </span>
                        </div>
                        <div className='input-group mb-4'>
                            <input
                            type="text"
                            ref={(input) => {this.input=input}}
                            className="from-control form-control-lg"
                            placeholder='0'
                            required
                            />
                            <div className='input-group-append'>
                                <div className='input-group-text'>
                                    <img src={sy} height='32' alt='token'/>

                                    &nbsp;&nbsp;&nbsp; SD
                                </div>
                            </div>
                        </div>
                        <button className='btn btn-info btn-block btn-lg' type='submit'> STAKE

                        </button>
                    </form>
                </div>
            </div>
            </div>


        )
    }
}
export default Main;