export interface Category {
  id: number
  title: string
  description: string
  image: any
}

export interface Social {
  platform: string
  url: string
  display_text: string
}

export interface Creator {
  id: number
  user_created: string
  date_created: string
  user_updated?: string
  date_updated?: string
  title: string
  bio?: string
  avatar?: string
  email?: string
  skills?: string[]
  socials?: Social[]
  body?: string
  projects?: Project[]
}

export interface Project {
  id: number
  sort: any
  user_created: string
  date_created: string
  user_updated: any
  date_updated: any
  title: string
  description?: string
  url: string
  status: string
  featured: boolean
  creator_id: number
}

export interface Post {
  id: number
  status: string
  sort: any
  user_created: string
  date_created: string
  user_updated?: string
  date_updated?: string
  title: string
  slug: string
  date?: string
  creator_id?: number | Creator
  category_id?: number | Category
  image?: string
  body?: string
  tags?: string[]
}

export interface Schema {
  category: Category[],
  creator: Creator[],
  project: Project[],
  post: Post[],
}


