# Deployment Cycle

- Each PR should be created against **develop** branch.
- At the EOD, the team lead should merge all the PRs to develop and create a new PR from **develop → qa** with mention of all the branches merged in develop in comments.
- On the next day, **develop → qa** PR should be merged and forwarded to QA team for testing.
- Once QA team approves, PR should be raised from **qa → productio**n and it should be merged only before tea time (4:00 PM) on the same day or next day.
- The hotfix branch can be merged directly to main

## Not Getting Data or particular field

- Check in directus `settings` -> `roles & permissions` -> `public` -> `collection`

## File Assets

- Name files properly with related names , section where it is used
- Make folders for respective sections. example case studies

## Design Guidelines

- Content section must be with max width. It should not be full width anywhere in pages.

### Important

**Case Studies**

- Work Page published projects are coming from Projects table status field

- Scrolling to particular section
  For getting id of section, we have to use `metadata.id` instead of `id` because we are placing sections inside metadata`sections` table.

  **Caching**

- Due to Caching applied in directus, therefore new data will arrive after some minutes

---

### Components

⚠️ Change the code with caution, since for some components like editor is used at various places and we do not have track of it.

Case Studies

- `case-studies`
- `all-work-cases`

Editor JS

- `editor`
  used for blog section and about which contains title
- `paragraph-editor`
- used for Case Study where design is different with no title
- `blog-editor`

Testimonials

- `trusted-by` - In home page and tech page with brands
- `tesimonials` - Used for showing Case Study Testimonials with user reviews also

### Assets

- For Images, We are using BunnyCDN
- For JSON lottieplayer , we will request directus

#### Projects

- For Website Links, we are using Button Primary field.
- We are using `sw_sections_hero` for mapping all the about fields like title, icon etc.
- While creating Case Studies section like solution overview, testimonials, Do not forget to assign in project section

### Directory Structure

- `sections` - Place files which are dynamic , coming from directus.
- `_partials.vue` - This file indicates that this is a part of larger component and it is not used globally

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
