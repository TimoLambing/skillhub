<template>
  <div class="max-w-lg">
    <BaseCard v-if="showModal" class="p-6">
      <form action="" method="POST" @submit.prevent="onSubmit" novalidate>
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-12 sm:col-span-6">
            <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="firstName">
              <BaseInput
                label="First Name"
                placeholder="ex: John"
                :model-value="field.value"
                :error="errorMessage"
                :disabled="isSubmitting"
                type="text"
                @update:model-value="handleChange"
                @blur="handleBlur"
              />
            </Field>
          </div>

          <div class="col-span-12 sm:col-span-6">
            <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="lastName">
              <BaseInput
                label="Last Name"
                placeholder="ex: Doe"
                :model-value="field.value"
                :error="errorMessage"
                :disabled="isSubmitting"
                type="text"
                @update:model-value="handleChange"
                @blur="handleBlur"
              />
            </Field>
          </div>

          <div class="col-span-12">
            <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="email">
              <BaseInput
                type="email"
                label="Email Address"
                placeholder="ex: johndoe@gmail.com"
                :model-value="field.value"
                :error="errorMessage"
                :disabled="isSubmitting"
                @update:model-value="handleChange"
                @blur="handleBlur"
              />
            </Field>
          </div>

          <div class="col-span-12">
            <Field v-slot="{ field, errorMessage, handleChange, handleBlur }" name="message">
              <BaseTextarea
                label="Message"
                placeholder="write your message..."
                :model-value="field.value"
                :error="errorMessage"
                :disabled="isSubmitting"
                @update:model-value="handleChange"
                @blur="handleBlur"
              />
            </Field>
          </div>

          <div class="col-span-12">
            <BaseButton
              type="submit"
              class="w-full"
              color="primary"
              :disabled="isSubmitting"
              :loading="isSubmitting"
              >Send Message</BaseButton
            >
          </div>
        </div>
      </form>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

const emit = defineEmits(['close-modal']);  // Define close-modal event here

const showModal = ref(true)

// This is the object that will contain the validation messages
const VALIDATION_TEXT = {
  FIRSTNAME_REQUIRED: "First name can't be empty",
  LASTNAME_REQUIRED: "Last name can't be empty",
  EMAIL_REQUIRED: 'Enter a valid email address',
  MESSAGE_REQUIRED: "Message can't be empty",
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z.object({
  firstName: z.string().min(1, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
  lastName: z.string().min(1, VALIDATION_TEXT.LASTNAME_REQUIRED),
  email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
  message: z.string().min(1, VALIDATION_TEXT.MESSAGE_REQUIRED),
})

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = computed<FormInput>(() => ({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
}))

const {
  handleSubmit,
  isSubmitting,
  setFieldError,
  meta,
  values,
  errors,
  resetForm,
  setFieldValue,
  setErrors,
} = useForm({
  validationSchema,
  initialValues,
})

const success = ref(false)

// Ask the user for confirmation before leaving the page if the form has unsaved changes
onBeforeRouteLeave(() => {
  if (meta.value.dirty) {
    return confirm('You have unsaved changes. Are you sure you want to leave?')
  }
})

const toaster = useToaster()

// This is where you would send the form data to the server
const onSubmit = handleSubmit(
  async (values) => {
    success.value = false

    try {
      // Make an HTTP POST request to the server-side endpoint
      const response = await fetch('https://skillhub.ee/netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
          subject: 'Contact Form Submission',
          message: values.message,
        }),
      })

      // Check if the response status is OK (status code 200)
      if (response.ok) {
        toaster.clearAll()
        toaster.show({
          title: 'Success',
          message: `Message has been sent!`,
          color: 'success',
          icon: 'ph:check',
          closable: true,
        })

        emit('close-modal')
      } else {
        // Handle non-successful response here (e.g., show an error toaster)
        console.error('Server responded with status', response.status);
        toaster.clearAll()
        toaster.show({
          title: 'Error',
          message: `Failed to send message. Server responded with status: ${response.status}`,
          color: 'danger',
          icon: 'lucide:alert-triangle',
          closable: true,
        })
      }

    } catch (error: any) {
      console.error(error);
      // this will set the error on the form
      if (error.message === 'Fake backend validation error') {
        setFieldError('firstName', 'This name is not allowed')

        document.documentElement.scrollTo({
          top: 0,
          behavior: 'smooth',
        })

        toaster.clearAll()
        toaster.show({
          title: 'Oops!',
          message: 'Please review the errors in the form',
          color: 'danger',
          icon: 'lucide:alert-triangle',
          closable: true,
        })
      }
      return
    }

    resetForm()

    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    success.value = true
    setTimeout(() => {
      success.value = false
    }, 3000)
  },
  (error) => {
    // this callback is optional and called only if the form has errors
    success.value = false

    // here you have access to the error
    console.log('message-send-error', error)

    // you can use it to scroll to the first error
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)
</script>
