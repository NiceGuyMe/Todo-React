export function DoneList({ doneList }) {
  return (
    <ul>
      {doneList.map((e, index) => (
        <li key={index}>{e}</li>
      ))}
    </ul>
  );
}
