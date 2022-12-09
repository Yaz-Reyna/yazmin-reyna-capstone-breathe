import './quotes-and-jokes.scss';
import Jokes from '../../components/Jokes/Jokes'
import Quotes from '../../components/Words/Words'

function QuotesAndJokes() {

    return(
        <main className='main-section'>
            
                <div>
                    <Quotes/>
                </div>
                    
                <div>
                    <Jokes/>
                </div>

        </main>
    )
}

export default QuotesAndJokes;