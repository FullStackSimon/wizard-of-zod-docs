---
title: Progress Indicator
---

# Progress Indicator

## Overview

**Wizard of Zod** provides a flexible approach to progress indicators, allowing developers to choose from built-in options, supply a custom component or none at all. The progress indicator helps users track their progress through the wizard steps.

## Choosing a Progress Indicator

The wizard supports a configurable `progressIndicator` prop, which determines the type of progress indicator displayed. The available options are:

| Value       | Description                                                   |
|-------------|---------------------------------------------------------------|
| `'bar'`     | A linear progress bar indicating the user's advancement.      |
| `'stepper'` | A step-based indicator showing the current and completed steps.|
| `null`      | Disables the progress indicator entirely.                     |

### Example Usage

To specify a progress indicator, set the `progressIndicator` prop:

```vue
<Wizard progressIndicator="bar" />
```

or:

```vue
<Wizard progressIndicator="stepper" />
```

To hide the progress indicator simply omit the `progressIndicator` prop:

```vue
<Wizard />
```

## Built-in Progress Indicators

### Bar Indicator
The `bar` progress indicator is a simple linear bar that visually represents the completion percentage. It updates dynamically as the user moves through the wizard.

### Stepper Indicator
The `stepper` progress indicator displays a series of steps. The current step is highlighted, and completed steps show a checkmark. This is useful when you want users to have a clear understanding of their position within the wizard.

## Providing a Custom Progress Indicator

If the built-in progress indicators do not meet your needs, you can provide a fully custom progress indicator using the `#progressIndicator` slot.

### Example Usage

```vue
<Wizard>
  <template #progressIndicator>
    <div class="my-custom-progress">
      Step {{ currentStep }} of {{ totalSteps }}
    </div>
  </template>
</Wizard>
```

### How It Works

When using the slot, **Wizard of Zod** will render your custom progress indicator instead of the built-in ones. You can access `currentQuestion`, `totalQuestions` and `completed` through slot props to create your desired UI.

See the guide on the [progressIndicator](../api/slots.html#progressindicator) slot for more information.

## Conclusion

The `progressIndicator` prop and slot allow for maximum flexibility, ensuring that the progress indicator aligns with your project’s design requirements. Whether using the built-in **bar** or **stepper**, or crafting a fully custom progress UI, **Wizard of Zod** makes it easy to guide users through multi-step forms efficiently.
