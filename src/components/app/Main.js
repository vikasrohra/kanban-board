import React, { useEffect, useState } from "react";

import Header from "./Header";
import Groups from "./Groups";
import { getGroupingFactor, getOrderingFactor } from "../../Common";
import { API_URL, ASC } from "../../Constants";

import styles from "./Main.module.css";

const Main = () => {
  const [groupingFactor, setGroupingFactor] = useState("1");
  const [orderingFactor, setOrderingFactor] = useState("1");
  const [data, setData] = useState(null);
  const [tickets, setTickets] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();

    return () => {
      setGroupingFactor("1");
      setOrderingFactor("1");
      setData(null);
      setTickets(null);
      setUsers([]);
    };
  }, []);

  useEffect(() => {
    if (data) {
      filterData(data);
    }
  }, [data, groupingFactor, orderingFactor]);

  const getData = async () => {
    const apiData = await fetch(API_URL);
    const jsonConvertedData = await apiData.json();
    setData(jsonConvertedData);
    setUsers(jsonConvertedData.users);
    filterData(jsonConvertedData);
  };

  const changeGroupingFactor = (factor) => {
    setGroupingFactor(factor);
  };

  const changeOrderingFactor = (factor) => {
    setOrderingFactor(factor);
  };

  const filterData = (d) => {
    const gFactor = getGroupingFactor(groupingFactor);
    const oFactor = getOrderingFactor(orderingFactor);

    const groupedTickets = Object.groupBy(d.tickets, (ticket) => {
      return ticket[gFactor];
    });

    for (const key in groupedTickets) {
      if (oFactor.order === ASC) {
        groupedTickets[key].sort((a, b) => a[oFactor.key] - b[oFactor.key]);
      } else {
        groupedTickets[key].sort((a, b) => b[oFactor.key] - a[oFactor.key]);
      }
    }

    setTickets(groupedTickets);
  };

  console.log("group, order", groupingFactor, orderingFactor);
  console.log("tickets", tickets);

  if (!tickets) return null;

  return (
    <main className={styles.main}>
      <Header
        changeGroupingFactor={changeGroupingFactor}
        changeOrderingFactor={changeOrderingFactor}
        groupingFactor={groupingFactor}
        orderingFactor={orderingFactor}
      />
      <Groups groups={tickets} groupingFactor={groupingFactor} />
    </main>
  );
};

export default Main;
