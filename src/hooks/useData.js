import { useEffect, useState } from "react";
import { API_URL } from "../constants";

const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();

    return () => setData(null);
  }, [data]);

  const getData = async () => {
    const apiData = await fetch(API_URL);
    const jsonConvertedData = await apiData.json();
    setData(jsonConvertedData);
  };

  return [data, setData];
};

export default useData;
