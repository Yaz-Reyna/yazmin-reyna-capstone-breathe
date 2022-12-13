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
            <h2 className="main-breathing__title">Click on any of the shapes!</h2>
                <div className="main-breathing__one">
                    <ExerciseOne/>
                </div>
                {/* <div>
                    <ExerciseTwo/>
                </div> */}
                <div className="main-breathing__one">
                    <ExerciseThree/>
                </div>

                <div className="main-breathing__one">
                    <ExerciseFour/>
                </div>
            </main>
        </>
    )
}

export default BreathingExercises;