import './CommentsForm.scss';
import axios from 'axios';
import { useRef, useState } from 'react';


function CommentsForm() {
    const formRef = useRef();
    const [postComment, setPostComment] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newComment = {
            name: formRef.current.name.value,
            comment: formRef.current.comment.value
        }

        axios.post('http://localhost:8080/comments', newComment)
        .then((res) => {
            setPostComment(postComment.concat(res.data))
        })
        formRef.current.reset();
    }

    const handleCancel = () => {
        formRef.current.reset();
    }

    return (
        <section className='comments'>
            <h2 className='comments__title'>Leave us a comment</h2>
            <form className='comments__qj-form'  onSubmit={handleSubmit} ref={formRef}>
                <label className='comments__qj-form--label' htmlFor="name">
                    Name
                    <input 
                    className='comments__qj-form__input comments__qj-form__input--name '  
                    type="text" 
                    placeholder='Enter your name here' 
                    name='name'
                    />
                </label>
                <label className='comments__qj-form--label' htmlFor="comment">
                    Comment 
                    <textarea 
                    className='comments__qj-form__input comments__qj-form__input--comment' 
                    name="comment" 
                    placeholder='Write your comment here'>
                    </textarea>
                </label>
                <div className='comments__qj-form__buttons-container'>
                    <button type='submit' className='comments__qj-form__buttons-container--add'>Submit </button>
                    <button type="button" className='comments__qj-form__buttons-container--cancel'onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </section>
    
    )
}

export default CommentsForm;