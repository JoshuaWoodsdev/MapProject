import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID, // or your project ID directly
  dataset: process.env.SANITY_DATASET, // or your dataset name
  apiVersion: '2021-03-25', // use a current date for the latest features
  token: process.env.SANITY_API_TOKEN, // or your Sanity token
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
});
