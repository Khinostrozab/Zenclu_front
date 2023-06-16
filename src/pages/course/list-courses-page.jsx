import { memo, useEffect } from "react";
import useGetCoursesByUserId from "../../hooks/course/use-get-courses-byuserId-query";
import { Loading } from "../../components/common";
import { Link } from "react-router-dom";
import { useAppContext } from "../../hooks/common";

const ListCoursesPage = () => {
  const { isLoading, data: courses, getCoursesById } = useGetCoursesByUserId();
  const { user } = useAppContext();
  useEffect(() => {
    getCoursesById(user.id);
  }, []);
  return (
    <div className="container  align-items-center justify-content-center col-8">
      {isLoading && <Loading />}

      <div>
        <table className="table caption-top">
          <caption>
            <Link className="btn btn-success" to="/create-course">
              Crear un nuevo curso
            </Link>
          </caption>
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Categoria</th>
              <th scope="col">Precio</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {courses &&
              courses.map((course, index) => (
                <tr key={course.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{course.name}</td>
                  <td>{course.categories.name}</td>
                  <td>S/.{course.price}</td>
                  <td>
                    <Link
                      to={`/video/${course.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Agregar episodio
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(ListCoursesPage);
