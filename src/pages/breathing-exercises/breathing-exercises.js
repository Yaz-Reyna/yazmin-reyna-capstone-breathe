import Header from "../../components/Header/Header.js";
import ExerciseOne from "../../components/ExerciseOne/ExerciseOne";
import ExerciseTwo from "../../components/ExerciseTwo/ExerciseTwo.js";

import "./breathing-exercises.scss";

function BreathingExercises() {

    return(
        <>
            <Header/>
            <main className='main-breathing'>
            <h2 className="main-breathing__title">Click on any of the shapes!</h2>
                <div>
                    <ExerciseOne/>
                </div>
                <div>
                    <ExerciseTwo/>
                </div>
            </main>
        </>
    )
}

export default BreathingExercises;