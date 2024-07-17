import React, { useState } from "react";

import Dropdown from "../ui/Dropdown";

import styles from "./Header.module.css";

const Header = () => {
  const [showDisplayList, setDisplayList] = useState(false);

  const toggleList = () => {
    setDisplayList((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <Dropdown toggleList={toggleList}>
        {showDisplayList && (
          <ul className={styles.displayList}>
            <li className={styles.displayListItem}>
              <p>Grouping</p>
              <Dropdown />
            </li>
            <li className={styles.displayListItem}>
              <p>Ordering</p>
              <Dropdown />
            </li>
          </ul>
        )}
      </Dropdown>
    </header>
  );
};

export default Header;
