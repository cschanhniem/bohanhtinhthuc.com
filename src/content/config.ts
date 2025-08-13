import { defineCollection, z } from 'astro:content';

// Schema for journey posts (hành trình)
const hanhtrinhCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1, 'Tiêu đề không được để trống'),
    description: z.string().min(10, 'Mô tả phải có ít nhất 10 ký tự'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Người Bộ Hành'),
    image: z.object({
      url: z.string().url('URL hình ảnh không hợp lệ'),
      alt: z.string().min(1, 'Alt text không được để trống'),
      width: z.number().optional(),
      height: z.number().optional(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    location: z.object({
      province: z.string(),
      district: z.string().optional(),
      coordinates: z.object({
        lat: z.number(),
        lng: z.number(),
      }).optional(),
    }).optional(),
    distance: z.number().optional(), // Khoảng cách đã đi (km)
    weather: z.string().optional(),
    mood: z.enum(['hạnh phúc', 'bình thản', 'chiêm nghiệm', 'thách thức', 'biết ơn']).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(), // phút
    excerpt: z.string().optional(),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      keywords: z.array(z.string()).optional(),
      canonicalUrl: z.string().url().optional(),
      noindex: z.boolean().default(false),
    }).optional(),
  }),
});

// Schema for practice posts (thực hành)
const thuchanhCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1, 'Tiêu đề không được để trống'),
    description: z.string().min(10, 'Mô tả phải có ít nhất 10 ký tự'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Người Bộ Hành'),
    image: z.object({
      url: z.string().url('URL hình ảnh không hợp lệ'),
      alt: z.string().min(1, 'Alt text không được để trống'),
      width: z.number().optional(),
      height: z.number().optional(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum([
      'thiền đi',
      'chánh niệm',
      'ăn uống',
      'hơi thở',
      'quan sát',
      'biết ơn',
      'từ bi',
      'tĩnh lặng'
    ]).default('chánh niệm'),
    difficulty: z.enum(['dễ', 'trung bình', 'khó']).default('dễ'),
    duration: z.string().optional(), // Thời gian thực hành
    equipment: z.array(z.string()).default([]), // Dụng cụ cần thiết
    benefits: z.array(z.string()).default([]), // Lợi ích
    instructions: z.array(z.string()).default([]), // Hướng dẫn từng bước
    tips: z.array(z.string()).default([]), // Mẹo thực hành
    precautions: z.array(z.string()).default([]), // Lưu ý
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
    excerpt: z.string().optional(),
    relatedPosts: z.array(z.string()).default([]),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      keywords: z.array(z.string()).optional(),
      canonicalUrl: z.string().url().optional(),
      noindex: z.boolean().default(false),
    }).optional(),
  }),
});

// Schema for gallery items (thư viện)
const thuvienCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1, 'Tiêu đề không được để trống'),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    author: z.string().default('Người Bộ Hành'),
    images: z.array(z.object({
      url: z.string().url(),
      alt: z.string(),
      caption: z.string().optional(),
      width: z.number().optional(),
      height: z.number().optional(),
      location: z.string().optional(),
      takenDate: z.coerce.date().optional(),
    })),
    tags: z.array(z.string()).default([]),
    location: z.object({
      province: z.string(),
      district: z.string().optional(),
      coordinates: z.object({
        lat: z.number(),
        lng: z.number(),
      }).optional(),
    }).optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      keywords: z.array(z.string()).optional(),
      canonicalUrl: z.string().url().optional(),
      noindex: z.boolean().default(false),
    }).optional(),
  }),
});

// Schema for quotes/wisdom (trích dẫn)
const trichDanCollection = defineCollection({
  type: 'content',
  schema: z.object({
    quote: z.string().min(1, 'Trích dẫn không được để trống'),
    author: z.string().default('Người Bộ Hành'),
    source: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    category: z.enum([
      'tỉnh thức',
      'biết ơn',
      'từ bi',
      'hạnh phúc',
      'bình an',
      'trí tuệ',
      'hành trình',
      'thiên nhiên'
    ]).default('tỉnh thức'),
    featured: z.boolean().default(false),
    language: z.enum(['vi', 'en']).default('vi'),
    translation: z.string().optional(), // Bản dịch nếu quote gốc bằng tiếng khác
  }),
});

// Export collections
export const collections = {
  hanhtrinh: hanhtrinhCollection,
  thuchanh: thuchanhCollection,
  thuvien: thuvienCollection,
  trichdan: trichDanCollection,
};

// Type exports for TypeScript support
export type HanhTrinh = z.infer<typeof hanhtrinhCollection.schema>;
export type ThucHanh = z.infer<typeof thuchanhCollection.schema>;
export type ThuVien = z.infer<typeof thuvienCollection.schema>;
export type TrichDan = z.infer<typeof trichDanCollection.schema>;

// Utility functions for content
export const getCollectionBySlug = (collection: string, slug: string) => {
  // Helper function to get single item by slug
};

export const getFeaturedPosts = (collection: string, limit: number = 3) => {
  // Helper function to get featured posts
};

export const getPostsByTag = (collection: string, tag: string) => {
  // Helper function to get posts by tag
};

export const getRelatedPosts = (collection: string, currentSlug: string, tags: string[], limit: number = 3) => {
  // Helper function to get related posts based on tags
};

// Content validation helpers
export const validateImageUrl = (url: string): boolean => {
  try {
    new URL(url);
    return /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(url);
  } catch {
    return false;
  }
};

export const generateExcerpt = (content: string, maxLength: number = 150): string => {
  const plainText = content.replace(/[#*_`\[\]()]/g, '').trim();
  if (plainText.length <= maxLength) return plainText;
  
  const words = plainText.split(' ');
  let excerpt = '';
  
  for (const word of words) {
    if ((excerpt + word).length > maxLength) break;
    excerpt += (excerpt ? ' ' : '') + word;
  }
  
  return excerpt + '...';
};

export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200; // Average reading speed for Vietnamese
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

// SEO helpers
export const generateSEOTitle = (title: string, siteName: string = 'Bộ Hành Tỉnh Thức'): string => {
  return title === siteName ? title : `${title} | ${siteName}`;
};

export const generateSEODescription = (description: string, maxLength: number = 160): string => {
  if (description.length <= maxLength) return description;
  
  const trimmed = description.substring(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(' ');
  
  return trimmed.substring(0, lastSpace) + '...';
};

// Content filtering helpers
export const filterDraftPosts = <T extends { data: { draft?: boolean } }>(posts: T[]): T[] => {
  return posts.filter(post => !post.data.draft);
};

export const sortPostsByDate = <T extends { data: { pubDate: Date } }>(posts: T[]): T[] => {
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
};

export const groupPostsByYear = <T extends { data: { pubDate: Date } }>(posts: T[]) => {
  return posts.reduce((groups, post) => {
    const year = post.data.pubDate.getFullYear();
    if (!groups[year]) groups[year] = [];
    groups[year].push(post);
    return groups;
  }, {} as Record<number, T[]>);
};

export const groupPostsByTag = <T extends { data: { tags: string[] } }>(posts: T[]) => {
  return posts.reduce((groups, post) => {
    post.data.tags.forEach(tag => {
      if (!groups[tag]) groups[tag] = [];
      groups[tag].push(post);
    });
    return groups;
  }, {} as Record<string, T[]>);
};
