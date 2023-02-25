export const Filter = ({ handleChange, filter }) => {
  return (
    <label>
      Find contacts by name <br />
      <input value={filter} onChange={handleChange} type="text" name="filter" />
    </label>
  );
};
