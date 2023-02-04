export function TodoList({ todoList, onCheckboxChange }) {
  return (
    <ul>
      {todoList.map((e, index) => (
        <li key={index}>
          {e}
          <input
            className="checkbox"
            type="checkbox"
            checked={false}
            onChange={() => onCheckboxChange(index)}
          />
        </li>
      ))}
    </ul>
  );
}
