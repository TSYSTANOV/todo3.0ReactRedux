import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  function getSortedPost() {
    if (sort && sort !== "body") {
      return [...posts].sort((a, b) => {
        return a[sort].localeCompare(b[sort]);
      });
    } else {
      return posts;
    }
  }
  const SortedPost = useMemo(() => {
    return getSortedPost();
  }, [sort, posts]);
  return SortedPost;
};

export const usePosts = (posts, sort, search) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const SortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((item) => {
      return item.title
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
    });
  }, [search, sort, sortedPosts]);
  return SortedAndSearchPosts;
};
