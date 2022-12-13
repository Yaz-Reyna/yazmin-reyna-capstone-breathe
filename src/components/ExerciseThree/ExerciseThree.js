import "./ExerciseThree.scss";
import {useState} from 'react';

function ExerciseThree () {
    const [isPlaying, setIsPlaying] = useState(false)

    const handleClick = () => {
        setIsPlaying(true)
    }

return ( 


<section className="breathe3">

    <button className= {`breathe3__button ${isPlaying ? 'breathe3__button--play-animation' : ""}`} onClick={handleClick}>
        <p className= {`breathe3__button--inhale ${isPlaying ? 'breathe3__button--inhale__play-animation' : ""}`} onClick={handleClick}></p>

        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
        <div className={` ${isPlaying ? 'circle' : ""}`} onClick={handleClick}></div>
    </button>
</section>
    )
}

export default ExerciseThree;