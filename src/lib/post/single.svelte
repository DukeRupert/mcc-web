<script lang="ts">
    import { onMount } from 'svelte';
    import { formatDate, getReadTime } from "$lib/post/utils"
    import type { Creator, Category, Image, Post } from '$lib/directus/types';

    interface Props {
        post: Post
    }
    let { post }: Props = $props()   
     
    let readTime = 0;
    
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
          class="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800 mb-3"
        >
          {post.category_id.title}
        </a>
      {/if}
      
      <!-- Title -->
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {post.title}
      </h1>
      
      <!-- Post Meta - Date, Read Time, Author -->
      <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
        {#if post.date || post.date_created}
          <time datetime={post.date || post.date_created}>
            <svg class="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            {formatDate(post.date || post.date_created)}
          </time>
        {/if}
        
        {#if readTime}
          <span>
            <svg class="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {readTime} min read
          </span>
        {/if}
      </div>
      
      <!-- Author -->
      {#if post.creator_id}
        <div class="flex items-center mt-5">
          <a href={`/author/${post.creator_id.slug}`} class="flex items-center group">
            {#if post.creator_id.avatar}
              <img 
                src={post.creator_id.avatar.url} 
                alt={post.creator_id.title} 
                class="w-10 h-10 rounded-full object-cover mr-3"
              />
            {:else}
              <div class="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-medium uppercase mr-3">
                {post.creator_id.title.charAt(0)}
              </div>
            {/if}
            
            <div>
              <span class="text-sm font-medium text-gray-900 group-hover:text-indigo-600">
                {post.creator_id.title}
              </span>
              {#if post.creator_id.bio}
                <p class="text-xs text-gray-500 truncate max-w-xs">
                  {post.creator_id.bio}
                </p>
              {/if}
            </div>
          </a>
        </div>
      {/if}
    </header>
    
    <!-- Featured Image -->
    {#if post.image}
      <div class="mb-8 rounded-lg overflow-hidden">
        <img 
          src={post.image.url} 
          alt={post.title} 
          class="w-full h-auto object-cover"
        />
      </div>
    {/if}
    
    <!-- Tags -->
    {#if post.tags && post.tags.length > 0}
      <div class="flex flex-wrap gap-2 mb-8">
        {#each post.tags as tag}
          <a 
            href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
            class="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors duration-200"
          >
            #{tag}
          </a>
        {/each}
      </div>
    {/if}
    
    <!-- Post Content -->
    <div class="prose lg:prose-lg max-w-none">
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
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
          <div class="flex flex-wrap gap-2">
            {#each post.tags as tag}
              <a 
                href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                class="inline-block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors duration-200"
              >
                {tag}
              </a>
            {/each}
          </div>
        </div>
      {/if}
      
      <!-- Author Box (larger) -->
      {#if post.creator_id}
        <div class="bg-gray-50 rounded-xl p-6 mt-8">
          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <a href={`/author/${post.creator_id.slug}`} class="flex-shrink-0">
              {#if post.creator_id.avatar}
                <img 
                  src={post.creator_id.avatar.url} 
                  alt={post.creator_id.title} 
                  class="w-16 h-16 rounded-full object-cover"
                />
              {:else}
                <div class="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-medium uppercase">
                  {post.creator_id.title.charAt(0)}
                </div>
              {/if}
            </a>
            
            <div class="text-center sm:text-left">
              <h4 class="text-lg font-semibold text-gray-900">
                <a href={`/author/${post.creator_id.slug}`} class="hover:text-indigo-600">
                  {post.creator_id.title}
                </a>
              </h4>
              
              {#if post.creator_id.bio}
                <p class="text-gray-600 mt-1 mb-3">
                  {post.creator_id.bio}
                </p>
              {/if}
              
              <a 
                href={`/author/${post.creator_id.slug}`}
                class="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                View all posts
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      {/if}
    </footer>
  </article>

