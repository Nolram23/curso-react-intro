import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm () {

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodo, setNewTodo] =React.useState('');
    const onAdd = (event)=>{
        event.preventDefault();
        setOpenModal(false);
        addTodo(newTodo);
    }

    const onCancel = (event)=>{
        event.preventDefault();
        setOpenModal(false);
    }
    const onChange = (event)=> {
        setNewTodo(event.target.value);
    } 


    return (
        <form>
            <label>Escribe tu nuevo TODO</label>
            <textarea   
            value={newTodo}
            onChange = {onChange}
            placeholder ="Cortar cebolla  para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button 
                type="button"
                className="TodoForm-button TodoForm-button-add"
                onClick={onAdd}
                >
                    Añadir
                </button>
                <button 
                className="TodoForm-button TodoForm-button-cancel"
                onClick={onCancel}
                >Cancelar</button>
            </div>
        </form>
    )
}

export {TodoForm};