import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import { PreviewData } from 'next'
import sm from '../../sm.json'

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

interface prismicClientConfigProps extends prismic.ClientConfig {
  previewData?: PreviewData;
  req?: prismic.HttpRequestLike;
} 

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/'
    case 'posts':
      return `/${doc.uid}`
    default:
      return null
  }
}

// This factory function allows smooth preview setup
export function createClient(config: prismicClientConfigProps = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })

  enableAutoPreviews({
    client,
    previewData: config?.previewData,
    req: config?.req,
  })

  return client
}