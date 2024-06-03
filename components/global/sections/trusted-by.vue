<template>
  <SwSection :id="id">
    <SwContentContainer>
      <SwDisplay1 :content="title" />
      <SwBody1 :content="subtitle" />

      <!-- LOGOS -->
      <div
        class="mt-8 grid grid-cols-2 bg-black gap-px border lg:mt-10 lg:grid-cols-5"
      >
        <div
          v-for="(brand, index) in _brands"
          :key="index"
          class="bg-white aspect-square p-8 lg:p-12"
        >
          <SwImage
            height="350"
            width="350"
            sizes="sm:50vw xl:25vw"
            :value="brand.media"
            class="h-full w-full max-w-[120px] m-auto lg:max-w-[160px]"
          />
        </div>
      </div>

      <!-- TESTIMONIALS -->
      <SwMobileSlideContainer>
        <div
          class="flex flex-nowrap gap-4 lg:block lg:columns-2 lg:gap-8 xl:columns-3"
        >
          <!-- ITEM -->
          <div
            v-for="(testimonial, index) in _testimonials"
            :key="`t-${index}`"
            class="border flex flex-col justify-between w-4/5 snap-start flex-none md:w-[60%] lg:w-full lg:break-inside-avoid lg:mb-8"
          >
            <TestimonialsCard
              :message="testimonial.message"
              :name="testimonial.name"
              :designation="testimonial.designation"
              :company-name="testimonial.company_name"
              :photo="testimonial.photo"
            />
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

const data = await useSectionData(props, {
  fields: [
    "metadata.title",
    "metadata.subtitle",
    "metadata.id",
    ...getMediaKeys("brands.sw_cards_id"),
    "testimonials.sw_testimonials_id.name",
    "testimonials.sw_testimonials_id.message",
    "testimonials.sw_testimonials_id.designation",
    "testimonials.sw_testimonials_id.company_name",
    "testimonials.sw_testimonials_id.photo.id",
    "testimonials.sw_testimonials_id.photo.filename_disk",
    "testimonials.sw_testimonials_id.photo.title",
  ],
});

const {
  metadata: { title, subtitle, id },
  brands,
  testimonials,
} = data;

const _brands = brands.map(brand => brand.sw_cards_id);
const _testimonials = testimonials.map(
  testimonial => testimonial.sw_testimonials_id,
);
</script>
