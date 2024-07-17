import React from "react";

import useData from "../../hooks/useData";
import Header from "./Header";
import Groups from "./Groups";

const SORT_PARAM_PRIORITY = {
  name: "priority",
  direction: "desc",
};

const SORT_PARAM_TITLE = {
  name: "title",
  direction: "asc",
};

const Main = () => {
  const data = useData();

  if (!data) return null;

  const groups = data.tickets.reduce((groups, ticket) => {
    const group = groups[ticket["status"]] || [];
    group.push(ticket);
    group.sort((a, b) => b["priority"] - a["priority"]);
    groups[ticket["status"]] = group;
    return groups;
  }, {});

  return (
    <main>
      <Header />
      <div style={{ padding: "0 55px"}}>
        <Groups groups={groups} />
      </div>
    </main>
  );
};

export default Main;
