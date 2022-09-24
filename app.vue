<template>
    <div> 
        <nuxtLayout>
            <nuxtPage />
        </nuxtLayout>
    </div>
</template>
<script setup lang="ts">
    useHead({
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Mikecerc` : 'Mikecerc';
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: './public/favicon.ico',
        },
      ],
    })
  </script>
  