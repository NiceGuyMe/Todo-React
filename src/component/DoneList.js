export function DoneList({ doneList }) {
  return (
    <>
      <h1>DONE</h1>
      <ul>
        {doneList.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </>
  );
}
