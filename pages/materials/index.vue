<template>
    <div class="bg-gray-100 min-h-screen p-4">
      <!-- Header Section -->
      <header class="text-center py-4">
        <h1 class="text-2xl font-bold text-gray-800">Biology Materials</h1>
        <p class="text-gray-600">Explore biology topics and deepen your understanding.</p>
      </header>
  
      <!-- List of Topics/Materials -->
      <section>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(topic, index) in topics"
            :key="index"
            class="bg-white rounded-lg shadow-md p-4"
          >
            <h2 class="text-xl font-semibold text-gray-700">{{ topic.title }}</h2>
            <p class="text-gray-600 mt-2">{{ topic.description }}</p>
  
            <!-- Link to the material -->
            <nuxt-link :to="`/materials/${topic.slug}`" class="block mt-4 text-blue-600 hover:underline">
              Read more
            </nuxt-link>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  const topics = [
    {
      title: "Cell Biology",
      description: "Learn about the structure and function of cells.",
      slug: "cell-biology",
    },
    {
      title: "Genetics",
      description: "Introduction to inheritance and DNA structure.",
      slug: "genetics",
    },
    {
      title: "Evolution",
      description: "Explore how species evolve over time.",
      slug: "evolution",
    },
    // Add more topics as needed
  ]
  </script>
  
  <style scoped>
  /* Additional custom styles can go here if needed */
  </style>
  