import { useEffect, useState } from "react";
import axios from "axios";

export default function useBookSearch(query, pageNumber, type1) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [titles, setTitles] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [after, setAfter] = useState("");

  useEffect(() => {
    setTitles([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `https://www.reddit.com/r/holdmybeer/${type1}.json`,
      params: { limit: 50, after: after },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setTitles((prevBooks) => {
          setAfter(res.data.data.after);

          console.log(res.data.data.children.map((b) => b.data.title));

          return [
            ...new Set([
              ...prevBooks,
              ...res.data.data.children.map((b) => b.data.title),
            ]),
          ];
        });
        setHasMore(res.data.data.children.length > 0);

        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);
  console.log(after);
  return { loading, error, titles, hasMore };
}
