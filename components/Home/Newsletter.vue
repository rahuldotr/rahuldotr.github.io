<template>
  <div>
    <div class="mb-6 flex items-center gap-3">
      <div
        class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"
      >
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">
        CONTACT ME
      </h2>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      Have a question or want to get in touch? Send me a message below.
    </p>
    <form @submit.prevent="submitForm" class="flex flex-col gap-4 mt-6">
      <UInput
        v-model="form.email"
        placeholder="Email Address"
        icon="i-heroicons-envelope"
        class="w-full"
        size="lg"
        :state="emailError ? false : null"
      />
      <p v-if="emailError" class="text-red-500 text-xs mt-1">{{ emailError }}</p>
      
      <UTextarea
        v-model="form.message"
        placeholder="Your Message"
        icon="i-heroicons-chat-bubble-left-text"
        class="w-full"
        size="lg"
        :state="messageError ? false : null"
      />
      <p v-if="messageError" class="text-red-500 text-xs mt-1">{{ messageError }}</p>
      
      <div class="w-full">
        <UButton 
          type="submit"
          :label="isSubmitting ? 'Sending...' : 'Send Message →'" 
          size="lg" 
          color="black" 
          class="justify-center text-center" 
          block 
          :loading="isSubmitting"
          :disabled="isSubmitting"
        />
      </div>
      
      <UAlert
        v-if="formStatus.show"
        :type="formStatus.type"
        :title="formStatus.title"
        :description="formStatus.message"
        class="mt-4"
      />
    </form>
  </div>
</template>

<script setup>
const form = ref({
  email: '',
  message: ''
});

const emailError = ref('');
const messageError = ref('');
const isSubmitting = ref(false);
const formStatus = ref({
  show: false,
  type: 'success',
  title: '',
  message: ''
});

const FORMCARRY_ID = 'w1886IAldQB';

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateForm = () => {
  let isValid = true;
  
  emailError.value = '';
  messageError.value = '';
  
  if (!form.value.email) {
    emailError.value = 'Email is required';
    isValid = false;
  } else if (!validateEmail(form.value.email)) {
    emailError.value = 'Please enter a valid email address';
    isValid = false;
  }
  
  if (!form.value.message) {
    messageError.value = 'Message is required';
    isValid = false;
  } else if (form.value.message.length < 10) {
    messageError.value = 'Message should be at least 10 characters';
    isValid = false;
  }
  
  return isValid;
};

const submitForm = async () => {
  formStatus.value.show = false;
  
  if (!validateForm()) {
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    const response = await fetch(`https://formcarry.com/s/${FORMCARRY_ID}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    });
    
    const data = await response.json();
    
    if (data.status === 'success') {
      formStatus.value = {
        show: true,
        type: 'success',
        title: 'Message sent!',
        message: 'Thank a megabyte! I will respond faster than a loop iterating through an array.'
      };
      
      form.value = {
        email: '',
        message: ''
      };
    } else {
      formStatus.value = {
        show: true,
        type: 'danger',
        title: 'Error',
        message: data.message || 'Something went wrong. Please try again later.'
      };
    }
  } catch (error) {
    formStatus.value = {
      show: true,
      type: 'danger',
      title: 'Error',
      message: 'Failed to send message. Please try again later.'
    };
    console.error('Form submission error:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
