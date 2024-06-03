<template>
  <form class="w-full space-y-4" @submit.prevent="register">
    <div class="xl:flex xl:gap-6">
      <div class="xl:w-1/2">
        <FormLabel value="Name" />
        <FormInput v-model="name" required />
      </div>

      <div class="xl:w-1/2">
        <FormLabel value="Email" />
        <FormInput v-model="email" type="email" required />
        <p v-if="email && !isValidEmail" class="text-red-500">
          Please enter valid email
        </p>
      </div>
    </div>

    <div class="xl:flex xl:gap-6">
      <div class="xl:w-1/3">
        <FormLabel value="Country Code" />
        <FormInput v-model="countryCode" required />
      </div>

      <div class="xl:w-2/3 mt-4 xl:mt-0">
        <FormLabel value="Phone Number" />
        <FormInput v-model="number" type="number" min="0" required />
      </div>
    </div>

    <div class="xl:flex xl:gap-6">
      <div class="xl:w-1/2">
        <FormLabel value="Company" optional />
        <FormInput v-model="company" />
      </div>

      <div class="xl:w-1/2">
        <FormLabel value="Designation" optional />
        <FormInput v-model="designation" />
      </div>
    </div>

    <div class="mt-4">
      <FormLabel value="How did you hear about us?" optional />
      <FormInput v-model="sourceOfLead" />
    </div>

    <div>
      <FormLabel value="Message" />
      <FormTextarea v-model="message" rows="8" required />
    </div>

    <SwButtonPrimary label="Submit Now" type="submit" class="w-full" />
  </form>
</template>

<script setup>
const { createItems } = useDirectusItems();
const gtm = useGtm();

const name = ref();
const email = ref();
const message = ref();
const company = ref();
const designation = ref();
const number = ref();
const countryCode = ref();
const sourceOfLead = ref();

const { id: pageId } = await usePage();

const isValidEmail = computed(() => {
  return /^[^@]+@\w+(\.\w+)+\w$/.test(email.value);
});
const isValidNumber = () => {
  if (number.value.length < 4) {
    alert("Minimum 4 digits are required");
  } else {
    return true;
  }
};

const emptyData = () => {
  name.value = "";
  email.value = "";
  message.value = "";
  company.value = "";
  designation.value = "";
  number.value = "";
  countryCode.value = "";
  sourceOfLead.value = "";
};

const register = async () => {
  if (isValidEmail && isValidNumber()) {
    try {
      const items = {
        name: name.value,
        email: email.value,
        phone_number: number.value,
        company_name: company.value,
        designation: designation.value,
        message: message.value,
        country_code: countryCode.value,
        page_id: pageId,
        source_of_lead: sourceOfLead.value,
      };
      const response = await createItems({ collection: "sw_leads", items });
      gtm.trackEvent({
        event: "form_submitted",
        submission_id: response?.id,
      });
      emptyData();
      alert("Form submitted successfully");
    } catch (e) {
      alert("Error occured", e);
    }
  }
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
