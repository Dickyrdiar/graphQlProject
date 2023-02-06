import { Container } from "@chakra-ui/react";
import BloggerController from "../../controller/blogger.controller";

const BlogPage = () => {
  const blogController = BloggerController();

  console.log("blog", blogController.blog);

  return (
    <>
      <Container>this is blog</Container>
    </>
  );
};

export default BlogPage;
