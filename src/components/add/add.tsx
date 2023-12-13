import './add.css'
import { FaArrowUp } from "react-icons/fa6";
import { PropsAdd } from '../../interfaces/interfaces';
import {Review} from '../../interfaces/interfaces'
import { ChangeEvent, useState } from 'react';
import dateUi from "../../date"


const Add = (props:PropsAdd):JSX.Element => {
    const [content,setContent] = useState<string>('')
    const [count,setCount] = useState<number>(200)
    console.log(content);
    
    const handleAddReview = () :void =>{
        const newReview:Review = {
            id: Math.random() * 100,
            content: content,
            date: dateUi
        }
        props.addReview(newReview)
        setContent('')
    }


return (
    <section className="addReview">
            <div className="addGroup">
                <textarea 
                value={content}
                placeholder='Type review here'
                onChange={(event:ChangeEvent<HTMLTextAreaElement>) => 
                    {
                        setContent(event.target.value)
                        if (200 - event.target.value.length >= 0) {
                            setCount(200 - event.target.value.length)
                        }else {
                            alert('Stop Please!!!!')
                        }
                    }}
                style={{ resize:"none" }} 
                name="" 
                id="">
                </textarea>
                <div onClick={handleAddReview} 
                className="addActions">
                    <span>{count} left</span>
                    <div className="addAction">
                        <p>PUBLISH</p>
                        <FaArrowUp
                        className='iconAdd'/>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Add