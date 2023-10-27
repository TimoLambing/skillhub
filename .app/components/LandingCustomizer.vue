<script setup lang="ts">
const selectedStyle = ref('classic')
const toggled = ref(false)

watch(selectedStyle, (value) => {
  if (value) {
    toggled.value = true
    const timeout = setTimeout(() => {
      toggled.value = false
      clearTimeout(timeout)
    }, 1750)
  }
})
</script>

<template>
  <div class="dark:bg-muted-900 overflow-hidden bg-white py-24 justify-center items-center">
    <div class="mx-auto w-full max-w-7xl px-4 justify-center items-center">
          <!-- buttons -->
          <div class="mx-auto">
            <div
              class="mx-auto mt-48 flex w-full max-w-2xl flex-wrap sm:mt-0 items-center justify-center"
            >
              <div class="mb-10 max-w-4xl text-center">
                <BaseText
                  class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
                  >questions</BaseText
                >
                <BaseHeading
                  as="h2"
                  size="5xl"
                  weight="light"
                  lead="tight"
                  class="text-muted-800 mx-auto mb-4 dark:text-white"
                >
                Still not convinced?
                </BaseHeading>
                <BaseParagraph
                  size="lg"
                  class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
                >
                We bet you have many questions like these.
                </BaseParagraph>
            </div>
            <div class="max-w-xl">
              <BaseCard shape="curved" elevated class="right-16 m-3 p-6 from-primary-700 to-primary-400 bg-gradient-to-tr dark:to-transparent">
              "Is this platform really good?"
              </BaseCard>
              <BaseCard shape="curved" elevated class="left-20 m-3 p-6 from-muted-700 to-muted-400 bg-gradient-to-tl dark:to-transparent">
              "Yes! If you need access to professionals whose skills are checked by the platform and who are available right now?
              </BaseCard>
              <BaseCard shape="curved" elevated class="right-20 m-3 p-6 from-primary-700 to-primary-400 bg-gradient-to-tr dark:to-transparent">
                "How is this platform different than all the others?"
              </BaseCard>
              <BaseCard shape="curved" elevated class="left-16 m-3 p-6 from-muted-700 to-muted-400 bg-gradient-to-tl dark:to-transparent">
                "This platform provides companies the opportunity to rent out their personnel while guaranteeing the skill levels of the specialists. Not only companies, but also freelancers and individuals can rent out their skills. AI is utilized to facilitate the matching process."
              </BaseCard>
              <BaseCard shape="curved" elevated class="right-16 m-3 p-6 from-primary-700 to-primary-400 bg-gradient-to-tr dark:to-transparent">
                "Will I only waste my time?"
              </BaseCard>
              <BaseCard shape="curved" elevated class="left-20 m-3 p-6 from-muted-700 to-muted-400 bg-gradient-to-tl dark:to-transparent">
                "You only need to fill out your information once and toggle your status to active in the database. We will not send spam, but will only notify you when there is a 'match.'"
              </BaseCard>
              <BaseCard shape="curved" elevated class="right-20 m-3 p-6 from-primary-700 to-primary-400 bg-gradient-to-tr dark:to-transparent">
                "Does anybody actually use it?"
              </BaseCard>
              <BaseCard shape="curved" elevated class="left-16 m-3 p-6 from-muted-700 to-muted-400 bg-gradient-to-tl dark:to-transparent">
                "We are actively onboarding companies and talents alike, because that's our line of work."
              </BaseCard>
            </div>
            </div>
          </div>
      </div>
    </div>
    <div class="mt-24 flex items-center justify-center">
      <BaseButton
            shape="curved"
            color="primary"
            to="https://go.cssninja.io/buy-tairo"
            shadow="hover"
            class="!h-12 w-60"
          >
            Find a Job
          </BaseButton>
        </div>
</template>

<style scoped>
.gridlines {
  background-image: url(/img/illustrations/gridlines.svg);
}

.dark .gridlines {
  background-image: url(/img/illustrations/gridlines-predark.svg);
}

.shuriken-1 {
  animation: shurikenFirst 0.75s 0s forwards;
}

.shuriken-2 {
  top: 190px;
  transform: translateX(-20px);
  animation: shurikenSecond 0.5s 0s forwards;
}
.shuriken-3 {
  top: 110px;
  transform: translateX(-20px) rotate(20deg);
  animation: shurikenThird 1.75s 0s forwards;
}
@keyframes shurikenFirst {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(600px);
    opacity: 0;
  }
}

@keyframes shurikenSecond {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(500px);
    opacity: 0;
  }
}

@keyframes shurikenThird {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(400px);
    opacity: 0;
  }
}
</style>
