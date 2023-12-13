import './modal.css'

interface Props {
  offModal:Function
  checkOut:Function
}

const Modal = (props:Props):JSX.Element => {
  return (
    <section className="modalOverlay">
        <div className="modal">
            <p>Are you SURE ?</p>
            <div className="modalActions">
                <button onClick={() => props.offModal()}>No</button>
                <button onClick={() => 
                  {props.offModal()
                  props.checkOut()}}>
                    Yes</button>
            </div>
        </div>
    </section>
  )
}

export default Modal