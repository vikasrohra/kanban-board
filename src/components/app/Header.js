import React, { useState } from "react";

import Dropdown from "../ui/Dropdown";

import styles from "./Header.module.css";
import GroupFilter from "./GroupFilter";
import OrderFilter from "./OrderFilter";

const Header = ({
  changeGroupingFactor,
  changeOrderingFactor,
  groupingFactor,
  orderingFactor,
}) => {
  const [showDisplayList, setDisplayList] = useState(false);

  const toggleList = () => {
    setDisplayList((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.listContainer}>
        <Dropdown toggleList={toggleList} withShadow={true}>
          {showDisplayList && (
            <ul className={styles.displayList}>
              <li className={styles.displayListItem}>
                <p>Grouping</p>
                <GroupFilter
                  groupChangeHandler={changeGroupingFactor}
                  groupingFactor={groupingFactor}
                />
              </li>
              <li className={styles.displayListItem}>
                <p>Ordering</p>
                <OrderFilter
                  orderChangeHandler={changeOrderingFactor}
                  orderingFactor={orderingFactor}
                />
              </li>
            </ul>
          )}
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
