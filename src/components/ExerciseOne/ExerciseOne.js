import "./ExerciseOne.scss";
import {useState} from 'react';

function ExerciseOne () {
    const [isPlaying, setIsPlaying] = useState(false)

    const handleClick = () => {
        setIsPlaying(true)
    }

    return (
        <section className="breathe1">
            <div className="breathe1__container">
                <button className= {`breathe1__container--in-out ${isPlaying ? 'breathe1__container--play-animation' : "" }`} 
                onClick={handleClick}>
                    <p className= {`breathe1__container--in-out__instructions ${isPlaying ? 'breathe1__container--in-out__instructions--play-animation' : ""}`}
                    onClick={handleClick} ></p>
                </button>
            </div>
        </section>
    )
}

export default ExerciseOne;