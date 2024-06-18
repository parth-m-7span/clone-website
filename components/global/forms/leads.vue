<template>
  <form class="w-full space-y-4" @submit.prevent="register">
    <div class="xl:flex xl:gap-6">
      <div class="xl:w-1/2">
        <FormLabel value="Name" />
        <FormInput v-model="name" required @change="triggerPostHogEvent" />
      </div>

      <div class="xl:w-1/2 mt-4 xl:mt-0">
        <FormLabel value="Email" />
        <FormInput v-model="email" type="email" required />
        <p v-if="email && !isValidEmail" class="text-red-500">
          Please enter valid email
        </p>
      </div>
    </div>

    <div class="xl:flex xl:gap-6">
      <div class="xl:w-2/5">
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

      <div class="xl:w-1/2 mt-4 xl:mt-0">
        <FormLabel value="Designation" />
        <FormInput v-model="designation" required />
      </div>
    </div>

    <div class="mt-4">
      <FormLabel value="What is your budget for this project? (US Dollars)" />
      <DropDownInputField
        v-model="budget"
        category="Please Select"
        :options="budgetOptions"
        :required="true"
      />
    </div>

    <div class="mt-4">
      <FormLabel value="How did you hear about us?" />
      <FormInput v-model="sourceOfLead" required />
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
const { $posthog } = useNuxtApp();
const posthog = $posthog ? $posthog() : null;

const gtm = useGtm();

const name = ref();
const email = ref();
const message = ref();
const company = ref();
const designation = ref();
const number = ref();
const countryCode = ref();
const sourceOfLead = ref();
const budget = ref();
const budgetOptions = ref([
  { label: "Less than $2000", value: "<2000" },
  { label: "$2000 - $5000", value: "2000-5000" },
  { label: "$5000 - $10000", value: "5000-10000" },
  { label: "$10000 - $20000", value: "10000-20000" },
  { label: "$20000 - $50000", value: "20000-50000" },
  { label: "$50000 +", value: ">50000" },
]);

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
  budget.value = "";
};

const emit = defineEmits(["fromSubmit"]);

const register = async () => {
  if (isValidEmail && isValidNumber()) {
    try {
      const trackingData = JSON.parse(sessionStorage.getItem("tracking-data"));
      const localDate = new Date().toLocaleDateString();
      const localTime = new Date().toLocaleTimeString();

      const items = {
        name: name.value,
        email: email.value,
        phone_number: number.value,
        company_name: company.value || "",
        designation: designation.value,
        message: message.value,
        country_code: countryCode.value,
        page_id: pageId,
        source_of_lead: sourceOfLead.value,
        budget: budget.value,
        tracking_data: trackingData,
        gclid: trackingData?.gclid || "",
        lead_local_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        lead_local_datetime: `${localDate} ${localTime}`,
      };

      const response = await createItems({ collection: "sw_leads", items });
      if (response.id) {
        delete sessionStorage["tracking-data"];
        gtm.trackEvent({
          event: "form_submitted",
          submission_id: response?.id,
        });

        posthog?.capture("form_submitted", {
          "lead-id": response?.id,
        });

        emptyData();
        emit("fromSubmit", true);
      }
    } catch (e) {
      console.error("Error occured", e);
      alert("Error occured", e);
    }
  }
};

function triggerPostHogEvent () {
  posthog?.capture("form_start", {});
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
