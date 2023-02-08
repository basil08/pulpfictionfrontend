export default function RightSideBar() {
  return (
    <>
        <div className="card  m-3 border-0">
          <div className="card-body">
            <div className="col">
            <div className="row">
              <button type="button" class="btn btn-primary border">
                <i className="bi bi-plus-circle pe-2"></i>
                Add to Library
              </button>
            </div>

            <div className="row mt-3">
              <p className="h4 text-decoration-underline">Discover</p>
            </div>

            <div className="row mt-3">
              <p className="h4 text-decoration-underline">Newly Added</p>
            </div>

            <div className="row mt-3">
              <p className="h4 text-decoration-underline">New Reviews</p>
            </div>
            </div>
          </div>
      </div>
    </>
  );
}
