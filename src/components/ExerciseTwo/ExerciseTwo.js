import "./ExerciseTwo.scss";
import {useState} from 'react';

function ExerciseTwo () {

    const [isPlaying, setIsPlaying] = useState(false)

    const handleClick = () => {
        setIsPlaying(true)
    }

return ( 


<section className="breathe2">
    <button className="breathe2__button" onClick={handleClick}>
        <p className={`breathe2__button--inhale ${isPlaying ? 'in-play' : ""}`}>Inhale</p>
        <div className={`breathe2__button--circle ${isPlaying ? 'pink' : ""}`} ></div>
        <div className={`breathe2__button--circle ${isPlaying ? 'turquoise' : ""}`}></div>
        <p className={`breathe2__button--exhale ${isPlaying ? 'out-play' : ""}`}>Exhale</p>
    </button>
    
</section>
    )
}

export default ExerciseTwo;