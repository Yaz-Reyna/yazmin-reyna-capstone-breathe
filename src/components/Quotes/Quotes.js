import './Quotes.scss';
import {useState} from 'react';
import axios from 'axios';

function Quotes() {
    const [buttonQuote, setButtonQuote] =useState('Click here to get an insightful quote!');



        const handleClickQuote = () => {
            axios.get('http://localhost:8080/quotes')
            .then((response) => {
                const randomQuote = Math.floor(Math.random()*response.data.length);
                setButtonQuote(response.data[randomQuote].text);
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
        </section>
    )
}

export default Quotes;