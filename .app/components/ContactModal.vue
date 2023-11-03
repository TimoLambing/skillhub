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
            <BaseButton type="submit" class="w-full" color="primary" :disabled="isSubmitting" :loading="isSubmitting">Send Message</BaseButton>
          </div>
        </div>
      </form>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import Mail from "@/netlify/functions/contact";
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

const emit = defineEmits(['close-modal']); // Define close-modal event here
const showModal = ref(true)

const VALIDATION_TEXT = {
  FIRSTNAME_REQUIRED: "First name can't be empty",
  LASTNAME_REQUIRED: "Last name can't be empty",
  EMAIL_REQUIRED: 'Enter a valid email address',
  MESSAGE_REQUIRED: "Message can't be empty",
}

const zodSchema = z.object({
  firstName: z.string().min(1, VALIDATION_TEXT.FIRSTNAME_REQUIRED),
  lastName: z.string().min(1, VALIDATION_TEXT.LASTNAME_REQUIRED),
  email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
  message: z.string().min(1, VALIDATION_TEXT.MESSAGE_REQUIRED),
})

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
  setErrors,
} = useForm({
  validationSchema,
  initialValues,
})

const success = ref(false)

onBeforeRouteLeave(() => {
  if (meta.value.dirty) {
    return confirm('You have unsaved changes. Are you sure you want to leave?')
  }
})

const toaster = useToaster()

async function submitContactForm() {
  const { firstName, lastName, email, message } = values;

  const response = await Mail.sendEmail(email, "Contact Form Submission", `
    Name: ${firstName} ${lastName}
    Email: ${email}
    Message: ${message}
  `);

  if (response.ok) {
    success.value = true;
  } else {
    setErrors(response.errors); // Update validation errors based on the response
    success.value = false;
  }
}

const onSubmit = handleSubmit(
  async (formValues) => {
    success.value = false;

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formValues.firstName} ${formValues.lastName}`,
          email: formValues.email,
          subject: 'Contact Form Submission',
          message: formValues.message,
        }),
      });

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
    success.value = false
    console.log('message-send-error', error)
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)
</script>
