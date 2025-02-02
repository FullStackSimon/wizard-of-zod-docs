# Introduction

Wizard of Zod is a Vue component that makes rendering and collecting data from step by step forms easy to implement in any Vue project.

::: tip
Just want to try it out? Skip to the [QuickStart](getting-started.md).
:::

## About

Wizard of Zod was created out of the frustration with the time-consuming task of having to manually create step by step forms for use in touch screen kiosks, websites and other software.

As a developer, I just wanted to provide a simple schema which would automatically handle form rendering and validation with the end result of collecting well-formed valid data from the user as I expected.

So after quite a bit of research, I settled on standing on the shoulders of the following giants:

- [Zod](http://zod.dev) for Typescript first schema validation
- [AutoForm](https://www.shadcn-vue.com/docs/components/auto-form.html) from [shadcn-vue.com](https://www.shadcn-vue.com) for form rendering

The following basic fields are supported out of the box.

| Zod Schema | HTML Element                     |
|------------|----------------------------------|
| boolean    | checkbox (or toggle switch)      |
| date       | datepicker                       |
| enum       | select (or radio group)          |
| number     | input[type='number']             |
| string     | input[type='text'] (or textarea) |
| file       | input[type='file']               |

You can also provide a custom component of your own for any schema but more on that later.

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

## Roadmap

I plan on adding many new features to this package as time goes on based mainly on my own requirements but also from feedback from any package users.

Here are some ideas I'm currently thinking about:

1. Inline Calendar - choose a date or date range from an inline calendar
2. Callback Support - call functions (with debounce) to act on the user input

## Contributing

If you know your Vue and Typescript and want to get involved - thank you! I am more than happy to accept contributions. Please see the [Contributing](contributing.md) page for guidelines.