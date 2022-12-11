import ExerciseOne from "../../components/ExerciseOne/ExerciseOne";
import Header from "../../components/Header/Header";
import "./breathing-exercises.scss";

function BreathingExercises() {

    return(
        <>
            <Header/>
            <main className='main-breathing'>
                <div>
                    <ExerciseOne/>
                </div>
            </main>
        </>
    )
}

export default BreathingExercises;