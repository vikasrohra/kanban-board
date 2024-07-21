import { ASC, DESC } from "./Constants";

export const getGroupingFactor = (factorId) => {
  switch (factorId) {
    case "1":
      return "status";
    case "2":
      return "userId";
    case "3":
      return "priority";
    default:
      return "status";
  }
};

export const getOrderingFactor = (factorId) => {
  switch (factorId) {
    case "1":
      return { key: "priority", order: DESC };
    case "2":
      return { key: "title", order: ASC };
    default:
      return { key: "priority", order: DESC };
  }
};

export const getPriorityName = (id) => {
  switch (id) {
    case "0":
      return "No priority";
    case "1":
      return "Low";
    case "2":
      return "Medium";
    case "3":
      return "High";
    case "4":
      return "Urgent";
    default:
      return "No priority";
  }
};
