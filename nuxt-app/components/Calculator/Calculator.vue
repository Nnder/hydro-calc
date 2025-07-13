<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()
const isDesktop = computed(() => mdAndUp.value)

const currentStep = ref(1)

const { formSteps, callback } = defineProps(['formSteps', 'callback'])

const nextStep = () => {
  if (currentStep.value < formSteps.length) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const submitForm = () => {
  callback(formSteps)
  currentStep.value = 1
}
</script>

<template>
  <ClientOnly>
    <v-stepper v-model="currentStep">
      <v-stepper-header>
        <v-stepper-item
          v-for="step in formSteps"
          :key="step.id"
          :value="step.id"
          :title="isDesktop ? step.title : ''"
        ></v-stepper-item>
      </v-stepper-header>

      <v-stepper-window>
        <v-stepper-window-item v-for="step in formSteps" :key="`content-${step.id}`" :value="step.id">
          <v-card flat class="pa-4">
            <v-img :src="step.image" aspect-ratio="1.5" cover class="mb-2 rounded-lg"></v-img>

            <v-text-field v-model="step.value" :label="step.fieldLabel" outlined clearable></v-text-field>
          </v-card>
        </v-stepper-window-item>
      </v-stepper-window>

      <v-card-actions class="px-2 pb-4 flex">
        <template v-if="currentStep < formSteps.length">
          <v-btn
            :size="isDesktop ? 'x-large' : 'large'"
            v-if="currentStep > 1"
            color="secondary"
            @click="prevStep"
            rounded="xl"
          >
            Назад
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :size="isDesktop ? 'x-large' : 'large'"
            v-if="currentStep < formSteps.length"
            color="primary"
            rounded="xl"
            @click="nextStep"
          >
            Далее
          </v-btn>
        </template>

        <div v-else class="flex flex-col w-full">
          <div class="mb-2">
            <v-btn
              :size="isDesktop ? 'x-large' : 'large'"
              v-if="currentStep > 1"
              color="secondary"
              @click="prevStep"
              class="mr-2"
              rounded="xl"
            >
              Назад
            </v-btn>
          </div>

          <div class="w-full flex flex-col gap-2">
            <v-btn
              variant="elevated"
              rounded="xl"
              :size="isDesktop ? 'x-large' : 'large'"
              color="green"
              @click="submitForm"
            >
              Добавить в заказ
            </v-btn>
          </div>
        </div>
      </v-card-actions>
    </v-stepper>
  </ClientOnly>
</template>

<style scoped>
.v-stepper {
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}
</style>
