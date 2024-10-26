import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoForm.scss';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  const animateButton = (e) => {
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');

    setTimeout(() => {
      e.target.classList.remove('animate');
    }, 700);
  };


  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        className='todo-input'
        type="text"
        placeholder="Добавьте задачу"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className='todo-add-button' onClick={animateButton}>Добавить</button>
    </form>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
