<template>
  <div>
                    <!-- Header -->
                    <div class="flex w-full items-center justify-between p-4 md:p-6">
                      <h3
                        class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"
                      >
                        Invest in SkillHub
                      </h3>
                      <BaseButtonClose />
                    </div>
  <!-- Body -->
  <div class="p-4 md:p-6 overflow-auto max-h-[70vh]">
    <div class="mx-auto w-full text-center">
      <div class="flex flex-row items-center justify-center">
        <h3
          class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white p-4"
        >
          Hi there, it's Timo here!
        </h3>
        <BaseAvatar
                shape="straight"
                size="md"
                src="/img/ceo.png"
                class="nui-mask nui-mask-blob"
              />
      </div>
      <BaseText
        class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
        >( founder and developer at skillhub )
      </BaseText>
      <h4
          class="font-heading text-muted-800 text-sm font-medium leading-6 dark:text-white p-4"
        >
          First of all, thank you for your interest.
        </h4>
      <p
        class="font-alt text-muted-500 dark:text-muted-400 text-md leading-5 p-4 text-left"
      >
      A bit about the background of this project: I have worked in the production sector, both in construction and electrical installations, and later started brokering rental labor. I discovered that larger companies consistently need reliable labor on short notice as they constantly have fires to put out. At such times, they are willing to pay well. However, the need is often short-term, and sometimes finding the extra hand is a matter of hours. Hence the principle for rental companies: first come, first served.
      </p>
      <p
        class="font-alt text-muted-500 dark:text-muted-400 text-md leading-5 px-4 text-left"
      >
      I did this job and it was very profitable. I still have all the experiences and contracts I acquired during this period. I must mention that the job was very nerve-wracking and manual. I was constantly solving problems; the labor was not quality, on the phone day and night. At that point, I decided there must be a way to automate myself. So, I devised a system that would manage most of the functions I had to manage, to scale this business and let the team focus on what really matters – finding clients and onboarding workers.
      </p>
      <p
        class="font-alt text-muted-500 dark:text-muted-400 text-md leading-5 p-4 text-left"
      >
      My thesis is that there are always sectors in the market doing well, and sectors doing poorly. In any economic situation, those who can channel labor flow into successful sectors thrive.
      </p>
      <h4
          class="font-heading text-muted-800 text-sm font-medium leading-6 dark:text-white p-4"
        >
      Thus, the principle of SkillHub is to automate the labor rental company, managing the entire process from the outset:
      </h4>
      <div class="mx-6 md:mx-16">
        <BaseText
        class="font-alt text-muted-500 dark:text-muted-400 text-md leading-5 p-2 text-left"
      >
        <ol class="list-decimal">
            <li class="mb-2">Automatic ads, targeted social media marketing, and SEO, which facilitate 24/7 online sales and direct all traffic to www.skillhub.ee.</li>
            <li class="mb-2">The platform registers companies and workers (along with skill levels) in our database, and SkillHub is installed on their computers and mobiles, allowing notifications to be sent directly to phones through the app.</li>
            <li class="mb-2">Companies can do two things:
                <ol type="a" style="list-style-type: lower-alpha;" class="mx-2 md:mx-6 mt-2">
                    <li class="mb-2">Search for the necessary specialist from the database, showing only those immediately available and also validated by the platform for skill levels, to ensure trust. However, a premium price is to be paid for this "on-demand" specialist.</li>
                    <li class="mb-2">If production volumes fall, the company can rent out its workers through the platform. The worker remains on their payroll but works for another company within a project framework. The company gives its own assessment of the worker (later the client does too), improving database quality through this mechanism. This allows companies to retain their workers in bad situations instead of laying them off, while still making money.</li>
                </ol>
            </li>
            <li class="mb-2">Specialists can map their skills through a modified ESCO activity classifier and upload themselves to our database, making them available to all companies. To enhance their credibility, job seekers must undergo a review of their skills in their field of activity at our partner companies, who then give an impartial assessment of their actual skills on a 1-5 ball scale (never heard, beginner, intermediate, proficient, specialist). The price for confirmed specialists is higher.</li>
            <li class="mb-2">Artificial intelligence constantly checks companies' "orders" with the properties of specialists in our database, and also collects data from the internet from public datasets about workers and companies. Based on all this information, AI offers "matching" to the parties.</li>
            <li class="mb-2">Once a "match" is achieved, it is offered to both parties, who can then only view information about the other party. If the project, company, and specialist match, a two-day "trial contract" is made through the platform, during which both parties can ensure compatibility.</li>
            <li class="mb-2">If everyone agrees, a full contract is concluded for the agreed period, for example, a two-month contract within the project.</li>
            <li class="mb-2">The contract is concluded directly on the platform and remains on the platform, always accessible to both parties, along with all conditions and fees, ensuring reliability.</li>
            <li class="mb-2">Now the specialist has time to fulfill the contract terms. For the process to run smoothly, the employer can monitor the worker's working hours, location, work progress and everything necessary directly from the platform without leaving home.</li>
            <li class="mb-2">At the end of the month, SkillHub issues an invoice to the subscriber and pays it either directly to the worker or to the company whose worker it is, and with that, the cycle is complete.</li>
        </ol>
        </BaseText>
      </div>
      <div class="mx-6 md:mx-16">
      <h4
          class="font-heading text-muted-800 text-sm font-medium leading-6 dark:text-white p-4"
        >
        The scaling of this process, in any sector, through the SkillHub platform is possible on a large scale.
      </h4>
      <p
        class="font-alt text-muted-500 dark:text-muted-400 text-md leading-5 p-4 text-left"
      >
      Investment needs:
      </p>
      <BaseText
        class="font-alt text-muted-500 dark:text-muted-400 text-md leading-5 p-4 text-left"
      >
      <ul class="list-decimal">
        <li class="mb-2">
          Legal framework development by one of Estonia's best in this field
        </li>
        <li class="mb-2">
          Programming of the described process requires a team of programmers.
          </li>
          <li class="mb-2">
            Development of marketing strategy and implementation of campaigns
          </li>
          <li class="mb-2">
            Initially, there should be some kind of buffer for the payroll fund and unforeseen situations - 10,000 euros, until the first contract fees start coming in, then the company is immediately able to scale from its own revenues.
          </li>
      </ul>
      </BaseText>
    </div>
    <div class="mx-6 md:mx-16">
        <h4
              class="font-heading text-muted-800 text-sm font-medium leading-6 dark:text-white p-4"
            >
            Non-profitable contracts or contracts below a certain profit margin are not allowed on the platform. Thus, the risk is reduced solely to the legal aspect; if we secure a contract, we earn revenue.
          </h4>
      <p
        class="font-alt text-muted-500 dark:text-muted-400 text-md leading-5 p-4 text-left"
      >
      By the end of the investment period:
      </p>
      <BaseText
        class="font-alt text-muted-500 dark:text-muted-400 text-md leading-5 p-4 text-left"
      >
      <ul class="list-decimal">
        <li class="mb-2">
          The legal aspect is in place to draft contracts.
        </li>
        <li class="mb-2">
          The process described above is functional from start to finish, and tested and secure.
          </li>
          <li class="mb-2">
            The marketing campaign is operational and actively directs clients and workers to the platform across Europe.
          </li>
          <li class="mb-2">
            Agreed network of partners.
          </li>
          <li class="mb-2">
            The salesperson can begin onboarding companies and the talent specialist can assist workers in registering on the platform and with any arising questions.
          </li>
          <li class="mb-2">
            The company begins to issue invoices for the first contracts, thereby generating revenue and profit.
          </li>
      </ul>
      </BaseText>
    </div>
    <h4
          class="font-heading text-muted-800 text-sm font-medium leading-6 dark:text-white p-4 text-left"
        >
        If you've read to the end of this lengthy content, it must signify your interest! If you wish to learn more about how you could support this mission of innovating the workforce rental sector, feel free to reach out to me directly at the following email:
        </h4>
        <BaseText
        class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
        >timo@skillhub.ee
      </BaseText>
      <h4
          class="font-heading text-muted-800 text-sm font-medium leading-6 dark:text-white p-4"
        >
        Or, send a message through the form below
      </h4>
  </div>
  <div class="flex w-full mx-auto items-center justify-center">
    <ContactModal />
  </div>
  </div>
</div>
</template>
