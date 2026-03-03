import type { Metadata } from 'next'
import { articles } from '@/data/articles'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return {
      title: 'Artikel tidak ditemukan | LuminaTalk',
    }
  }

  return {
    title: `${article.title} | LuminaTalk`,
    description: article.description,
    keywords: article.tags,
    authors: [{ name: article.author }],

    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      authors: [article.author],
      publishedTime: article.publishedDate,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}
