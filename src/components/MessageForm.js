import React from 'react';
import Attachment from '../assets/svg/Attachment';

const MessageForm = ({handleSubmit, text, setText, setImg}) => {
    return (
        <form className="message_form" onSubmit={handleSubmit}>
            <label htmlFor="img">
                <Attachment />
            </label>
            <input 
                onChange={(e)=>setImg(e.target.files[0])}
                type="file" 
                id="img" 
                accept="image/*" 
                style={{display: 'none' }} 
            />
            <div>
                <input 
                    type="text"
                    placeholder="Enter Message"
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                />
            </div>
            <button className="btn">Send</button>
        </form>
    )
}

export default MessageForm;