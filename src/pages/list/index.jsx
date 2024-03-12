import "./list.scss";
import { listData } from "../../lib/dummydata.js";
import { Card, Map, Filter } from "../../components";

export const List = () => {
  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item, i) => {
            return <Card key={i} item={item} />;
          })}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
};
