<script lang="ts">
    
    let resources = [
      {
        title: "Design Templates",
        description: "Professional templates to kickstart your TTRPG projects",
        url: "#"
      },
      {
        title: "Collaboration Hub",
        description: "Connect with other designers and find partners for your next game",
        url: "#"
      },
      {
        title: "Playtest Network",
        description: "Access our network of experienced playtesters for valuable feedback",
        url: "#"
      },
      {
        title: "Publishing Guidance",
        description: "Resources to help navigate the path to publishing your game",
        url: "#"
      }
    ];
  </script>
  
  <div class="bg-gradient-to-b from-gray-50 to-white flex flex-col gap-6">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">  
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block">The Manifold</span>
            <span class="block text-primary">Creator Collective</span>
          </h1>
          <p class="mt-6 text-xl text-gray-500">
            We are a community of passionate TTRPG designers, writers, editors, and playtesters collaborating to elevate Draw Steel and other tabletop roleplaying games.
          </p>
        </div>
      </div>
    </section>  
    
    <!-- Who We Are Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center mb-12">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Who We Are</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Diverse Community of Creators
          </p>
        </div>
        
        <div class="prose prose-lg mx-auto">
          <p>
            The Manifold Creator Collective brings together diverse talents from across the tabletop roleplaying game industry. Our members include published game designers, experienced GMs, professional editors, artists, and passionate players.
          </p>
          <p>
            We believe that the best games emerge from collaboration, constructive feedback, and shared expertise. Our collective represents a wide range of perspectives, design philosophies, and creative approaches to TTRPGs.
          </p>
          <p>
            Whether you're working on your first indie game or you're a seasoned designer, the MCC provides a supportive environment to develop your craft and connect with fellow creators who share your passion for tabletop roleplaying games.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Resources Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Resources</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tools for TTRPG Designers
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            The MCC offers various resources to help you create, refine, and publish your tabletop roleplaying games.
          </p>
        </div>
        
        <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {#each resources as resource}
            <div class="pt-6">
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="-mt-6">
                  <div>
                    <span class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </span>
                  </div>
                  <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{resource.title}</h3>
                  <p class="mt-5 text-base text-gray-500">
                    {resource.description}
                  </p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
    
    <!-- Call to Action -->
    <section class="py-16 bg-indigo-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-200 font-semibold tracking-wide uppercase">Join Us</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Become Part of Our Community
          </p>
          <p class="mt-4 max-w-2xl text-xl text-indigo-200 lg:mx-auto">
            Connect with like-minded creators, share your projects, and help shape the future of tabletop roleplaying games.
          </p>
          
          <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md shadow">
              <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50">
                Join the Collective
              </a>
            </div>
            <div class="ml-3 inline-flex">
              <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>