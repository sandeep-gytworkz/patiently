import './modal.css';

const Modal = ({ handleClose, show, children, top, left }) => {
//   const showHideClassName = show ? "modal display-block" : "modal display-none";
  const showHideClassName = "modal display-block";

  return (
    <div style={{top: top, left: left-300}} className={showHideClassName}>
      <section>
        {/* <button type="button" onClick={handleClose}>
          Close
        </button> */}
        <ul className='button-list'>
            <li>Something</li>
            <li>Something</li>
        </ul>
      </section>
    </div>
  );
};

export default Modal;