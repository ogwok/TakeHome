import { useEffect, useState } from "react";
import axios from "axios";

export default function useBookSearch(query, pageNumber, type1) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [titles, setTitles] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [after, setAfter] = useState("");
  const [author, setAuthor] = useState([]);

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
          let hotpost = [];
          const postsArr = res.data.data.children;
          for (let i = 0; i < postsArr.length; i++) {
            hotpost = postsArr[i].data;
          }
          //   console.log(hotpost);
          //   console.log(res.data.data.children);
          setAuthor((prevAuth) => {
            return [...prevAuth, res.data.data.children];
          });
          //   return [...prevBooks, hotpost.title];
          return [...new Set([...prevBooks, ...res.data.data.children])];
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
  console.log(titles);
  return { loading, error, titles, author, hasMore };
}
