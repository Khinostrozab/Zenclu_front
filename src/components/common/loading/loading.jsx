import { memo } from "react";

import "./loading.scss";

const Loading = () => (
  <div className="loading" data-testid="loading">
    <div className="loading__container">
      <div className="loading__spinner" />
    </div>
    <h5 className="text-center">Cargando...</h5>
  </div>
);

export default memo(Loading);
