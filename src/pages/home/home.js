import './home.scss';
import { NavLink } from "react-router-dom";

function HomePage() {

    return(
        <main className='main'>
            <div className='main__container'>
                <h1 className='main__container__title'>BREATHE</h1>
                <div className='main__container__links-container'>
                    <NavLink className='main__container__links-container--link'>
                        Breathing Exercises
                    </NavLink>
                    <NavLink className='main__container__links-container--link'>
                        Words of Encouragement
                    </NavLink>
                </div>
            </div>
        </main>
    )
}

export default HomePage;