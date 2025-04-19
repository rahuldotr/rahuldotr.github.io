<template>
     <main class="min-h-screen">
        <AppHeader class="mb-8" title="Certifications" :description="description" />
        <div class="space-y-10">
            <AppCertificationCard 
            v-for="(achievement, index) in achievements" 
            :key="index"
            :title="achievement.title"
            :date="achievement.date"
            :description="achievement.description"
            :badge="achievement.badge"
            />
        </div>
      </main>
</template>

  
<script setup>
  const description = "Certifications and achievements showcasing my expertise, growth, and commitment to continuous learning.";
  useSeoMeta({
        title: "Certifications | Rahul R",
        description,
    });
  
  const achievements = [
    {
      title: "Angular (Basic) Certificate - HackerRank",
      date: "April 2025",
      description: "HackerRank's Angular Basic Certification validates your knowledge of Angular fundamentals, components, templates, services, and routing.",
      badge: "Certification"
    },
    {
      title: "HIPAA Associate (HIPAAA)",
      date: "June 2024",
      description: "U.S. Health Insurance Portability and Accountability Act (HIPAA)",
      badge: "Certification"
    },
    {
      title: "Go (Basic) Certificate - HackerRank",
      date: "March 2024",
      description: "HackerRank's Go Basic Certification validates your fundamental skills in Golang, covering syntax, functions, and concurrency.",
      badge: "Certification"
    },
    {
      title: "Problem Solving (Basic) Certificate - HackerRank",
      date: 'March 2024',
      description: "HackerRank's Problem Solving (Basic) Certification validates your ability to solve programming problems effectively and efficiently.",
      badge: "Certification"
    },
    {
      title: "Certified SAFe® 6 Practitioner",
      date: 'March 2023',
      description: "SAFe Agile 6.0 Practitioner Certification validates your expertise in Agile principles, SAFe framework, and Lean-Agile practices.",
      badge: "Certification"
    },
  ];
  </script>
  