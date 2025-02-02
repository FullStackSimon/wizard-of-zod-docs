# Getting Started

The following guide explains how to get up and running with **Wizard of Zod**.

## Prerequisites

This package relies on your project already having Shadcn for Vue set up and in place.

Pinia is required for state management.

### Shadcn (For Vue)

Just in case you have been living under a rock for the last while, Shadcn is a collection of beautifully designed Tailwind components. Shadcn-vue.com is a Vue port Shadcn.

If you haven't already added shadcn-vue.com to your project, please follow the [Shadcn-vue.com installation guide](https://www.shadcn-vue.com/docs/installation.html).

::: tip NOTE
Shadcn-vue.com is [NOT a component library](https://www.shadcn-vue.com/docs/introduction.html) thats why we do not have it listed as a peer dependency.
:::

### Pinia

[Pinia](https://pinia.vuejs.org/) is used for state management. 

When a user enters an answer into any form field in your Wizard, the answer is temporarily stored in session storage via Pinia. This allows us to:

* keep track of user answers
* present user answers in a preview before final submission
* give users an option to make changes
* collect and send the final (validated) data back to you

## Installation

Install the package with npm:

```shell
npm install wizard-of-zod
```

## Configuration

### Vite

### Typescript