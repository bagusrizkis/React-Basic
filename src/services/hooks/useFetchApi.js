import { useState, useEffect } from "react";

export default function (url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + url)
      .then((res) => res.json())
      .then((payload) => {
        setData(payload);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error];
}
