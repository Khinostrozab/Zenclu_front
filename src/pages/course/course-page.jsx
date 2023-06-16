import { memo, useEffect, useState } from "react";
import useGetCourseByIdQuery from "../../hooks/course/use-get-course-byId-query";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/common";
import { ENV } from "../../constants/environment";

const CoursePage = () => {
  const [source, setSource] = useState(null);
  const { id } = useParams();
  const { isSuccess, isLoading, getCoursesById, data } =
    useGetCourseByIdQuery();
  useEffect(() => {
    getCoursesById(id);
  }, []);

  const handleOnViewVideo = (fileName) => {
    setSource(`${ENV.serverUrl}/video/stream/${fileName}`);
  };

  return (
    <section className="py-2">
      {isLoading && <Loading />}
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row">
          <div className="col-4">
            <ol className="list-group list-group-numbered">
              {isSuccess &&
                data?.videos.map((video) => (
                  <li
                    key={video.id}
                    className="list-group-item d-flex justify-content-between align-items-start"
                    role="button"
                    onClick={() => handleOnViewVideo(video.url)}
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{video?.name}</div>
                      <i className="bi bi-play-btn"></i>
                      {"  "}
                      {Math.round(video?.duration)} min
                    </div>
                  </li>
                ))}
            </ol>
          </div>
          <div className="col-8">
            {source && (
              <div className="card px-2 py-2 mt-2">
                <video width="100%" height={272} controls src={source} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(CoursePage);
