function Pagination({ pagesArray, page, setPage }) {
  return (
    <div className="page__wrapper">
      {pagesArray.map((item) => {
        return (
          <span
            onClick={() => {
              setPage(item);
            }}
            key={item}
            className={item === page ? "page__current" : "page"}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
export { Pagination };
