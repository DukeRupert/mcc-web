import { createDirectus, rest } from '@directus/sdk';

interface Category {
    id: number
    title: string
    description: string
    image: any
}

interface Social {
    platform: string
    url: string
    display_text: string
}

interface Creator {
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

interface Project {
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

interface Post {
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

interface Schema {
    category: Category[],
    creator: Creator[],
    project: Project[],
    post: Post[],
}

const client = createDirectus<Schema>('https://content.manifoldcollective.com').with(rest());

export default client