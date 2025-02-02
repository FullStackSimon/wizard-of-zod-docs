# Types

## CustomI18n

Use your own custom i18n translations instead of using our default translations.

```typescript
interface CustomI18n {
    [key: string]: string
}
```

## FieldConfig

As zod doesn't allow adding other properties to the schema, you can use the `fieldConfig` prop to add additional configuration for the UI of each field in a `schema`.

Find out more about `FieldConfig` at [shadcn-vue.com](https://www.shadcn-vue.com/docs/components/auto-form.html#field-configuration)

```typescript
type FieldConfig = Record<string, any>
```

## Form

An object containing the data for an individual step in the wizard.

```typescript
interface Form<T extends z.ZodObject<any>> {
    title?: string
    description?: string
    schema: T
    fieldConfig?: FieldConfig
}
```

## LayoutType

Controls the overall layout template of the wizard.

```typescript
type LayoutType = 'basic' | 'default'
```

## PreviewType

The template used to display a summary of form entries for final submission.

```typescript
type PreviewType  = 'cards' | 'list' | 'table'
```

## ProgressIndicator

Display an indicator to make the user aware of progress when completing the form.

```typescript
type ProgressIndicator  = 'bar' | 'stepper' | null
```

## WizardClasses

Used in class bindings that allow for custom tailwind style overrides.

```typescript
interface WizardClasses {
    woz?: string
    wozHeader?: string
    wozBody?: string
    wozFormStepper?: string
    wozFormIntro?: string
    wozForm?: string
    wozFormButtons?: string
    wozFormButtonPrevious?: string
    wozFormButtonNext?: string
    wozProgress?: string
    wozPreview?: string
    wozPreviewIntro?: string
    wozFooter?: string
}
```