<template>
    <div class="mobile-container w-full h-full">
      <safe-area />
      <NuxtPage />
    </div>
  </template>
  
  <style>
  .mobile-container {
    max-width: 430px;
    margin: 0 auto;
    position: relative;
    background: var(--color-background);

  }
  @media (min-width: 768px) {
    body {
      background: var(--color-text1);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }
  }
  @media (max-width: 767px) {
    .mobile-container {
      max-width: 100%;
    }
  }
  </style>