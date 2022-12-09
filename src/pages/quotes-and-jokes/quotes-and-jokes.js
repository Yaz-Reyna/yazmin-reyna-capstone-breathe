import './quotes-and-jokes.scss';
import Jokes from '../../components/Jokes/Jokes';
import Quotes from '../../components/Quotes/Quotes';
import Header from "../../components/Header/Header.js";

function QuotesAndJokes() {

    return(
        <>
            <Header/>
            <main className='main-section'>
                <div>
                    <Quotes/>
                </div>
                    
                <div>
                    <Jokes/>
                </div>
            </main>
        </>
    )
}

export default QuotesAndJokes;