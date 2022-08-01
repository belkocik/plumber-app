import PageLayout from "../../components/layouts/PageLayout";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { getProjectItem } from "../../lib/data";
import { Heading, Box, Flex, Text, chakra } from "@chakra-ui/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import NextImage from "next/image";
import { NextSeo } from "next-seo";

// export const getStaticPaths = async () => {
//   const slugsRes = await getProjectsSlugs();
//   const slugs = slugsRes.projects;

//   return {
//     paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
//     fallback: false,
//   };
// };

export const getServerSideProps = async ({ params }) => {
  const projectItem = await getProjectItem(params.slug);
  return {
    props: {
      projectItem: projectItem.projects[0],
    },
  };
};

const Image = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader",
      "layout",
    ].includes(prop),
});

import React from "react";

const Project = ({ projectItem }) => {
  return (
    <PageLayout>
      <NextSeo
        title={projectItem.title}
        description={projectItem.description}
      />

      <Box m={2} p={{ base: 4, md: 6 }}>
        <Heading as="h1" fontSize={{ base: "3xl", md: "5xl" }} color="teal.400">
          {projectItem.title}
        </Heading>

        <Box mt="16px" textAlign="justify">
          <RichText
            content={projectItem.content.raw.children}
            renderers={{
              h1: ({ children }) => (
                <Heading as="h1" color={colorH1} align="left">
                  {children}
                </Heading>
              ),
              h2: ({ children }) => (
                <Heading
                  as="h2"
                  color={colorH2}
                  align="left"
                  fontSize="3xl"
                  fontWeight="700"
                >
                  {children}
                </Heading>
              ),
              h3: ({ children }) => (
                <Heading
                  as="h3"
                  color={colorH3}
                  align="left"
                  fontWeight="600"
                  fontSize="3xl"
                >
                  {children}
                </Heading>
              ),
              h4: ({ children }) => (
                <Heading
                  as="h4"
                  color={colorH3}
                  align="left"
                  fontSize="2xl"
                  fontWeight="600"
                  pb={4}
                  pt={4}
                >
                  {children}
                </Heading>
              ),
              h5: ({ children }) => (
                <Heading
                  as="h5"
                  color={colorH3}
                  align="left"
                  fontSize="xl"
                  fontWeight="600"
                >
                  {children}
                </Heading>
              ),
              h6: ({ children }) => (
                <Heading
                  as="h6"
                  color={colorH3}
                  align="left"
                  fontWeight="600"
                  fontSize="3xl"
                >
                  {children}
                </Heading>
              ),
              p: ({ children }) => (
                <Text fontSize="lg" fontWeight="400">
                  {children}
                </Text>
              ),

              bold: ({ children }) => <strong>{children}</strong>,
              img: ({ src, altText, height, width }) => (
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  pt={4}
                  pb={4}
                  _hover={{
                    transform: "translateY(-4px) scale(1.01)",
                  }}
                  transition="0.25s ease-out"
                >
                  <Zoom
                    overlayBgColorStart=""
                    overlayBgColorEnd=""
                    wrapStyle={{ width: "100%" }}
                    position="relative"
                  >
                    <Image
                      src={src}
                      alt={altText}
                      height={1080}
                      width={1920}
                      placeholder="blur"
                      blurDataURL={src}
                      objectFit="fill"
                      rounded="xl"
                    />
                  </Zoom>
                </Flex>
              ),
            }}
          />
        </Box>
      </Box>
    </PageLayout>
  );
};

export default Project;
