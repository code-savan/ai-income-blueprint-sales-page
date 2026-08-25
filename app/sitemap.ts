import type { MetadataRoute } from 'next'

const BASE = 'https://www.zerotopaidwithai.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/`,
      lastModified: new Date('2026-08-25'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date('2026-08-05'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE}/terms`,
      lastModified: new Date('2026-08-05'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
