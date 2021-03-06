import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty } = props;
  console.log(items);
  return (
    <ul className="list-group">
      {items.map((item) => {
        return (
          <li key={item[valueProperty]} className="list-group-item">
            {item[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};

export default ListGroup;
