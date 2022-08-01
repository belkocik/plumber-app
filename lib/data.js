import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_GRAPHCMS_API;

export const getAboutPageData = async () => {
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      abouts {
        aboutTitle
        aboutDescription
        service1ImageDesc
        service1Header
        service2ImageDesc
        service2Header
        service3ImageDesc
        service3Header
        service1 {
          id
          url
        }
        service2 {
          id
          url
        }
        service3 {
          id
          url
        }
      }
    }
  `;
  return await graphQLClient.request(query);
};

export const getProject = async () => {
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      projects(orderBy: date_DESC) {
        title
        description
        slug
        id
        tags
        date
        location
        coverImage {
          url
          width
          height
        }
      }
    }
  `;
  return await graphQLClient.request(query);
};

export const getProjectItem = async (slug) => {
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    query getProject($slug: String!) {
      projects(where: { slug: $slug }) {
        title
        description
        id
        slug
        content {
          raw
        }
      }
    }
  `;
  const variables = {
    slug,
  };
  return await graphQLClient.request(query, variables);
};

export const getProjectsSlugs = async () => {
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      projects {
        slug
      }
    }
  `;
  return await graphQLClient.request(query);
};

export const getHomePageDataAndTheNewestProject = async () => {
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      projects(orderBy: date_DESC, first: 1) {
        title
        description
        slug
        id
        date
        tags
        location
        coverImage {
          url
          width
          height
        }
      }

      homes {
        title
        titleDescription
        service
        workArea
        newsFeed
      }

      posts {
        title
        description
      }
    }
  `;
  return await graphQLClient.request(query);
};

export const getPostItem = async () => {
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      posts {
        title
        description
        coverImage1 {
          url
        }
        coverImageDesc1
        copyrightUrl1
        copyrightText1
        text1
        coverImage2 {
          url
        }
        coverImageDesc2
        copyrightUrl2
        copyrightText2
        text2
      }
    }
  `;
  return await graphQLClient.request(query);
};
