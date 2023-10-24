<script setup lang="ts">
try {
  function raiseError() {
    throw new Error('Test error!')
  }
  raiseError()
} catch (error) {
  if (error instanceof Error) { // Check if the error is an instance of the Error class
    console.error('An error occurred:', error.message)
  } else {
    console.error('An unknown error occurred:', error)
  }
}
</script>

<template>
  <div>
    <h1>Test error</h1>
  </div>
</template>
