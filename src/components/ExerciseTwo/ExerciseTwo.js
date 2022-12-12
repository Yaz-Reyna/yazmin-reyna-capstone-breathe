import "./ExerciseTwo.scss";
import {useState} from 'react';

function ExerciseTwo () {

const [stage, setStage] = useState(0);

setInterval(() => {
    if (stage === 0) {
        setStage(1);
    } else if (stage === 1) {
        setStage(2);
    } else {
        setStage(0);
    }
}, 9000);

return ( 


<section className="breathe2">

    <div className="breathe2__container">
        {stage === 0 && <p className=" breathe2__container--inhale">Inhale deeply and slowly through your nose, feeling your chest and belly expand.</p>}
        {stage === 1 && <p className="breathe2__container--hold"> Hold your breath for a few seconds.</p>}
        {stage === 2 && <p className="breathe2__container--exhale">Exhale slowly and fully through your mouth, feeling your chest and belly deflate.</p>}
    </div>

</section>
    )
}

export default ExerciseTwo;