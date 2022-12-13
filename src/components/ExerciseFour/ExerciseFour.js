import "./ExerciseFour.scss";
import { useState } from 'react';


function ExerciseFour() {

    const [isPlaying, setIsPlaying] = useState(false)

    const handleClick = () => {
        setIsPlaying(true);
    };

    return (
        <section className="breathe4">
            <button className="breathe4__button" onClick={handleClick}>
                <div className={`breathe4__button__circle ${isPlaying ? 'breathe4__button__circle--play-animation' : ''}`} onClick={handleClick}></div>
                <p className= {`breathe4__button__text ${isPlaying ? 'breathe4__button__text--play-animation' : ""}`} 
                onClick={handleClick}>
                </p>
            </button>
        </section>
    )
};
export default ExerciseFour;