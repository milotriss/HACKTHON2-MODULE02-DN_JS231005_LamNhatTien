import Add from '../add/add';
import './main.css'
import { FaTrashAlt } from "react-icons/fa";
import { PropsReview, Review } from '../interfaces/interfaces';


const Main = (props:PropsReview) => {

  return (
    <main>
        {props.review.map((item:Review) => {
            return (
                <section key={item.id} className="review">
                    <div className="reviewGroup">
                    <p>{item.content}</p>
                    <div className="reviewActions">
                        <span>{item.date}</span>
                        <FaTrashAlt 
                        onClick={() => props.deleteReview(item.id)}
                        className='iconReview'
                        />
                    </div>
                </div>
                </section>
            )
        })}
        <Add addReview={props.addReview}/>
    </main>
  )
}

export default Main