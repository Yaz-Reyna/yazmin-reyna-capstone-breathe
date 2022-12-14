import './quotes-and-jokes.scss';
import Jokes from '../../components/Jokes/Jokes';
import Quotes from '../../components/Quotes/Quotes';
import Header from "../../components/Header/Header.js";
import CommentsForm from '../../components/CommentsForm/CommentsForm';
import Comments from '../../components/Comments/Comments';

function QuotesAndJokes() {

    return(
        <>
            <Header/>
            <main className='main-section'>

                <div className='main-section__quotes-jokes-container'>
                    <div className='main-section__quotes-jokes-container--quotes'>
                        <Quotes/>
                    </div>
                    
                    <div className='main-section__quotes-jokes-container--jokes'>
                        <Jokes/>
                    </div>
                </div>
                
                <div className='main-section__form-comments-container'>
                    <div className='main-section__form-comments-container--form'>
                        <CommentsForm/>
                    </div>

                    <div className='main-section__form-comments-container--comments'>
                        <Comments/>
                    </div>
                </div>
                
            </main>
        </>
    )
}

export default QuotesAndJokes;