# Kitchen Sink

The following example presents a wizard with two steps. Three questions on the first step, and two on the second step.

The following items are also demonstrated:

- `givenName` has been pre-populated and set as readonly.
- The background colour and text colour of the boilerplate have been customised.
- The next and previous button labels have been customised.
- The preview screen will display a table

## Code

```vue
<script setup lang='ts'>
import { z } from 'zod'
import type { Form } from 'wizard-of-zod/types'
import Wizard from 'wizard-of-zod'

const forms: Form<z.ZodObject<any>>[] = [
  {
    title: 'Personal Details',
    description: 'We ask for these details so we know how to address you.',
    schema: z.object({
      givenName: z.string().describe('What is your given name?'),
      familyName: z.string().describe('What is your family name?'),
      gender: z.enum(['male', 'female']).describe('What is your gender?')
    }),
    fieldConfig: {
      givenName: {
        inputProps: {
          readonly: true
        }
      }
    }
  },
  {
    title: 'Contact Details',
    description: 'We ask for these so we can contact you if we need to.',
    schema: z.object({
      email: z.string().describe('What is your email address?'),
      phone: z.string().describe('What is your phone number?')
    })
  }
]

const initialAnswers = {
    givenName: 'John',
    email: 'john.doe@example.com'
}

const handleCompleted = (data: Record<string, any>) => {
  console.log(data)
}
</script>

<template>
  <Wizard
    :classes="{ woz: 'bg-gray-500 text-gray-900' }"
    :custom-i18n="{
      next: 'Continue',
      previous: 'Go Back'
    }"
    :forms="forms"
    :initial-answers="initialAnswers"
    preview="table"
    progress-indicator="stepper"
    @completed="handleCompleted"
  />
</template>
```

## xScreenshot

## xResulting Data