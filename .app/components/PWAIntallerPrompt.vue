<template>
  <div>
      <NuxtLink v-if="showInstallPrompt">
            <BaseButtonAction shape="curved" color="primary" @click="handleInstallClick">
                Download
            </BaseButtonAction>
      </NuxtLink>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, onUnmounted, defineComponent } from 'vue'

const deferredPrompt = ref(null)
const store = useUserStore()
const showInstallPrompt = ref(false)
const isIOS = ref(false)


/* function handleInstallClick() {
    if (isIOS.value) {
        alert('To install the app, tap the Share button in Safari and then select "Add to Home Screen".')
    } else if (deferredPrompt.value) {
        (deferredPrompt.value as any).prompt()
            ; (deferredPrompt.value as any).userChoice.then((choiceResult: any) => {
                if (choiceResult.outcome === 'accepted') {
                    store.home.appDownloaded = true
                }
                deferredPrompt.value = null
                showInstallPrompt.value = false
            })
    }
} */

function handleInstallClick() {
  if (isIOS.value) {
      alert('To install the app, tap the Share button in Safari and then select "Add to Home Screen".');
  } else if (deferredPrompt.value) {
      (deferredPrompt.value as any).prompt();
      (deferredPrompt.value as any).userChoice.then((choiceResult: any) => {
          if (choiceResult.outcome === 'accepted') {
              store.setAppDownloaded(true);
          }
          deferredPrompt.value = null;
          showInstallPrompt.value = false;
      });
  }
}

const handleBeforeInstallPrompt = (event: Event) => {
    event.preventDefault()
    deferredPrompt.value = event as any
    showInstallPrompt.value = true
}


onMounted(() => {
    const userAgent = window.navigator.userAgent
    isIOS.value = /IPAD|iPhone|iPod/.test(userAgent)

    // Show the install prompt by default
    showInstallPrompt.value = true;

    // Check if the app is already in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
        // If the app is in standalone mode, don't show the install prompt
        showInstallPrompt.value = false
    } else {
        // If the app is not in standalone mode, listen for the beforeinstallprompt event
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
    console.log('Standalone mode (matchMedia):', window.matchMedia('(display-mode: standalone)').matches);
    console.log('Standalone mode (navigator):', (window.navigator as any).standalone);
})


onUnmounted(() => {
    window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
})

</script>
