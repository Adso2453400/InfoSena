import '/src/Css/TodoList.css';

// Subcomponente de Tecnico que recibe props y las renderiza
function TodoList( props ) {
    return (
      <ul className="responsive-todo-list">
        {props.children}
      </ul>
    );
}

// Exportamos el componente
export { TodoList };