import './CommentsForm.scss';
// import axios from 'axios';


function CommentsForm() {
    return (
        <form className='qj-form' action="submit">
            <label className='qj-form__label' htmlFor="name">
                Name
                <input className='qj-form__input qj-form__input--name'  type="text" placeholder='Enter your name here' name='name' />
            </label>
            <label className='qj-form__label' htmlFor="comment">
                Comment 
                <textarea className='qj-form__input qj-form__input--comment' name="comment" placeholder='Write your comment here'></textarea>
            </label>
        </form>
    )
}

export default CommentsForm;