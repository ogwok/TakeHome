import { useEffect, useState } from "react";
import axios from "axios";

export default function usePostSearch(query, pageNumber, type1) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [after, setAfter] = useState("");

  useEffect(() => {
    setData([]);
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
        setData((prevData) => {
          setAfter(res.data.data.after);
          return [...new Set([...prevData, ...res.data.data.children])];
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
  // console.log(data);
  return { loading, error, data, hasMore };
}
