import React from 'react';
import './App.css';
import Axios from 'axios';

class App extends React.Component {
    state = { advice: '' };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        Axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const { advice } = this.state;
        return (
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>

                </div>
                <button onClick={this.fetchAdvice} className='btn'>
                    <span>Next One</span>
                </button>
            </div>
        )
    }
}

export default App;