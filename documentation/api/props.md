# Props

The `Wizard` component from **Wizard of Zod** supports several props that control its behavior and appearance. Below, you'll find details on each prop, including types, default values, and descriptions.

## Available Props

| Prop Name           | Type                                                | Default     | Description                                                                    |
|---------------------|-----------------------------------------------------|-------------|--------------------------------------------------------------------------------|
| `classes?`          | [WizardClasses](./types.html#wizardclasses)         | `undefined` | Used in class bindings that allow for custom Tailwind style overrides.         |
| `customI18n?`       | [CustomI18n](./types.html#customi18n)               | `undefined` | Use your own custom i18n translations instead of using our default translations. |
| `forms`             | Array<[Form](./types.html#form)>                    | `undefined` | Otherwise known as steps. 1 form = 1 step.                                     |
| `initialAnswers?`   | `Record<string, any>`                               | `undefined` | Pre-populate some or all form fields.                                          |
| `lang?`             | `'en' \| 'fr'`                                      | `en`        | Template boilerplate language.                                                 |
| `layout?`           | [LayoutType](./types.html#layouttype)               | `basic`     | Controls the overall boilerplate layout.                                       |
| `preview?`          | [PreviewType](./types.html#previewtype)             | `cards`     | Template used to display a summary of form entries before final submission.    |
| `progressIndicator` | [ProgressIndicator](./types.html#progressindicator) | `null`      | Display an indicator to make the user aware of progress when completing the form.                          |

---

### classes

| Type                                                | Required?     | Default     |
|-----------------------------------------------------|---------------|-------------|
| [WizardClasses](./types.html#wizardclasses)         | :no_entry: No | `undefined` |

The `classes` prop allows you to provide your own Tailwind CSS utility-classes to override the defaults we provide.

We provide class hooks on most of the main wrapper containers to allow you to provide your own look and feel.

All our main container wrappers make use of the `cn` function which allows you to override our default classes. 

For example, our basic layout template has Tailwind's `p-6` utility class applied to give it some generous padding.

```vue{4}
<div
  id="woz"
  :class="cn(
    'p-6',
    classes?.woz
  )"
>...
```

However, if you wanted to remove that padding you could provide the `classes` prop like so:

```vue{3}
<Wizard
  :classes="{
    woz: 'p-0'
  }"
/>
```

::: tip
For a full list of available class hooks (such as `woz` above), refer to the [WizardClasses](./types.html#wizardclasses) interface along with our Anatomy page.
:::

---

### customI18n

| Type                                                | Required?     | Default     |
|-----------------------------------------------------|---------------|-------------|
| [CustomI18n](./types.html#customi18n)         | :no_entry: No | `undefined` |

The `customI18n` prop allows you to override strings of text in the boilerplate.

```vue
<Wizard
  :custom-i18n="{
    next: 'Continue',
    previous: 'Go Back'
  }"
/>
```

::: tip
Refer to the [i18n](../customisation/i18n.html#available-languages) section for a list of strings appearing in the boilerplate - all of which you can override.
:::

### forms

| Type                                                | Required?              | Default     |
|-----------------------------------------------------|------------------------|-------------|
| Array<[Form](./types.html#form)>           | :white_check_mark: Yes | `undefined` |

Arguably the most important of all the props is the `forms` prop. Not only is it responsible for the number of steps in the `Wizard` but it also handles input field rendering and validation.

Each [Form](./types.html#form) you provide in this array will be converted to a single step in the `Wizard`. So if you provide 3 forms in this array, the Wizard will consist of 3 steps.

#### schema

The schema is where the magic happens. Pass a [Zod](https://zod.dev/) schema and watch as the [AutoForm](https://www.shadcn-vue.com/docs/components/auto-form.html) component from shadcn-vue.com automatically renders the most appropriate field (or multiple fields) to collect input from the user for that step.

The following table shows the mapping of Zod schemas to rendered [shadcn-vue.com components](https://www.shadcn-vue.com/docs/components).

| Zod Schema | Shadcn-vue.com Component                                                                                                                       |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| boolean    | [Checkbox](https://www.shadcn-vue.com/docs/components/checkbox.html) or [Switch](https://www.shadcn-vue.com/docs/components/switch.html)       |
| number     | [NumberField](https://www.shadcn-vue.com/docs/components/number-field.html)                                                                    |
| string     | [Input](https://www.shadcn-vue.com/docs/components/input.html) or [Textarea](https://www.shadcn-vue.com/docs/components/textarea.html)         |
| file       | [File Input](https://www.shadcn-vue.com/docs/components/input.html#file)                                                                       |
| date       | [Datepicker](https://www.shadcn-vue.com/docs/components/date-picker.html)                                                                      |
| enum       | [Select](https://www.shadcn-vue.com/docs/components/select.html) or [Radio Group](https://www.shadcn-vue.com/docs/components/radio-group.html) |

You can also provide a custom component of your own for any schema. Learn more about this on the [shadcn-vue.com AutoForm component docs](https://www.shadcn-vue.com/docs/components/auto-form.html#component).

#### fieldConfig <Badge type="info" text="optional" />

As [Zod](https://zod.dev) doesn't allow adding other properties to the schema, you can use the fieldConfig prop to add additional configuration for the UI of each field.

For example, if you wanted to set a placeholder on a text field you would do the following:

::: code-group

```typescript{7-19}
const forms: Form<z.ZodObject<any>>[] = [
  {
    schema: z.object({
      givenName: z.string().min(2),
      familyName: z.string()
    }),
    fieldConfig: {
      givenName: {
        inputProps: {
          placeholder: 'e.g. - John'
        }
      },
      familyName: {
        inputProps: {
          placeholder: 'e.g. - Doe',
          disabled: true
        }
      }
    }
  },
  {
    schema: z.object({
      gender: z.enum(['male', 'female'])
    })
  }
]
```

```vue
<Wizard
  :forms="forms"
/>
```
:::

You can use the inputProps property to pass props to the input component. You can use any props (attributes) that the HTML component accepts.

#### title <Badge type="info" text="optional" />

When an optional title (`string`) is provided in a [Form](./types.html#form), a `<h1>` title will be displayed above that form.

#### description <Badge type="info" text="optional" />

When an optional description (`string`) is provided in a [Form](./types.html#form), a `<p>` paragraph will be displayed above that form - following the title (above) if it has also been provided.

This example presents a wizard consisting of 3 steps.

```vue {6-22,31}
<script setup lang='ts'>
import { z } from 'zod'
import type { Form } from 'wizard-of-zod/types'
import Wizard from 'wizard-of-zod'

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
      gender: z.enum(['male', 'female'])
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

---

### initialAnswers

| Type                                                | Required?     | Default     |
|-----------------------------------------------------|---------------|-------------|
| Record<string, any>        | :no_entry: No | `undefined` |

Pass in the `initialAnswers` if you would like to pre-populate any field in your forms.

::: code-group

```typescript{7-10,16-18}
const forms: Form<z.ZodObject<any>>[] = [
  {
    schema: z.object({
      givenName: z.string(),
      familyName: z.string()
    }),
    initialAnswers: {
      givenName: 'John',
      familyName: 'Doe',
    }
  },
  {
    schema: z.object({
      gender: z.enum(['male', 'female'])
    }),
    initialAnswers: {
      gender: 'male',
    }
  }
]
```

```vue
<Wizard
  :forms="forms"
/>
```
:::

---

### lang

| Type         | Required? | Default |
|--------------|-----------|---------|
| 'en' \| 'fr' | :no_entry: No | `'en'`    |

The `lang` prop sets the language of the boilerplate. Learn more in our [i18n](../customisation/i18n.html#boilerplate-i18n) guide.

```vue
<Wizard
  lang="fr"
  ...
/>
```

---

### layout

| Type                                                | Required?     | Default   |
|-----------------------------------------------------|---------------|-----------|
| [LayoutType](./types.html#layouttype)          | :no_entry: No | `'default'` |

Controls the overall boilerplate layout. See the [layout](../customisation/layout.html) guide to learn more.

```vue
<Wizard
  layout="basic"
  ...
/>
```

---

### preview

| Type                                                | Required?     | Default   |
|-----------------------------------------------------|---------------|-----------|
| [PreviewType](./types.html#previewtype)            | :no_entry: No | `'cards'` |

When a user clicks the submit button on the last step in the wizard, they are then shown a preview of all data they have entered. This gives them an opportunity to make any corrections if required before the finally submit their answers.

See the [preview](../customisation/preview.html) guide to learn more.

```vue
<Wizard
  preview="table"
  ...
/>
```

---

### progressIndicator

| Type                                                | Required?     | Default |
|-----------------------------------------------------|---------------|---------|
| [ProgressIndicator](./types.html#progressindicator)           | :no_entry: No | `null`  |

Particularly useful for wizards with many steps, a progress indicator allows the user to keep track of their progress through your forms.

See the [progress indicator](../customisation/progress-indicator.html) guide to learn more.

```vue
<Wizard
  progress-indicator="bar"
  ...
/>
```