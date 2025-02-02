# Events

At this stage in Wizard of Zod’s development, only one event is emitted.

I plan to add more events over time. If you have suggestions, let me know!

## @completed

The `@completed` event is emitted when the user clicks the submit button on the preview screen. In other words, the user has completed all form fields and is happy to submit their information.

The event payload is a flat object with key-value pairs, meaning no nested structures.

::: code-group
```typescript [Schema]
const forms: Form<z.ZodObject<any>>[] = [
  {
    schema: z.object({
      givenName: z.string(),
      familyName: z.string(),
    })
  },
  {
    schema: z.object({
      age: z.number()
    })
  }, 
  {
    schema: z.object({
      gender: z.enum(['male', 'female']).describe('What is your gender?')
    })
  }
]
```

```typescript [Event Payload]
{
  givenName: "John",
  familyName: "Doe",
  age: 44,
  gender: "male",
}
```
:::

::: tip INFO
Future versions will support nested data structures.
:::
