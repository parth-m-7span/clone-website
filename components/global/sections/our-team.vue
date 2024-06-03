<template>
  <SwSection :id="id">
    <SwContentContainer>
      <div class="mb-8 md:mb-10">
        <SwDisplay1 :content="title" />
        <SwBody1 :content="subtitle" />
      </div>
      <SwMobileSlideContainer>
        <div
          class="flex flex-nowrap gap-4 lg:grid lg:grid-cols-2 lg:border lg:gap-px lg:bg-black"
        >
          <div
            v-for="(user, index) in _users"
            :key="index"
            class="border flex-none lg:flex w-3/4 lg:bg-white lg:w-full lg:border-none"
          >
            <div
              class="flex flex-col divide-y divide-black lg:flex-row lg:divide-y-0 lg:divide-x w-full"
            >
              <div class="p-4 bg-gray-100 xl:p-6 lg:w-5/12">
                <SwImage
                  height="500"
                  width="500"
                  sizes="sm:100vw xl:25vw"
                  :value="user.avatar"
                  class="w-full h-full aspect-square object-cover border"
                />
              </div>
              <div class="p-4 flex flex-col justify-between lg:w-7/12 xl:p-6">
                <div class="space-y-1">
                  <SwDisplay2
                    :content="`${user.first_name} ${user.last_name}`"
                  />
                  <SwBody2 :content="user.title" class="text-gray-600" />
                </div>
                <div class="flex items-center space-x-2 pt-4 lg:pt-0">
                  <a
                    v-if="user.linkedin_url"
                    :href="user.linkedin_url"
                    target="_blank"
                  >
                    <SwImage
                      height="32"
                      width="32"
                      url="/images/linkedin.svg"
                      class="h-full w-full"
                    />
                  </a>
                  <a v-if="user.x_url" :href="user.x_url" target="_blank">
                    <SwImage
                      height="32"
                      width="32"
                      url="/images/x.svg"
                      class="h-full w-full"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwMobileSlideContainer>
    </SwContentContainer>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const fields = [
  "id",
  "metadata.title",
  "metadata.subtitle",
  "users.directus_users_id.avatar.id",
  "users.directus_users_id.avatar.filename_disk",
  "users.directus_users_id.first_name",
  "users.directus_users_id.last_name",
  "users.directus_users_id.linkedin_url",
  "users.directus_users_id.title",
  "users.directus_users_id.x_url",
];
const data = await useSectionData(props, {
  fields,
});

const {
  id,
  metadata: { title, subtitle },
  users,
} = data;

const _users = users.map(user => user.directus_users_id);
</script>
