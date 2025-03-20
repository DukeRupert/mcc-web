<script lang="ts">
    import type { Post } from '$lib/directus/types/index';
    import Header from './partials/header.svelte';
    import Footer from './partials/footer.svelte';
    import Image from '$lib/directus/image.svelte';
   
    interface Props {
        post: Post
    }
    let { post }: Props = $props()   
     
  </script>
  
  <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <Header {post} />
    
    <!-- Featured Image -->
    {#if post.image}
      <div class="my-8 rounded-lg overflow-hidden">
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
    
    <Footer {post} />
    
  </article>

