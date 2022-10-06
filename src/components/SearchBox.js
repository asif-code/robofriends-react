const SerachBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa3">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SerachBox;
