<script lang="ts">
    import Image from "$lib/directus/image.svelte";
    import Socials from "$lib/creator/socials.svelte"
    import type { Creator } from "$lib/directus/types";
    interface Props {
        creator: Creator
    }
    
    // Props
    let { creator } : Props = $props()
    
    // Format date helper function
    function formatDate(dateString: string): string {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    
    // Format email to prevent scraping
    function formatEmail(email: string): string {
      return email.replace('@', ' [at] ');
    }
  </script>
  
  <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <!-- Author Header Section -->
    <div class="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
      <!-- Avatar -->
      <div class="flex-shrink-0">
        {#if creator.avatar}
          <Image type="avatar" id={creator.avatar.id} alt={creator.title} height={creator.avatar.height} width={creator.avatar.width} className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-md" />
        {:else}
          <div class="w-32 h-32 md:w-40 md:h-40 rounded-full bg-indigo-600 text-white flex items-center justify-center text-4xl uppercase shadow-md">
            {creator.title.charAt(0)}
          </div>
        {/if}
      </div>
      
      <!-- Author Info -->
      <div class="flex-1 text-center md:text-left">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{creator.title}</h1>
        
        {#if creator.bio}
          <p class="text-lg text-gray-700 mb-6">{creator.bio}</p>
        {/if}
        
        {#if creator.email}
          <div class="flex justify-center md:justify-start items-center mb-4">
            <svg class="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <a href="mailto:{creator.email}" class="text-indigo-600 hover:text-indigo-800 hover:underline">
              {formatEmail(creator.email)}
            </a>
          </div>
        {/if}
        
        <!-- Social Links -->
        <Socials {creator} />
        
        <!-- Skills -->
        {#if creator.skills && creator.skills.length > 0}
          <div class="flex flex-wrap justify-center md:justify-start gap-2">
            {#each creator.skills as skill}
              <span class="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200">
                {skill}
              </span>
            {/each}
          </div>
        {/if}
      </div>
    </div>
    
    <!-- About Section -->
    {#if creator.body}
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">About</h2>
        <div class="prose lg:prose-lg max-w-none text-gray-700">
          {@html creator.body}
        </div>
      </div>
    {/if}
    
    <!-- Projects Section -->
    {#if creator.projects && creator.projects.length > 0}
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each creator.projects as project}
            <!-- Flowbite Card Component -->
            <div class="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 mb-1">{project.title}</h3>
                <p class="mb-4 font-normal text-gray-700">{project.description}</p>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300"
                >
                  View Project
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
    
    <!-- Footer -->
    <div class="pt-6 border-t border-gray-200 text-sm text-gray-500">
      <p>Member since {formatDate(creator.date_created)}</p>
      {#if creator.date_updated}
        <p>Last updated: {formatDate(creator.date_updated)}</p>
      {/if}
    </div>
  </div>