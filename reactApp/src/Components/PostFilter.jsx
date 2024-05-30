import { MySelect } from "../UI/Select/MySelect";

function PostFilter({ filter, setFilter }) {
  return (
    <>
      <input
        type="text"
        value={filter.search}
        onChange={(e) => {
          setFilter({ ...filter, search: e.target.value });
        }}
      />
      <MySelect
        value={filter.sort}
        onChange={(param) => {
          setFilter({ ...filter, sort: param });
        }}
        option={[
          { name: "By Title", value: "title" },
          { name: "By Description", value: "body" },
        ]}
      />
    </>
  );
}
export { PostFilter };
