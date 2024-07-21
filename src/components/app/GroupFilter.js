import React from "react";

import styles from "./GroupFilter.module.css";

const GroupFilter = ({ groupChangeHandler, groupingFactor }) => {
  return (
    <select
      name="group"
      className={styles.select}
      onChange={(e) => groupChangeHandler(e.target.value)}
      value={groupingFactor}
    >
      <option value="1">Status</option>
      <option value="2">User</option>
      <option value="3">Priority</option>
    </select>
  );
};

export default GroupFilter;
