const Child = (props) => {
const dt = 'this data from child';

  return (
    <>
      <button className="btn btn-success" onClick={props.handleClick}>
        click
      </button>
    </>
  );
};

export default Child;
