import React from "react";

import Card from "../ui/Card";

import styles from "./Group.module.css";

const Group = ({ group }) => {
  return (
    <div className={styles.group}>
      {group.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default Group;
