<template>
  <SwSection>
    <SwContentContainer>
      <SwDisplay1 content="Solution Overview" />
      <SwBody1
        content="Added a combination of techpertise and results-driven solutions."
      />

      <div class="mt-10 lg:columns-2 lg:gap-0">
        <div
          v-for="(solution, index) in solutions"
          :key="index"
          class="break-inside-avoid border border-b-0 p-8 last:border-b lg:p-12 [&:nth-child(4)]:lg:border-b [&:nth-child(1)]:lg:border-r-0 [&:nth-child(2)]:lg:border-r-0 [&:nth-child(3)]:lg:border-r-0 [&:nth-child(4)]:lg:border-r-0"
        >
          <h5
            class="text-2xl font-semibold font-display lg:text-3xl leading-none"
          >
            {{ solution.text }}
          </h5>
          <SwBody2 :content="solution.content" class="pt-1" />
        </div>
      </div>
    </SwContentContainer>
  </SwSection>
  <!-- <section class="px-8 pb-8 pt-20 md:px-12 lg:px-20 xl:pb-20 xl:pt-40">
    <div class="2xl:container lg:columns-2 lg:gap-0 2xl:mx-auto">
      <div
        v-for="(solution, index) in solutions"
        :key="index"
        class="break-inside-avoid border border-b-0 p-8 last:border-b lg:p-12 [&:nth-child(4)]:lg:border-b [&:nth-child(n+5)]:lg:border-l-0"
      >
        <h5 class="text-2xl font-semibold font-display lg:text-3xl">
          {{ solution.text }}
        </h5>
        <SwBody2 :content="solution.content" class="pt-6" />
      </div>
    </div>
  </section> -->
</template>

<script setup>
const solutions = [
  {
    text: "CRM, Provide a plateform where user can manage their WhatsApp contact with much more feature then WhatsApp's default feature",
    content:
      "Quick Reply Templates to easily send msg on WhatsApp with Personalization, Manage Tag, Assign Funnel, Auto Sync WhatsApp chat for better analysics. Create Ticket for customr support team, Import/Export contact. Dashboard and report.",
  },
  {
    text: "Cloud Infrastrcture",
    content:
      "AWS, DigitalOcean, Bunney.net <br/> Resilient network with AWS and DigitalOcean <br/>Vertical and Horizotal Scaling",
  },
  {
    text: "Custom Domain support",
    content:
      "Caddy server, <br/> Sitemap for SEO purpose. Whilelable option to host store Multilanguage support",
  },
  {
    text: "Online 8+ Payment Gateway Integration, Supported 140+ Currency",
    content:
      "Caddy server, <br/> Sitemap for SEO purpose. Whilelable option to host store.Multilanguage support",
  },
  {
    text: "3rd Party integration",
    content:
      "Zapier, Salesforce, HubSpot, WhatsApp Business API, <br/> Google analytics, Facebook Pixel.",
  },
  {
    text: "Analytics, Marketing service Integration",
    content:
      "Segment, MixPanel, OneSignal, SendGrid, HotJar, <br/> Microsoft Clarity, FreshWork Suits <br/> User Segmentation. <br/> Data lack.",
  },
  {
    text: "Cuttening edge tech stack",
    content: "GraphQL, Laravel10, Vue3, Nuxt3, Tailwind CSS, Flutter",
  },
  {
    text: "Infrastructure observability and Monitoring",
    content:
      "Segment, MixPanel, OneSignal, SendGrid, HotJar, <br/> Microsoft Clarity, FreshWork Suits <br/> User Segmentation. <br/> Data lack.",
  },
  {
    text: "Report and Dashboard",
    content:
      "CRM -> Daily message send and receive,<br/> Store -> Product wise,<br/> Customer wise report with all possible time intervals",
  },
];
</script>
