import './Quotes.scss';
import {useState} from 'react';
import axios from 'axios';

function Quotes() {
    const [buttonQuote, setButtonQuote] =useState('Click here to get an insightful quote!');
    const [buttonJoke, setButtonJoke] =useState('Click here to get joke!');


        const handleClickQuote = () => {
            axios.get('http://localhost:8080/quotes')
            .then((response) => {
                const randomQuote = Math.floor(Math.random()*response.data.length);
                setButtonQuote(response.data[randomQuote]);
            })
        }

const handleClickJoke = () => {
    axios.get("https://api.humorapi.com/jokes/random?api-key=49e5a8d5a459415e8cafeedd21be22c7")
    .then((response) => {
        setButtonJoke(response.data.joke);
    })
}
    return(
        <section className='quotes'>
            <div className='quotes__quotes-container'>
                <h2 className='quotes__quotes-container--title'>Do you need some words of encouragement?</h2>
                <button onClick={handleClickQuote}  type='button' className='quotes__quotes-container--button'>
                    {buttonQuote}
                </button>
            </div>
            
            <div className='quotes__jokes-container'>
                <h2 className='quotes__jokes-container--title'>Do you need a good laugh?</h2>
                <button onClick={handleClickJoke}  type='button' className='quotes__jokes-container--button'>
                    {buttonJoke}
                </button>
            </div>
            

        </section>
    )
}

export default Quotes;