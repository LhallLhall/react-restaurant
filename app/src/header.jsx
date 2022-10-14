export default function header() {
  console.log();
  return (
    <>
      <div className="row border-bottom border-dark border-3 mb-2">
        <div className="col-3 col-lg-2">
          <img
            className="p-1 img-fluid"
            src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...eDqBZPmB7OwXs1M3EMoAJtliYogfVq8...w6 "
            style={{ width: "150px" }}
          />
        </div>
        <div className="col-7 col-lg-8 d-flex justify-content-center align-items-bottom">
          <h1 className="text-alert m-2 text-white ">The Garden of Eat'n</h1>
        </div>
      </div>
    </>
  );
}
