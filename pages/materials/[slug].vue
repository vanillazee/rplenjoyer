<template>
    <div class="bg-gray-100 min-h-screen p-4">
      <div v-if="material" class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <!-- Image Section -->
        <img :src="material.image" :alt="material.title" class="w-full h-64 object-cover" />
  
        <!-- Content Section -->
        <div class="p-4">
          <h1 class="text-3xl font-bold text-gray-800">{{ material.title }}</h1>
          <p class="text-gray-600 mt-4">{{ material.description }}</p>
  
          <!-- Quiz Section -->
          <!-- Placeholder for quiz content, if any -->
          <div v-if="material.quiz" class="mt-8">
            <h2 class="text-xl font-semibold text-gray-700">Quiz</h2>
            <div v-for="(question, index) in material.quiz" :key="index" class="mt-4">
              <p class="font-semibold">{{ question.question }}</p>
              <div class="mt-2">
                <label v-for="(option, i) in question.options" :key="i" class="block">
                  <input type="radio" :name="'question' + index" :value="option" class="mr-2" />
                  {{ option }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Loading or Error States -->
      <div v-else class="text-center py-8">
        <p class="text-gray-600">Loading...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from '#app';
  
  const route = useRoute();
  const material = ref(null);
  
  const fetchMaterial = async () => {
    const slug = route.params.slug;
    try {
      // Fetch the list of materials
      const response = await fetch('https://66daa67cf47a05d55be57029.mockapi.io/materials');
      const data = await response.json();
      
      // Find the material with the matching slug
      material.value = data.find(item => item.slug === slug);
    } catch (error) {
      console.error('Error fetching material:', error);
    }
  };
  
  onMounted(() => {
    fetchMaterial();
  });
  </script>
  
  <style scoped>
  /* Additional custom styles can go here if needed */
  </style>
  