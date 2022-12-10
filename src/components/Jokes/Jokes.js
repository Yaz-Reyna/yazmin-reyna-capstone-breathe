import './Jokes.scss';
import {useState} from 'react';
import axios from 'axios';

function Jokes() {
    const [buttonJoke, setButtonJoke] = useState('Click here to get joke!');

    const handleClickJoke = () => {
            axios.get("https://api.humorapi.com/jokes/random?api-key=49e5a8d5a459415e8cafeedd21be22c7")
            .then((response) => {
                setButtonJoke(response.data.joke);
            }) .catch(error => {
                console.log('Error getting jokes')
            })
        }

    return(
        <section className='jokes'>
            <div className='jokes__container'>
                <h2 className='jokes__container--title'>Do you need a good laugh?</h2>
                <button onClick={handleClickJoke}  type='button' className='jokes__container--button'>
                    {buttonJoke}
                </button>
            </div>
        </section>
    )
}

export default Jokes;