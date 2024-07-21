import React from "react";

import styles from "./OrderFilter.module.css";

const OrderFilter = ({ orderChangeHandler, orderingFactor }) => {
  return (
    <select
      name="order"
      className={styles.select}
      onChange={(e) => orderChangeHandler(e.target.value)}
      value={orderingFactor}
    >
      <option value="1">Priority</option>
      <option value="2">Title</option>
    </select>
  );
};

export default OrderFilter;
