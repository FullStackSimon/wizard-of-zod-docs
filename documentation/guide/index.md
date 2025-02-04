# Introduction

Wizard of Zod is a Vue component that makes rendering and collecting data from step by step forms easy to implement in any Vue project.

::: tip
Just want to try it out? Skip to the [QuickStart](getting-started.md).
:::

## About

Wizard of Zod was created out of the frustration with the time-consuming task of having to manually create step by step forms for use in touch screen kiosks, websites and other software.

As a developer, I just wanted to provide a simple schema which would automatically handle form rendering and validation with the end result of collecting well-formed valid data from the user as I expected.

The eureka moment came when I stumbled upon [shadcn-vue.com](https://www.shadcn-vue.com/) and particularly their excellent [AutoForm](https://www.shadcn-vue.com/docs/components/auto-form.html) component which does most of the magic by taking a Zod schema rendering it as a form and handling validation. Exceptional!

The following table shows the mapping of Zod schemas to rendered [shadcn-vue.com components](https://www.shadcn-vue.com/docs/components).

| Zod Schema | Shadcn-vue.com Component                                                                                                                       |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| boolean    | [Checkbox](https://www.shadcn-vue.com/docs/components/checkbox.html) or [Switch](https://www.shadcn-vue.com/docs/components/switch.html)       |
| number     | [NumberField](https://www.shadcn-vue.com/docs/components/number-field.html)                                                                    |
| string     | [Input](https://www.shadcn-vue.com/docs/components/input.html) or [Textarea](https://www.shadcn-vue.com/docs/components/textarea.html)         |
| file       | [File Input](https://www.shadcn-vue.com/docs/components/input.html#file)                                                                       |
| date       | [Datepicker](https://www.shadcn-vue.com/docs/components/date-picker.html)                                                                      |
| enum       | [Select](https://www.shadcn-vue.com/docs/components/select.html) or [Radio Group](https://www.shadcn-vue.com/docs/components/radio-group.html) |


You can also provide a custom component of your own for any schema. Read more about that over at [shadcn-vue.com](https://www.shadcn-vue.com/docs/components/auto-form.html#component).

## A Simple Example

Simply provide an array of Zod Schemas (***which will be treated as individual forms***) and Wizard of Zod will present them as a step-by-step form wizard... hence the name "Wizard of Zod"!

This example presents a form wizard with 3 steps (forms).

```vue
<script setup lang='ts'>
import { z } from 'zod'
import type { Form } from 'wizard-of-zod/types'
import Wizard from 'wizard-of-zod/Wizard.vue'

const forms: Form<z.ZodObject<any>>[] = [
  {
    schema: z.object({
      givenName: z.string().min(2)
    })
  },
  {
    schema: z.object({
      familyName: z.string()
    })
  }, 
  {
    schema: z.object({
      gender: z.enum(['male', 'female']).describe('What is your gender?')
    })
  }
]

const handleCompleted = (data: Record<string, any>) => {
  console.log(data)
}
</script>

<template>
  <Wizard
    :forms="forms"
    @completed="handleCompleted"
  />
</template>
```

The data payload available in the `@completed` event will contain the answers provided by the user.

So, for the above simple example you will receive an object like this for example:

```javascript
{
  givenName: 'John',
  familyName: 'Doe',
  gender: 'male'
}
```

It is up to you what you do with the collected data from there!