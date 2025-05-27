# Introduction

## Folder strucutre

```
src/
├── components/
├── features/
│   └── user/
│       └── SignUpForm/
├── services/
├── test/
├── App.jsx
└── index.jsx
```

| **Folder**    | **Description**                                                                           |
| ------------- | ----------------------------------------------------------------------------------------- |
| `components/` | Contains reusable and generic UI components (e.g., buttons, inputs, modals).              |
| `features/`   | Contains the feature related to the user sign-up form. Follows a feature-based structure. |
| `services/`   | Contains functions for API communication                                                  |
| `test/`       | Contains configuration for test files                                                     |

## The idea

The idea behind this structure is to clearly separate responsibilities by type: **reusable components**, **feature-specific components**, **API communication (services)**, and **configuration**. This separation helps keep the codebase organized and easier to maintain. If our project grows to include more complex `domain` logic related to the user, we could add a domain folder to house domain rules and related services.

## Libraries

| **Library**                   | **Why use it**                                                             |
| ----------------------------- | -------------------------------------------------------------------------- |
| **MSW**                       | To simulate APIs in tests in a realistic way.                              |
| **react-hook-form**           | To handle forms in a efficient way.                                        |
| **Zod**                       | To validate form data                                                      |
| **Material UI (MUI)**         | To use nice-looking components that are ready to use and easy to change.   |
| **React Testing Library**     | To write tests focused on what the user sees and does.                     |
| **@testing-library/jest-dom** | To use matchers that make tests clearer and closer to real user behavior.  |
| **Prettier + ESLint**         | To keep the code clean and consistent.                                     |
| **React Router**              | To handle navigation and routing in a React application with dynamic URLs. |

## Tests

These tests are keep close to the place that is used, following the [co-locate strategy](https://kentcdodds.com/blog/colocation#tests) by Ken C. Dodds.
Choose to follow the strategy to not test [implementing details](https://kentcdodds.com/blog/testing-implementation-details) by Kent C Dodds, It makes refactoring easier since the behavior remains the same and only the implementation code changes.

## Requests

Using `React Query`, we create custom hooks to implement the service layer responsible for communicating with the backend.
We avoid using `useQuery` directly in component files. Instead, we encapsulate **React Query** logic inside custom hooks located in the `service/(user|color).js` files.
This approach helps isolate logic, making it easier to switch to a different client or update the request implementation in the future without affecting the components.

## Form

Using `react-hopok-form` with zod to create a simple validation. React Hook Form make easy to check form state using the [useFormContext](https://react-hook-form.com/docs/useformcontext) provinding useful helpers and state.

## New scripts

All new scripts were created to improve the developer experience, with a focus on saving time by automating simple formatting tasks.

| Command    | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| `lint`     | Check `.js` and `.jsx` files for code issues using ESLint.     |
| `lint:fix` | Same as `lint`, but automatically fixes problems if possible.  |
| `format`   | Format `.js`, `.jsx`, `.json`, and `.md` files using Prettier. |
