<script setup lang="ts">
const { y } = useNinjaWindowScroll()

const gaugePersonal = reactive(useGaugePersonal())

function useGaugePersonal() {
  const { primary } = useTailwindColors()
  const type = 'radialBar'
  const height = 220

  const options = {
    title: {
      text: undefined,
    },
    chart: {
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [primary.value],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#e7e7e7',
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        hollow: {
          margin: 0,
          size: '35%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
    labels: ['Average Results'],
  }

  const series = ref([76])

  return {
    type,
    height,
    options,
    series,
  }
}
</script>

<template>
  <div
    class="dark:to-muted-900 relative min-h-screen overflow-hidden bg-gradient-to-b from-transparent to-white"
  >
    <div class="absolute inset-x-0 z-10 -mt-8 py-20"></div>
    <div class="absolute inset-x-0 z-20 -mt-24 py-20">
      <div
        class="mt-12 grid grid-cols-2 -space-x-52 opacity-60 dark:opacity-50 2xl:mx-auto 2xl:max-w-6xl"
      >
        <div
          class="from-primary-200 to-primary-400 h-40 bg-gradient-to-br blur-3xl dark:from-blue-700"
        ></div>
        <div
          class="dark:to-primary-600 h-24 bg-gradient-to-r from-indigo-400 to-indigo-700 blur-3xl"
        ></div>
      </div>
    </div>
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="grid md:grid-cols-2 gap-4 pt-32 md:pt-20 items-center justify-center">
        <div data-aos="zoom-in" data-aos-duration="1200" class="relative z-30 text-center mb-[20%]">
          <BaseHeading
            as="h1"
            size="6xl"
            weight="light"
            lead="tight"
            class="text-muted-800 xs:!text-4xl mx-auto mb-4 max-w-2xl dark:text-white"
          >
          AI Powered Talent
            <span
              class="text-primary-500 font-hairline underline decoration-dotted underline-offset-4"
              > Marketplace</span>
          </BaseHeading>
          <BaseParagraph
            size="lg"
            class="text-muted-500 dark:text-muted-100 mx-auto mb-4 max-w-2xl"
          >
          Revolutionize Your Workforce: A Synergy of Human Expertise and AI-Powered Talent Matching in a Single Comprehensive Management Tool.
          </BaseParagraph>
          <BaseParagraph
            size="lg"
            class="text-muted-500 dark:text-muted-100 mx-auto mb-4 max-w-2xl"
          >
          <span class="italic text-sm">"Ending unemployment by changing the game"</span>
          </BaseParagraph>
          <div class="flex flex-row items-center justify-center gap-2">
            <BaseButton
              shape="curved"
              to="#corporate"
              shadow="hover"
              class="!h-12 w-44 text-xl"
            >
              Rent Talents
            </BaseButton>
            <BaseButton
              shape="curved"
              color="primary"
              to="#talent"
              shadow="hover"
              class="!h-12 w-44"
            >
              Find a Job
            </BaseButton>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="400" class="relative z-30 text-center">
          <SVGMorph />
        </div>
      </div>
      <Toaster />
      <div class="flex flex-col items-center justify-center text-center pt-32">
            <!-- Talent Heading -->
            <BaseText
              class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
            >
              for corporate clients
            </BaseText>
            <BaseHeading
              as="h2"
              size="4xl"
              weight="light"
              lead="tight"
              class="text-muted-800 mx-auto mb-4 dark:text-white"
            >
              Get verified and land a <span class="text-primary-500 font-hairline underline decoration-dotted underline-offset-4">Job</span>
            </BaseHeading>
            <BaseParagraph
              size="lg"
              class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
            >
              Join Skillhub, where our team works with AI to match your unique skills with exciting job opportunities. SkillHub provides a comprehensive suite of features including earnings, forecasts, contracts, payments, and detailed project and employer information.
            </BaseParagraph>

            <!-- Badges and Heading Container -->
            <div class="flex items-center justify-center gap-4 mt-4 border-[1px] border-white rounded-full">
              <!-- Verified Badge -->
              <img src="/img/verified.png" alt="Verified Badge" class="h-12 w-12" />


              <!-- Verified Heading -->
              <BaseHeading
              as="h1"
              size="xl"
              weight="light"
              lead="tight"
              class="text-muted-800 xs:!text-4xl mx-auto dark:text-white"
              >
              Verified
            </BaseHeading>

            <!-- Specialist Badge -->
            <div class="bg-dark-500 p-4">
              <span class="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
                <span aria-hidden class="absolute inset-0 bg-gray-200 opacity-50 rounded-full"></span>
                <span class="relative">Specialist</span>
                <span class="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
              </span>
            </div>
          </div>
        </div>
      <div class="relative z-30 pt-32 text-center" id="corporate">
        <!-- <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Corporate</BaseText> -->
        <BaseHeading
          as="h1"
          size="3xl"
          weight="light"
          lead="tight"
          class="text-muted-800 xs:!text-4xl mx-auto mb-4 max-w-2xl dark:text-white"
        >
          This will be your
          <span
            class="text-primary-500 font-hairline underline decoration-dotted underline-offset-4"
            >Dashboard</span
          >
        </BaseHeading>
      </div>
      <div class="btn-area items-center justify-center">
        <nuxt-link to="/">
          <img src="/img/mobile/app-store.png" alt="app store">
        </nuxt-link>
        <nuxt-link to="/">
          <img src="/img/mobile/play-store.png" alt="play store">
        </nuxt-link>
        <div id="watched_counter" />
      </div>
      <!-- Components -->
      <fieldset
        disabled
        class="ltablet:min-h-[760px] min-h-[2075px] w-full sm:min-h-[760px] lg:min-h-[750px]"
        aria-hidden="true"
      >
        <div
          class="group-[&.scrolled]/landing:bg-muted-100 group-[&.scrolled]/landing:dark:bg-muted-900 group-[&.scrolled]/landing:border-muted-200 group-[&.scrolled]/landing:dark:border-muted-800 group-[&.scrolled]/landing:ltablet:ps-24 relative z-30 mt-12 overflow-hidden border group-[&.scrolled]/landing:rounded-xl group-[&:not(.scrolled)]/landing:border-transparent group-[&.scrolled]/landing:pb-6 group-[&.scrolled]/landing:pe-6 group-[&.scrolled]/landing:ps-6 group-[&.scrolled]/landing:pt-20 motion-safe:transition-all motion-safe:duration-300 group-[&.scrolled]/landing:lg:ps-28"
        >
          <!-- Fake sidebar -->
          <div
            class="ltablet:w-16 ltablet:flex dark:bg-muted-800 absolute left-0 top-0 hidden h-full w-20 flex-col bg-white group-[&.scrolled]/landing:translate-x-0 group-[&:not(.scrolled)]/landing:-translate-x-full group-[&.scrolled]/landing:opacity-100 group-[&:not(.scrolled)]/landing:opacity-0 motion-safe:transition-all motion-safe:duration-200 lg:flex"
          >
            <div class="flex h-20 w-full items-center justify-center">
              <TairoLogo class="text-primary-500 h-8 w-8" />
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob bg-primary-500/10 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:house-duotone"
                  class="text-primary-500 h-5 w-5"
                />
              </div>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:grid-four-duotone"
                  class="text-muted-400 h-5 w-5"
                />
              </div>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon name="ph:users-duotone" class="text-muted-400 h-5 w-5" />
              </div>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:chat-circle-duotone"
                  class="text-muted-400 h-5 w-5"
                />
              </div>
            </div>
            <div class="mt-auto flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:gear-six-duotone"
                  class="text-muted-400 h-5 w-5"
                />
              </div>
            </div>
            <div class="flex h-16 w-full items-center justify-center">
              <div
                class="nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-700/50 flex h-12 w-12 items-center justify-center motion-safe:transition-colors motion-safe:duration-200"
              >
                <BaseAvatar
                  shape="straight"
                  size="sm"
                  src="/img/avatars/24.jpg"
                  class="nui-mask nui-mask-blob"
                />
              </div>
            </div>
          </div>
          <!-- Fake navbar -->
          <div
            class="ltablet:ps-24 absolute left-0 top-0 flex h-20 w-full items-center justify-between pe-6 ps-6 group-[&.scrolled]/landing:translate-y-0 group-[&:not(.scrolled)]/landing:-translate-y-full group-[&.scrolled]/landing:opacity-100 group-[&:not(.scrolled)]/landing:opacity-0 motion-safe:transition-all motion-safe:duration-200 lg:ps-28"
          >
            <div class="flex h-full items-center gap-4">
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon name="lucide:menu" class="text-muted-400 h-5 w-5" />
              </div>
              <BaseText class="hidden sm:inline-block">My Dashboard</BaseText>
            </div>
            <div class="flex h-full items-center justify-end gap-1">
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon name="ph:bell-duotone" class="text-muted-400 h-5 w-5" />
              </div>
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:circles-four-duotone"
                  class="text-muted-400 h-5 w-5"
                />
              </div>
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <Icon
                  name="ph:translate-duotone"
                  class="text-muted-400 h-5 w-5"
                />
              </div>
              <div
                class="nui-mask nui-mask-blob dark:hover:bg-muted-800 flex h-10 w-10 items-center justify-center hover:bg-white motion-safe:transition-colors motion-safe:duration-200"
              >
                <BaseAvatar
                  shape="straight"
                  size="xs"
                  src="/img/avatars/24.jpg"
                  class="nui-mask nui-mask-blob"
                />
              </div>
            </div>
          </div>
          <div
            class="ltablet:grid-cols-3 ltablet:gap-6 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4"
          >
            <!-- Col -->
            <div
              class="ltablet:gap-6 group-[&:not(.scrolled)]/landing:ltablet:mt-24 group-[&:not(.scrolled)]/landing:ptablet:mt-24 flex flex-col gap-6 sm:gap-3 lg:gap-4 group-[&:not(.scrolled)]/landing:lg:mt-24"
            >
              <!-- Widget -->
              <BaseCard shape="curved" elevated class="flex flex-col p-6">
                <div class="mb-6 flex items-center justify-between">
                  <BaseHeading
                    as="h3"
                    size="sm"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <span>Projects status</span>
                  </BaseHeading>
                </div>
                <div class="flex justify-center py-16">
                  <AddonApexcharts
                    v-bind="gaugePersonal"
                    class="-mt-14 motion-safe:transition-all motion-safe:duration-200"
                  />
                </div>
                <div class="mt-auto text-center">
                  <BaseParagraph size="sm">
                    <span class="text-muted-400">
                      The overall progress of all the ongoing projects
                    </span>
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
            <!-- Col -->
            <div class="ltablet:gap-6 flex flex-col gap-6 sm:gap-3 lg:gap-4">
              <!-- Widget -->
              <BaseCard shape="curved" elevated class="p-6">
                <DemoInboxMessage
                  picture="/img/avatars/10.jpg"
                  name="Kendra W."
                  title="Design Project"
                  text="Where are we in terms of design? We need to review the new screens."
                  time="28 minutes"
                  shape="curved"
                />
              </BaseCard>
              <!-- Widget -->
              <BaseCard shape="curved" elevated class="p-6">
                <DemoInfoBadges
                  image="/img/illustrations/widgets/1.svg"
                  badge-small="/img/illustrations/widgets/3.svg"
                  badge-medium="/img/illustrations/widgets/2.svg"
                  title="You've unlocked 2 new Achievements"
                  text="Congrats, your efforts have been rewarded. Keep up like this!"
                />
              </BaseCard>
            </div>
            <!-- Col -->
            <div
              class="ltablet:gap-6 group-[&:not(.scrolled)]/landing:ltablet:mt-16 group-[&:not(.scrolled)]/landing:ptablet:mt-16 flex flex-col gap-6 sm:hidden sm:gap-3 lg:flex lg:gap-4 group-[&:not(.scrolled)]/landing:lg:mt-16"
            >
              <!-- Widget -->
              <BaseCard shape="curved" elevated class="p-4">
                <DemoTeamSearchCompact shape="curved" />
              </BaseCard>
              <!-- Widget -->
              <BaseCard shape="curved" elevated class="p-3">
                <DemoVideoCompact shape="curved" />
              </BaseCard>
            </div>
            <!-- Col -->
            <div
              class="ltablet:gap-6 group-[&:not(.scrolled)]/landing:ltablet:mt-10 group-[&:not(.scrolled)]/landing:ptablet:mt-10 flex flex-col gap-6 sm:gap-3 lg:gap-4 group-[&:not(.scrolled)]/landing:lg:mt-10"
            >
              <!-- Widget -->
              <BaseCard shape="curved" elevated class="p-6">
                <DemoProgressCircle
                  image="/img/avatars/24.jpg"
                  :title="`${y < 500 ? Math.trunc(y / 5) : 100}% completed!`"
                  text="Congrats, your efforts have been rewarded. Keep up like this!"
                  :value="y < 500 ? Math.trunc(y / 5) : 100"
                />
              </BaseCard>
              <!-- Widget -->
              <BaseCard shape="curved" elevated class="p-6">
                <DemoFollowersCompact />
              </BaseCard>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
  <div class="bg-gradient-to-b from-muted-900 to-primary-900" id="talent">
    <div>
      <div data-aos="zoom-in" data-aos-duration="900" class="mx-auto w-full max-w-4xl px-4 items-center justify-center">
          <div class="flex flex-col items-center justify-center text-center pt-32">
            <!-- Talent Heading -->
            <BaseText
              class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
            >
              For talented specialists
            </BaseText>
            <BaseHeading
              as="h2"
              size="4xl"
              weight="light"
              lead="tight"
              class="text-muted-800 mx-auto mb-4 dark:text-white"
            >
              Get verified and land a <span class="text-primary-500 font-hairline underline decoration-dotted underline-offset-4">Job</span>
            </BaseHeading>
            <BaseParagraph
              size="lg"
              class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
            >
              Join Skillhub, where our team works with AI to match your unique skills with exciting job opportunities. SkillHub provides a comprehensive suite of features including earnings, forecasts, contracts, payments, and detailed project and employer information.
            </BaseParagraph>

            <!-- Badges and Heading Container -->
            <div class="flex items-center justify-center gap-4 mt-4 border-[1px] border-white rounded-full">
              <!-- Verified Badge -->
              <img src="/img/verified.png" alt="Verified Badge" class="h-12 w-12" />


              <!-- Verified Heading -->
              <BaseHeading
              as="h1"
              size="xl"
              weight="light"
              lead="tight"
              class="text-muted-800 xs:!text-4xl mx-auto dark:text-white"
              >
              Verified
            </BaseHeading>

            <!-- Specialist Badge -->
            <div class="bg-dark-500 p-4">
              <span class="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
                <span aria-hidden class="absolute inset-0 bg-gray-200 opacity-50 rounded-full"></span>
                <span class="relative">Specialist</span>
                <span class="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
              </span>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="900" class="flex flex-col w-full justify-center mx-auto">
          <div class="w-full text-center">
            <BaseHeading
            as="h1"
            size="3xl"
            weight="light"
            lead="tight"
            class="text-muted-800 xs:!text-4xl mx-auto mb-4 max-w-2xl dark:text-white mt-20"
          >
            This will be your intuitive
            <span
              class="text-primary-500 font-hairline underline decoration-dotted underline-offset-4"
              >App</span
            >
          </BaseHeading>
          </div>
          <img src="/img/landing_phone_mockup.webp" loading="lazy" alt="Mobile phone mockup" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gridlines {
  background-image: url(/img/illustrations/gridlines.svg);
}

.dark .gridlines {
  background-image: url(/img/illustrations/gridlines-dark.svg);
}
</style>
