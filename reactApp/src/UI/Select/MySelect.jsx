function MySelect({ option = [], defaultValue = "Sort By", onChange, value }) {
  return (
    <div>
      <select
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {option.map((el) => {
          return (
            <option key={el.name} value={el.value}>
              {el.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export { MySelect };
