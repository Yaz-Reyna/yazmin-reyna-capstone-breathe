import Header from "../../components/Header/Header.js";
import ExerciseOne from "../../components/ExerciseOne/ExerciseOne";
import ExerciseTwo from "../../components/ExerciseTwo/ExerciseTwo.js";
import ExerciseThree from "../../components/ExerciseThree/ExerciseThree.js";
import ExerciseFour from "../../components/ExerciseFour/ExerciseFour.js";
import "./breathing-exercises.scss";

function BreathingExercises() {

    return(
        <>
            <Header/>
            <main className='main-breathing'>
            <h2 className="main-breathing__title">Click on any of the boxes!</h2>
            <div className="main-breathing__container">
                <div className="main-breathing__container--one-two">
                    <div className="main-breathing__one">
                        <ExerciseOne/>
                    </div>
                    <div className="main-breathing__one">
                        <ExerciseTwo/>
                    </div>
                </div>
                
                <div className="main-breathing__container--one-two">
                    <div className="main-breathing__one">
                        <ExerciseThree/>
                    </div>

                    <div className="main-breathing__one">
                        <ExerciseFour/>
                    </div>
                </div>
                
            </div>
            
                
            </main>
        </>
    )
}

export default BreathingExercises;