import React from "react";

import Group from "./Group";

import styles from "./Groups.module.css";

const Groups = ({ groups }) => {
  return (
    <div className={styles.groups}>
      {Object.keys(groups).map((g, i) => {
        return <Group group={groups[g]} key={`Group - ${g}`} />;
      })}
    </div>
  );
};

export default Groups;
