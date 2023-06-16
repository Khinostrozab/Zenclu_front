import { memo, useEffect } from "react";
import useGetAllCoursesQuery from "../../hooks/course/use-get-all-courses-query";
import { Loading } from "../../components/common";
import { ENV } from "../../constants/environment";
import { Link } from "react-router-dom";

const AllCoursesPage = () => {
  const {
    data: courses,
    isLoading,
    getAllcourses,
    isSuccess,
  } = useGetAllCoursesQuery();
  useEffect(() => {
    getAllcourses();
  }, []);

  return (
    <div>
      <section>
        {isLoading && <Loading />}
        <form className="d-flex col-6 mx-auto" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        {isSuccess &&
          courses.map((course) => (
            <div key={course.id} className="container py-2">
              <div className="row justify-content-center mb-3">
                <div className="col-md-12 col-xl-10">
                  <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                          <div className="bg-image hover-zoom ripple rounded ripple-surface">
                            <img
                              src={`${ENV.serverUrl}/course/image/${course.imagePreview}`}
                              className="w-100"
                            />
                            <a href="#!">
                              <div className="hover-overlay">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor:
                                      "rgba(253, 253, 253, 0.15)",
                                  }}
                                ></div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                          <h5>{course.name}</h5>
                          <div className="d-flex flex-row">
                            <div className="text-danger mb-1 me-2">
                              <i className="bi-star-fill"></i>
                              <i className="bi-star-fill"></i>
                              <i className="bi-star-fill"></i>
                              <i className="bi-star-fill"></i>
                            </div>
                            <span>310</span>
                          </div>
                          <div className="mt-1 mb-0 text-muted small">
                            <span>{course.user.fullName}</span>
                          </div>
                          <div className="mb-2 text-muted small">
                            <span>{course.duration} horas en total</span>
                            <span className="text-primary"> • </span>
                            <span>{course.chapterCount} clases</span>
                          </div>
                          <p className="text-truncate mb-4 mb-md-0">
                            {course.description}
                          </p>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                          <div className="d-flex flex-row align-items-center mb-1">
                            <h4 className="mb-1 me-1">S/.{course.price}</h4>
                          </div>
                          <div className="d-flex flex-column mt-4">
                            <Link
                              className="btn btn-primary btn-sm mt-2"
                              to={"/checkout/" + course.id}
                            >
                              Comprar
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default memo(AllCoursesPage);
