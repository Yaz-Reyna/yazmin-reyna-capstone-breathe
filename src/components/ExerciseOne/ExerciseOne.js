import "./ExerciseOne.scss";
import {useState} from 'react';

function ExerciseOne () {
    const [isPlaying, setIsPlaying] = useState(false)
    const [showText, setShowText] = useState(0)

    const handleClick = () => {
        setIsPlaying(true)

        const  timer = setInterval (() => {
            setShowText(prevIndex => (prevIndex === 0 ? 1 :0));
        }, 8000);
    }

    const texts = ["Breathe in", "Breathe out"];

    return (
        <section className="breathe1">
            <div className="breathe1__container">
                <button className= {`breathe1__in-out ${isPlaying ? 'breathe1__in-out--play-animation' : "" }`} 
                onClick={handleClick}>
                    <p className= {`breathe1__in-out__instructions ${isPlaying ? 'breathe1__in-out__instructions--play-animation' : ""}`}
                    onClick={handleClick} >{texts[showText]}</p>
                </button>
            </div>
        </section>
    )
}

export default ExerciseOne;