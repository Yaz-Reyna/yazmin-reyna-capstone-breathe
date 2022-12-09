import './Quotes.scss';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Quotes() {
    const [buttonText, setButtonText] =useState('Click here to get an insightful quote!');

    // useEffect(() => {
        const handleClick = () => {
            axios.get('http://localhost:8080/quotes')
            .then((response) => {
                const randomQuote = Math.floor(Math.random()*response.data.length);
                setButtonText(response.data[randomQuote]);
            })
        }
       
        
    // }, []);


    return(
        <section className='quotes'>
            <h2 className='quotes__title'>Do you need some words of encouragement?</h2>
            <button onClick={handleClick}  type='button' className='quotes__button'>
                {buttonText}
            </button>

        </section>
    )
}

export default Quotes;