import "./ExerciseTwo.scss";
import {useState} from 'react';

function ExerciseTwo () {

    const [isPlaying, setIsPlaying] = useState(false)
    const [showText, setShowText] = useState(0)

    const handleClick = () => {
        setIsPlaying(true)
        
        const  timer = setInterval (() => {
            setShowText(prevIndex => (prevIndex === 0 ? 1 :0));
        }, 4000);
    }

    const texts = ["Inhale", "Exhale"];

return ( 
    <section className="breathe2">
        <button className="breathe2__button" onClick={handleClick}>
            <p className={`breathe2__button--inhale ${isPlaying ? 'in-play' : ""}`}>{texts[showText]}</p>
            <div className="breathe2__button__circle-container">
                <div className={`breathe2__button--circle ${isPlaying ? 'pink' : ""}`} ></div>
                <div className={`breathe2__button--circle ${isPlaying ? 'turquoise' : ""}`}></div>
            </div>
        </button>
    </section>
    )
}

export default ExerciseTwo;