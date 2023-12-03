<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Rock Solid</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="normal"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          Why choose SkillHub
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          SkillHub is a modern, clean and fully responsive AI-system for automating your company's staff management needs. It is built with care and provides a solid
          foundation for your next project, while yielding an exquisite
          staffing experience.
        </BaseParagraph>
      </div>
      <div class="mb-10 grid gap-y-16 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16">
        <div class="relative">
          <BaseHeading
            as="h3"
            size="lg"
            weight="light"
            lead="normal"
            class="mb-3"
          >
            Powered by synergy of AI and human
          </BaseHeading>
          <div class="space-y-4">
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl in felis vehicula fermentum. Nullam non nisi ac eros faucibus convallis. Sed euismod, mi vitae placerat tincidunt, nunc erat vestibulum lorem, eget fermentum nisl nunc nec diam. Mauris nec ante at sapien gravida fermentum.
            </BaseParagraph>
          </div>
        </div>
        <div class="relative">
          <BaseHeading
            as="h3"
            size="lg"
            weight="light"
            lead="normal"
            class="mb-3"
          >
            Project and staff overview tools
          </BaseHeading>
          <div class="space-y-4">
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl in felis vehicula fermentum. Nullam non nisi ac eros faucibus convallis. Sed euismod, mi vitae placerat tincidunt, nunc erat vestibulum lorem, eget fermentum nisl nunc nec diam. Mauris nec ante at sapien gravida fermentum. Ut imperdiet, dolor in consectetur consequat, nisi ante aliquam magna, sed maximus justo turpis eget quam. Curabitur sed nisl magna. Morbi vel accumsan nunc, nec lobortis dui.
            </BaseParagraph>
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl in felis vehicula fermentum.
            </BaseParagraph>
          </div>
        </div>
        <div class="relative">
          <BaseHeading
            as="h3"
            size="lg"
            weight="light"
            lead="normal"
            class="mb-3"
          >
            Platform verified skills system
          </BaseHeading>
          <div class="space-y-4">
            <BaseParagraph
              size="sm"
              lead="normal"
              class="text-muted-500 dark:text-muted-400"
            >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nisl in felis vehicula fermentum. Nullam non nisi ac eros faucibus convallis. Sed euismod, mi vitae placerat tincidunt, nunc erat vestibulum lorem, eget fermentum nisl nunc nec diam. Mauris nec ante at sapien gravida fermentum. Ut imperdiet, dolor in consectetur consequat, nisi ante aliquam magna, sed maximus justo turpis eget quam. Curabitur sed nisl magna. Morbi vel accumsan nunc, nec lobortis dui.
            </BaseParagraph>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/img/illustrations/nation.svg"
          width="768"
          height="432"
          alt="placeholder-image"
          class="mx-auto max-w-full sm:max-w-3xl"
          loading="lazy"
          decoding="async"
        />
        <div class="mx-auto mb-3 max-w-md text-center">
          <BaseHeading
            as="h3"
            size="xl"
            weight="light"
            lead="normal"
            class="text-muted-800 mb-1 dark:text-white"
          >
            Get SkillHub now
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-100">
            Don't waste time. Start
            hiring and get your staff needs under control with SkillHub today.
          </BaseParagraph>
        </div>
        <div class="my-2 flex justify-center gap-2">
          <BaseButton
            color="primary"
            shape="curved"
            shadow="hover"
            class="!h-11 w-48"
            to="#"
          >
            <!-- <Icon name="cib:envato" class="h-4 w-4" /> -->
            <span>Download SkillHub</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
