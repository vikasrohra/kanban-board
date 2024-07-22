import React from "react";

import Group from "./Group";

import styles from "./Groups.module.css";
import { getPriorityName } from "../../Common";

const Groups = ({ groups, groupingFactor }) => {
  return (
    <div className={styles.groups}>
      {Object.keys(groups).map((g, i) => {
        return (
          <>
          {/* STATUS */}
            {groupingFactor === "1" && (
              <Group
                group={groups[g]}
                key={`Group - ${g}`}
                name={g}
                status={g}
                count={groups[g].length}
              />
            )}
            {/* USER */}
            {groupingFactor === "2" && (
              <Group
                group={groups[g]}
                key={`Group - ${g}`}
                name={g}
                username={groups[g][0].username}
                count={groups[g].length}
              />
            )}
            {/* PRIORITY */}
            {groupingFactor === "3" && (
              <Group
                group={groups[g]}
                key={`Group - ${g}`}
                name={getPriorityName(g)}
                priority={g}
                count={groups[g].length}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Groups;
