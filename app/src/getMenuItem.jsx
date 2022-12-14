export default function getMenuItem(props) {
  let menu = props.data.filter((item) => item.category.title === props.page);

  return menu.map((menuItem, i) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 p-4 justify-content-center">
        <div className="card h-100">
          <div className="card-body border-0 text-center bg-dark">
            <h3 className="card-title text-light">{menuItem.title}</h3>
            <h5 className="card-text mb-2 text-light">${menuItem.price}</h5>
            <p>
              <button
                className="btn btn-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapseWidthExample" + i}
                aria-expanded="false"
                aria-controls={"collapseWidthExample" + i}
              >
                Description
              </button>
            </p>
            <div className="d-flex justify-content-center">
              <div
                className="collapse collapse-horizontal"
                id={"collapseWidthExample" + i}
              >
                <div className="card card-body" style={{ width: "300px" }}>
                  {menuItem.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
