<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <div
        class="mt-8 flex flex-col-reverse flex-wrap md:flex-nowrap lg:flex-row bg-black gap-px border"
      >
        <div
          class="flex flex-col justify-between p-4 md:p-6 lg:w-7/12 xl:p-12 bg-white"
        >
          <SwBody2 :content="_testimonials[0].message" />
          <div class="mt-4 text-left md:mt-10">
            <SwDisplay2 :content="_testimonials[0].name" class="mb-1" />
            <SwBody2
              :content="`${
                _testimonials[0].designation
                  ? _testimonials[0].designation + '@ '
                  : ''
              } ${
                _testimonials[0].company_name
                  ? _testimonials[0].company_name
                  : ''
              }`"
            />
          </div>
        </div>
        <div class="bg-gray-100 p-4 md:p-6 lg:w-5/12 xl:p-12">
          <SwImage
            width="600"
            height="600"
            class="md:h-full md:w-full object-cover border"
            :value="_testimonials[0].photo"
            alt="image"
          />
        </div>
      </div>
      <div v-if="_testimonials.length > 1" class="pt-10 lg:pt-20">
        <SwMobileSlideContainer :no-top-space="true">
          <SwDisplay2 class="mb-10" content="Product User Testimonials" />
          <div
            class="flex flex-nowrap gap-4 lg:block lg:columns-2 lg:gap-8 xl:columns-3"
          >
            <!-- ITEM -->
            <div
              v-for="(testimonial, index) in _testimonials.slice(1)"
              :key="`t-${index}`"
              class="border flex flex-col justify-between w-4/5 snap-start flex-none md:w-[60%] lg:w-full lg:break-inside-avoid lg:mb-8"
            >
              <UserTestimonialCard
                :message="testimonial.message"
                :name="testimonial.name"
              />
            </div>
          </div>
        </SwMobileSlideContainer>
      </div>
    </SwContentContainer>
  </SwSection>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: [
    "metadata.id",
    "metadata.title",
    "metadata.subtitle",
    "testimonials.sw_testimonials_id.company_name",
    "testimonials.sw_testimonials_id.designation",
    "testimonials.sw_testimonials_id.name",
    "testimonials.sw_testimonials_id.message",
    "testimonials.sw_testimonials_id.photo.id",
    "testimonials.sw_testimonials_id.photo.filename_disk",
  ],
});

const {
  metadata: { id, title, subtitle },
} = data;

const _testimonials = data.testimonials.map(
  testimonial => testimonial.sw_testimonials_id,
);
</script>
