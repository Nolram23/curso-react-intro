import './CreateTodoButton.css';

function CreateTodoButton () {
    return (
     <button className='CreateTodoButton'
     onClick={(e)=>{
      console.log('le diste click');
     }}
     >+</button>
    );
  }

  export { CreateTodoButton };
