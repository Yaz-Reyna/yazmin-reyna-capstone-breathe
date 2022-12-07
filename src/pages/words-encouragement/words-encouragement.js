import './words-encouragement.scss';
import Jokes from '../../components/Jokes/Jokes'
import Words from '../../components/Words/Words'

function WordsEncouragement() {

    return(
        <main className='main'>
            
                <div>
                    <Words/>
                </div>
                    
                <div>
                    <Jokes/>
                </div>

        </main>
    )
}

export default WordsEncouragement;