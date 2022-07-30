# [rupeshbudhathoki.com.np](https:-www.rupeshbudhathoki.com.np)


## Project Structure

```
src
├── components
│   ├── cards
│   │   └── form/FormCard.tsx
│   ├── layouts
│   ├── navigation
│   │   ├── header/Header.tsx
│   │   └── footer/Footer.tsx
│   ├── templates
│   └── utility
│       └── search/SearchInput.tsx
├── hooks                         # user defined hooks
│   └── useOnScreen.tsx
├── pages
│   ├── api
│   ├── index.tsx
│   ├── about.tsx
│   └── blogs
│       ├── index.tsx
│       └── [id].tsx
├── state                         # global state
│   └── auth/AuthContext.tsx
├── styles
│   └── globals.css
└── utils
    └── getEmailByUsername.ts
```

## Husky

- Commit will only work if `yarn lint` and CommitLint yield success
- Push  will only work if `yarn build` yield success

## CommitLint 

Commit with following prefixes according to fit

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

## Components

Group Similar components in a justifiable folder.

- utility : Something with business logic like Search Component etc.
- card : Card Looking components
- layouts : Wrapper for pages
- templates : Blog Template etc.
- navigation : header and footer 

Declaring a base template:  
`components/templates/base/BaseTemplate.tsx`

```tsx
// Have interface for every components even if empty and export them
// Follow IComponentName naming convention
export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div>{sampleTextProp}</div>;
};

export default BaseTemplate;
```

