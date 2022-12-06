import './home.scss';
import { NavLink } from "react-router-dom";

function HomePage() {

    return(
        <main className='main'>
            
                <h1 className='main__title'>BREATHE</h1>
                <div className='main__links-container'>
                    <NavLink className='main__links-container--link'>
                        Relaxing Music
                    </NavLink>
                    <NavLink className='main__links-container--link'>
                        Breathing Exercises
                    </NavLink>
                    <NavLink className='main__links-container--link'>
                        Words of Encouragement
                    </NavLink>
                    
                </div>
           
        </main>
    )
}

export default HomePage;