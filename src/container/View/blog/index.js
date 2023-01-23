import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataApi } from "../../../redux/api";

const BlogPage = () => {
  const blog = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataApi());
  }, []);

  console.log("blog", blog);

  return <Box padding="40px">this is blog page</Box>;
};

export default BlogPage;
