import "./list.scss";
import { listData } from "../../lib/dummydata";
import { Card } from "../card";

export const List = () => {
  return (
    <div className="list">
      {listData.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </div>
  );
};
