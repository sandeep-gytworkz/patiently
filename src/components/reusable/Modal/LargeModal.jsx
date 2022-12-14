import { GrClose } from 'react-icons/gr';
import './modal.css';

const LargeModal = ({questionsOpen, setQuestionsOpen}) => {

    const showHideClassName = questionsOpen ? "large-modal display-block" : "large-modal display-none";

  return (
    <div className={showHideClassName}>
    <section className="modal-main">
      <button type="button" onClick={()=>{setQuestionsOpen(false)}}>
        <GrClose size={`25px`} />
      </button>
      <div className='question-bar'>
        <p>This is a Question ?</p>
      </div>
      <div className='answer-bar'>
        This is your answer
      </div>
    </section>
  </div>
  )
}

export default LargeModal