# Getting Started

The following guide explains how to get up and running with **Wizard of Zod**.

## Prerequisites

This package relies on your project already having Shadcn for Vue set up and in place.

Pinia is required for state management.

---

### Shadcn (For Vue)

Just in case you have been living under a rock for the last while, Shadcn is a collection of beautifully designed Tailwind components. Shadcn-vue.com is a Vue port Shadcn.

If you haven't already added shadcn-vue.com to your project, please follow the [Shadcn-vue.com installation guide](https://www.shadcn-vue.com/docs/installation.html).

::: tip NOTE
Shadcn-vue.com is [NOT a component library](https://www.shadcn-vue.com/docs/introduction.html) thats why we do not have it listed as a peer dependency.
:::

::: details Note for fresh shadcn-vue.com installs
At the time of writing these docs, shadcn-vue.com uses Tailwind CSS v3, but Tailwind CSS v4 has now been released. So when you get to the stage of installing `tailwind` and `autoprefixer`...

Instead of this:

```sh
npm install -D tailwindcss autoprefixer
```

Do this:

```sh
npm install -D tailwindcss@3 autoprefixer
```
:::

Once shadcn-vue.com is installed in the project run the following command to install the UI components used by Wizard of Zod:

```sh
npx shadcn-vue@latest add auto-form progress table stepper card
```

---

### Pinia

[Pinia](https://pinia.vuejs.org/) is used for state management. 

When a user enters an answer into any form field in your Wizard, the answer is temporarily stored in session storage via Pinia. This allows us to:

* keep track of user answers
* present user answers in a preview before final submission
* give users an option to make changes
* collect and send the final (validated) data back to you

If you haven't done so already, make sure Pinia is installed in your project. Follow their [getting started](https://pinia.vuejs.org/getting-started.html) guide for instructions on how to do this.

## Installation

Install the package with npm or yarn:

::: code-group

```shell [npm]
npm install wizard-of-zod
```

```shell [yarn]
yarn add wizard-of-zod
```
:::

## Usage

Add the `<Wizard />` component wherever you want to use Wizard of Zod in your project.

At the bare minimum you must include a [forms](../api/props.html#forms) prop. See the [props](../api/props.html) section for a list of other available props.

---

### Basic Example

This basic example will present a form wizard with three steps (three forms in one). The first step (form) will contain two fields and each of the remaining 2 steps (forms) contain one field each.

```vue
<script setup lang='ts'>
import { z } from 'zod'
import type { Form } from 'wizard-of-zod/types'
import Wizard from 'wizard-of-zod'

const forms: Form<z.ZodObject<any>>[] = [
  {
    schema: z.object({
      givenName: z.string().min(2),
      familyName: z.string()
    })
  },
  {
    schema: z.object({
      gender: z.enum(['male', 'female'])
    })
  },
  {
    schema: z.object({
      age: z.number()
    })
  },
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