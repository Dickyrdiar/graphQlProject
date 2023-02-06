import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataApi } from "../redux/api";

const BloggerController = () => {
  const blog = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataApi());
  }, [dispatch]);

  return { blog };
};

export default BloggerController;
