import { Link } from "react-router-dom";
import { useState } from "react";

export default function LibraryCard({ movie, handleAddToStore }) {
  const [toggleTags, setToggleTags] = useState(false);

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            {movie.poster_url && (
              <div className="col-4">
                <img
                  src={`${movie.poster_url}`}
                  alt={`Poster of ${movie.title}`}
                />
              </div>
            )}
            <div className="col">
              <div className="row">
                <div>
                  <span className="fs-2 fw-bold text-gray-700">
                    {movie.title}
                  </span>
                  <span className="">
                    {movie.genres.map((genre) => (
                      <span className="px-1 rounded-3 mx-1 border-radius-1 bg-primary text-black">
                        {genre}
                      </span>
                    ))}
                  </span>
                </div>
              </div>

              <div className="row">
                <span className="col-8 fs-6 fw-bold">
                  {movie.directors.length > 1
                    ? movie.directors[0] + "..."
                    : movie.directors[0]}
                </span>
                <span className="col-2 fs-6">{movie.release_year}</span>
                <span className="col-2 fs-6">
                  {movie.imdb_rating ? movie.imdb_rating : "--"}
                </span>
              </div>

              {movie.summary && (
                <div className="row py-3">
                  <div className="rounded p-2 text-gray-300">
                    {movie.summary.length > 150
                      ? movie.summary.substring(0, 150) + "..."
                      : movie.summary}
                  </div>
                </div>
              )}

              {/* {movie.tags.length > 0 && (
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <div class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        onClick={() => setToggleTags(!toggleTags)}
                      >
                        Tags
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      class={`accordion-collapse ${
                        toggleTags ? "show" : "collapse"
                      }`}
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <div>
                        {movie.tags.map((tag) => (
                          <span className="px-1 rounded-3 mx-1 border-radius-1 bg-primary text-black">
                            {tag}
                          </span>
                        ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}


              <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">
                  <button className="btn btn-primary" onClick={() => handleAddToStore(movie.id)}>
                    {/* <i className="bi bi-plus p-2"></i> */}
                    Add to Store
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
