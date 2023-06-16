import { memo, useEffect } from "react";
import { Loading } from "../../components/common";
import useGetCheckoutCoursesByUserIdQuery from "../../hooks/course/use-checkout-courses-by-userId-query";
import { useAppContext } from "../../hooks/common";
import { ENV } from "../../constants/environment";
import { Link } from "react-router-dom";

const LearningPage = () => {
  const { user } = useAppContext();
  const { data, isLoading, getCheckoutCoursesByUserId, isSuccess } =
    useGetCheckoutCoursesByUserIdQuery();
  useEffect(() => {
    getCheckoutCoursesByUserId(user.id);
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {isSuccess &&
              data.map(({ id, course }) => (
                <div key={id} className="col mb-2">
                  <div className="card h-100 mx-0">
                    <img
                      className="card-img-top"
                      src={`${ENV.serverUrl}/course/image/${course?.imagePreview}`}
                      alt="..."
                    />
                    <div className="card-body p-0">
                      <div className="text-center">
                        <small className="fw-bolder">{course?.name}</small>
                      </div>
                    </div>
                    <div className="card-footer p-0 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <Link
                          className="btn btn-outline-dark mt-auto"
                          to={`/course/${course?.id}`}
                        >
                          Ver curso
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(LearningPage);
