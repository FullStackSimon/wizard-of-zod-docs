# Slots

In these early stages of Wizard of Zod's evolution there are three named slots available.

I have plans to add more over time so if you have any suggestions, please feel free to let me know.

## #header

**Available In Layouts:** `default`

A slot that enables you to add content **before** your wizard.

##### Slot Props

| Slot Prop       | Type   | Description                                                |
|-----------------|--------|------------------------------------------------------------|
| `totalQuestions`  | number | The total number of forms (steps) available in the wizard. |
| `currentQuestion` | number | The number of the current (active) step.                   |

##### Slot Content

::: code-group

```vue [Fallback (Default Content)]
<template #header="{ totalQuestions, currentQuestion }">
  <div 
    id="woz-header"
    :class="cn('bg-gray-200 w-full p-4 flex justify-center', classes?.wozHeader)"
  >
    <h1 class="font-semibold">Form {{ currentQuestion }} of {{ totalQuestions }}</h1>
  </div>
</template>
```

```vue [Custom Example]
<template #header="{ totalQuestions, currentQuestion }">
  <div class="custom-header">
    <p>Step {{ currentQuestion }} of {{ totalQuestions }}</p>
  </div>
</template>
```
:::

## #progressIndicator

**Available In Layouts:** `basic` `default`

A slot that enables you to provide your own custom progress indicator.

##### Slot Props

| Slot Prop         | Type    | Description                                                |
|-------------------|---------|------------------------------------------------------------|
| `totalQuestions`  | number  | The total number of forms (steps) available in the wizard. |
| `currentQuestion` | number  | The number of the current (active) step.                   |
| `completed`       | boolean | Whether or not all forms have been completed.              |

##### Slot Content

If you have specified a valid [progressIndicator](./props.html#progressindicator) prop choice it will be rendered.

If you provide a custom progress indicator via this slot, it will take precedence over the prop.

::: code-group

```vue [Custom Example]
<template #progressIndicator="{ currentQuestion, totalQuestions, completed }">
  <YourCustomProgressComponent
    :total-forms="totalQuestions" 
    :current-form-index="currentQuestion" 
    :completed="completed" 
  />
</template>
```
:::

::: tip
If you want to move the progress indicator above the form, ensure the Wizard [classes](./props.html#classes) prop contains 
```typescript
{
  wozBody: 'flex-col-reverse'
  //...
}
```
:::

## #footer

**Available In Layouts:** `default`

A slot that enables you to add content **after** your wizard.

##### Slot Props

There are no props for this slot.

##### Slot Content

::: code-group

```vue [Fallback (Default Content)]
<template #footer>
  <div
    id="woz-footer"
    :class="cn('bg-gray-200 w-full p-4 flex justify-center', classes?.wozFooter)"
  >
    <small>&copy; {{ new Date().getFullYear() }}</small>
  </div>
</template>
```

```vue [Custom Example]
<template #footer>
  <footer>
    <small class="text-center">If you need any help please contact us.</small>
  </footer>
</template>
```
:::