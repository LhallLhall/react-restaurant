export default function Buttons(props) {
  console.log(props.page);
  return (
    <div className="col-6 col-md-2 col-lg-2 p-1 d-flex justify-content-center">
      <button
        className="btn btn-dark btn-lg "
        style={{ minWidth: "130px" }}
        onClick={() => props.handleClick(props.text)}
      >
        {props.text}
      </button>
    </div>
  );
}
