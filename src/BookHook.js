import { useEffect, useState } from "react";
import axios from "axios";

export default function useBookSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [after, setAfter] = useState("");

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: "https://www.reddit.com/r/holdmybeer/new.json",
      params: { limit: 50, after: after },
      //   url: "http://openlibrary.org/search.json",
      //   params: { q: "hood", page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setBooks((prevBooks) => {
          console.log("run two...................");
          setAfter(res.data.data.after);
          // console.log(res.data.data.after);
          console.log(res.data.data.children.map((b) => b.data.title));
          //  console.log(res.data.docs.map((b) => b.title));
          return [
            ...new Set([
              ...prevBooks,
              ...res.data.data.children.map((b) => b.data.title),
            ]),
          ];
          //   return [
          //     ...new Set([...prevBooks, ...res.data.docs.map((b) => b.title)]),
          //   ];
        });
        setHasMore(res.data.data.children.length > 0);
        // setHasMore(res.data.docs.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);
  console.log(after);
  return { loading, error, books, hasMore };
}
