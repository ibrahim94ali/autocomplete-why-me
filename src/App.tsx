import { useEffect, useState } from "react";
import "./App.css";
import Autocomplete from "@/components/Autocomplete";
import { fetchWhyMe } from "./services/whyme";

function App() {
  const [value, setValue] = useState("");

  const [data, setData] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function filterData(source: string[], newValue: string) {
    return source.filter((item) =>
      item.toLowerCase().startsWith(newValue.toLowerCase())
    );
  }

  useEffect(() => {
    function fetchData() {
      setIsLoading(true);
      fetchWhyMe()
        .then((res) => {
          setData(res.adjectives.sort((a, b) => (a > b ? 1 : -1)));
          setError("");
        })
        .catch((err) => {
          setData([]);
          const error = err as Error;
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    fetchData();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const newData = filterData(data, value);
      setFilteredData(newData);
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [data, value]);

  return (
    <div className="app-container">
      <h2>You should hire me because I am</h2>
      <Autocomplete
        value={value}
        onChange={setValue}
        data={filteredData}
        state={isLoading ? "loading" : error.length ? "error" : "data"}
        error={error}
        onSelect={(item) => setValue(item)}
      />
    </div>
  );
}

export default App;
