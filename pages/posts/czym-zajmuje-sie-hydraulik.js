import React from "react";
import { Box, Heading, Text, Img, Link } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import PageLayout from "../../components/layouts/PageLayout";
import { getPostItem } from "../../lib/data";

export const getServerSideProps = async () => {
  const data = await getPostItem();
  return {
    props: {
      postItem: data.posts[0],
    },
  };
};

const Post1 = ({ postItem }) => {
  return (
    <PageLayout>
      <NextSeo title={postItem.title} description={postItem.description} />
      <Box m={2} p={{ base: 4, md: 0 }}>
        <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} color="teal.400">
          {postItem.title}
        </Heading>
        <Heading as="h2" textAlign="center" fontSize="xl" mt={1}>
          {postItem.description}
        </Heading>
        <Box mt="16px">
          <Img
            src={postItem.coverImage1.url}
            rounded="xl"
            alt={postItem.coverImageDesc1}
            loading="lazy"
          />
          <Link
            href={postItem.copyrightUrl1}
            isExternal
            style={{ textDecoration: "none" }}
            color="headingColor"
          >
            {postItem.copyrightText1}
          </Link>
        </Box>
        <Text mt="16px" textAlign="justify">
          {postItem.text1}
        </Text>
        <Box mt="16px">
          <Img
            src={postItem.coverImage2.url}
            rounded="xl"
            alt={postItem.coverImageDesc2}
            loading="lazy"
          />
          <Link
            href={postItem.copyrightUrl2}
            isExternal
            style={{ textDecoration: "none" }}
            color="headingColor"
          >
            {postItem.copyrightText2}
          </Link>
        </Box>
        <Text mt="16px" textAlign="justify">
          {postItem.text2}
        </Text>
      </Box>
    </PageLayout>
  );
};

export default Post1;
