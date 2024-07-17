import React from "react";

import styles from './Card.module.css';

const Card = ({item}) => {
  return (
    <div key={`${item.id} - ${item.name}`} className={styles.card}>
      <header className={styles.cardHeader}>
        <p className={styles.cardTitle}>{item.id}</p>
        <p>User</p>
      </header>
      <section className={styles.cardSection}>
        <p className={styles.cardPara} title={item.title}>
          {item.title}
        </p>
      </section>
      <footer className={styles.cardFooter}>
        <div className={styles.info}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.625 0.875C1.67184 0.875 0.875 1.67184 0.875 2.625V11.375C0.875 12.3281 1.67184 13.125 2.625 13.125H11.375C12.3281 13.125 13.125 12.3281 13.125 11.375V2.625C13.125 1.67184 12.3281 0.875 11.375 0.875H2.625ZM6.125 3.5H7.875L7.65967 7.87356H6.34375L6.125 3.5ZM7.875 9.625C7.875 10.1083 7.48325 10.5 7 10.5C6.51675 10.5 6.125 10.1083 6.125 9.625C6.125 9.14174 6.51675 8.75 7 8.75C7.48325 8.75 7.875 9.14174 7.875 9.625Z"
              fill="#5E5E5F"
            />
          </svg>
        </div>
        <div className={styles.tag}>
          <div className={styles.tagIcon}></div>
          <p>{item.tag[0]}</p>
        </div>
      </footer>
    </div>
  );
};

export default Card;
