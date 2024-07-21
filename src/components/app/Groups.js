import React from "react";

import Group from "./Group";

import styles from "./Groups.module.css";
import { getPriorityName } from "../../Common";

const Groups = ({ groups, groupingFactor }) => {
  return (
    <div className={styles.groups}>
      {Object.keys(groups).map((g, i) => {
        return (
          <Group
            group={groups[g]}
            key={`Group - ${g}`}
            name={groupingFactor === "3" ? getPriorityName(g) : g}
            status={g}
            priority={g}
            count={groups[g].length}
          />
        );
      })}
    </div>
  );
};

export default Groups;
