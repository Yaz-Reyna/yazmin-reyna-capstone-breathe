import './home.scss';
import { NavLink } from "react-router-dom";
import {useState, useEffect} from 'react';

function HomePage() {

    const [showLetter, setShowLetter] = useState(0);

        useEffect (() => {
            const timer =
            setTimeout(() => {
                setShowLetter(showLetter + 1);
            }, 150);
        }, [showLetter]);

        const text = "Breathe";
        const letters = text.split("");

    return(
        <main>
            <div className="main-background"></div>
            <div className="main-background background-2"></div>
            <div className="main-background background-3"></div>

            <div className='name-links-container'>
                <div className='title-container'>
                {letters.map((letter, i) => (
                    <h1 className='title-container__title' key={i}
                    style={{animation: `one-letter 1s ease-in-out  forwards`,
                    opacity: i < showLetter ? 1 : 0,}}
                    >{letter}</h1>
                ))}
                </div>
                <div class="main"> 
                    <div className='main__links-container'>
                        <NavLink className='main__links-container--link' to='/music'>
                            Relaxing Music
                        </NavLink>
                        <NavLink className='main__links-container--link' to='/exercises'>
                            Breathing Exercises
                        </NavLink>
                        <NavLink className='main__links-container--link' to='/quotes'>
                            Quotes and Jokes
                        </NavLink>
                    </div>
                </div>
            </div>         
        </main>
    )
}

export default HomePage;