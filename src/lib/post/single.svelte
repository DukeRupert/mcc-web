<script lang="ts">
    import { onMount } from 'svelte';
    import { formatDate, getReadTime } from "$lib/post/utils"
    import type { Post } from '$lib/directus/types';
    import Image from '$lib/directus/image.svelte';
    import { Avatar, Badge } from 'flowbite-svelte'
    import CreatorCard from '$lib/creator/card.svelte';

    interface Props {
        post: Post
    }
    let { post }: Props = $props()   
     
    let readTime = $state(0);
    
    onMount(() => {
      if (post.body) {
        readTime = getReadTime(post.body);
      }
    });
  </script>
  
  <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Post Header -->
    <header class="mb-8">
      <!-- Category -->
      {#if post.category_id}
        <a 
          href={`/category/${post.category_id.slug}`} 
        >
          <Badge large color="primary">{post.category_id.title}</Badge>
        </a>
      {/if}
      
      <!-- Title -->
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 my-4">
        {post.title}
      </h1>

      <!-- Author -->
      {#if post.creator_id}
        <div class="flex items-center">
          <a href={`/author/${post.creator_id.slug}`} class="flex items-center group">
            {#if post.creator_id.avatar}
              <Avatar src={`https://content.manifoldcollective.com/assets/${post.creator_id.avatar.id}`} />
            {/if}
            <div class="ml-2">
              <span class="text-sm font-medium text-gray-900 dark:text-gray-50 group-hover:text-orange-600">
                {post.creator_id.title}
              </span>
            </div>
          </a>
        </div>
      {/if}
      
      <!-- Post Meta - Date, Read Time, Author -->
      <div class="flex flex-wrap justify-between gap-4 text-sm text-gray-600 dark:text-gray-400 mt-4 mb-6">
        {#if post.date || post.date_created}
          <time class="flex items-center gap-1" datetime={post.date || post.date_created}>
            <svg class="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {formatDate(post.date || post.date_created)}
          </time>
        {/if}
        
        {#if readTime}
          <span class="flex items-center gap-1">
            <svg class="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {readTime} min read
          </span>
        {/if}
      </div>
    </header>
    
    <!-- Featured Image -->
    {#if post.image}
      <div class="mb-8 rounded-lg overflow-hidden">
        <Image
          id={post.image.id} 
          alt={post.title}
          height={post.image.height}
          width={post.image.width}
          className="w-full h-auto object-cover"
        />
      </div>
    {/if}
    
    <!-- Post Content -->
    <div class="prose lg:prose-lg dark:prose-invert max-w-none">
      {#if post.body}
        {@html post.body}
      {/if}
    </div>
    
    <!-- Post Footer -->
    <footer class="mt-12 pt-6 border-t border-gray-200">
      <!-- Last Updated Info -->
      {#if post.date_updated && post.date_updated !== post.date_created}
        <p class="text-sm text-gray-500 mb-6">
          Last updated on {formatDate(post.date_updated)}
        </p>
      {/if}
      
      <!-- Tags (bigger view at bottom) -->
      {#if post.tags && post.tags.length > 0}
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-3">Tags</h3>
          <div class="flex flex-wrap gap-2">
            {#each post.tags as tag}
              <a 
                href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Badge large color="blue">#{tag}</Badge>
              </a>
            {/each}
          </div>
        </div>
      {/if}
      
      <!-- Author Box (larger) -->
      {#if post.creator_id}
      <CreatorCard creator={post.creator_id} />
      {/if}
    </footer>
  </article>

