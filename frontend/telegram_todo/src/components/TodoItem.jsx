import PropTypes from 'prop-types';
import '../styles/TodoItem.scss'

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
      <div className="todo-checkbox-box">
        <input 
          type="checkbox" 
          className='todo-checkbox'
          checked={todo.completed} 
          onChange={() => toggleTodo(todo.id)} 
        />
        <span 
          className={todo.completed ? 'completed' : ''} onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
