import "./ExerciseFour.scss";
import {useState} from 'react';
import inhale from "../../assets/images/inhale.png";
import exhale from "../../assets/images/exhale.png"

function ExerciseThree () {
    const [isPlaying, setIsPlaying] = useState(false)

    const handleClick = () => {
        setIsPlaying(true)
    }

return ( 


<section className="breathe4">

    <button className= {`breathe4__button ${isPlaying ? 'breathe4__button--play-animation' : ""}`} onClick={handleClick}>
        <div>
            <img src={inhale} alt="Inhale" />
        </div>
        <div>
            <img src={exhale} alt="Exhale" />
        </div>
    </button>
</section>
    )
}

export default ExerciseThree;