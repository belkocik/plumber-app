import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import { getProject } from "../../lib/data";
import ProjectsHeroCard from "../../components/projectspage/ProjectsHeroCard";
import ProjectCard from "../../components/projectspage/ProjectCard";
import PageLayout from "../../components/layouts/PageLayout";
import { NextSeo } from "next-seo";

export const getServerSideProps = async () => {
  const data = await getProject();

  return {
    props: {
      projects: data.projects,
    },
  };
};

const Projects = ({ projects }) => {
  return (
    <PageLayout>
      <NextSeo
        title="Hydraulik Dębica - Instalacje Hydrauliczne Krzysztof Niedbalec - Realizacje"
        description="Instalacje gazowe, centralne ogrzewanie, ogrzewanie podłogowe, instalacje hydrauliczne."
      />
      <Box m={2}>
        <ProjectsHeroCard />

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
          mt="16px"
        >
          {projects?.map((project) => (
            <Box key={project.id}>
              <ProjectCard
                slug={project.slug}
                coverImageUrl={project.coverImage.url}
                title={project.title}
                description={project.description}
                location={project.location}
                date={project.date}
              />
            </Box>
          ))}
        </Grid>
      </Box>
    </PageLayout>
  );
};

export default Projects;
