import { MetadataRoute } from 'next'
import { projects } from '@/lib/project-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = 'https://calexreed.dev'

  // 1. Define your static pages manually
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Category specific pages
    {
      url: `${BASE_URL}/projects/games`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/projects/shopify`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/projects/archive`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]

  // 2. Generate dynamic project pages from your data file
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(), // In a real DB you'd use project.updatedAt, but "now" is fine for static data
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...projectRoutes]
}