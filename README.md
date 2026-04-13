
#  BroCooked

BroCooked is a full-stack AI recipe SaaS application. It helps users scan pantry ingredients, generate recipes with AI, browse cooking ideas by category and cuisine, and save favorite recipes in a personal cookbook.

## Overview

The project is split into two main parts:

- `frontend/` - a Next.js application that handles the user interface, authentication, recipe generation flow, pantry management, and saved recipes.
- `backend/` - a Strapi CMS that stores users, pantry items, recipes, and saved recipe relationships.
## Features

### User-facing features

- Landing page with product positioning, feature highlights, and pricing.
- Clerk sign in and sign up flows.
- Dashboard with recipe discovery by category and cuisine.
- Recipe of the day section powered by MealDB.
- Pantry management with add, edit, delete, and quantity tracking.
- Pantry image scanning to detect ingredients from a photo.
- AI recipe generation from pantry ingredients.
- Recipe detail pages with save and unsave actions.
- Saved recipes page for a personal digital cookbook.
- PDF export support for recipes.
- Free and Pro tier pricing with usage limits.

### Platform features

- Strapi-backed content and user storage.
- Rate limiting and tier-based scan limits through Arcjet.
- Unsplash image lookup for generated recipes.
- Support for AI recipe generation fallback models.

## Main Flows

### 1. Authentication

Users sign in or sign up with Clerk. The frontend uses the authenticated Clerk user to create or sync a matching Strapi user record.

### 2. Pantry scanning

Users can upload a pantry or fridge image. Gemini identifies ingredients, then the app stores the detected items in Strapi.

### 3. Pantry recipe generation

The app reads pantry items from Strapi, applies tier-based limits with Arcjet, sends ingredient context to Gemini, and returns recipe suggestions.

### 4. Recipe generation

When a user searches for a recipe, the app first checks Strapi. If the recipe does not exist, Gemini generates it, Unsplash provides an image, and the result is stored in Strapi.

### 5. Saving recipes

Users can bookmark recipes into a saved-recipe collection. The saved recipes page shows a personal cookbook view.
## Routes

Frontend routes currently include:

- `/` - marketing home page
- `/dashboard` - discovery hub and recipe of the day
- `/pantry` - pantry management
- `/pantry/recipes` - recipe suggestions from pantry ingredients
- `/recipe` - individual recipe view
- `/recipes` - saved recipes collection
- `/recipes/category/[category]` - recipe browsing by category
- `/recipes/cuisine/[cuisine]` - recipe browsing by cuisine
- `/sign-in` - Clerk sign-in flow
- `/sign-up` - Clerk sign-up flow
## Tech Stack

### Frontend

- Next.js 16
- React 19
- Tailwind CSS 4
- Clerk
- Gemini SDK
- Arcjet

### Backend

- Strapi 5
- PostgreSQL
- Users Permissions plugin

## Project Structure

### Frontend

- `app/` - App Router pages and layouts
- `actions/` - server actions for recipes, pantry, and MealDB
- `components/` - shared UI and feature components
- `hooks/` - reusable data-fetching hooks
- `lib/` - utilities, auth helpers, constants, and integrations
- `public/` - static assets such as the logo and hero image

### Backend

- `src/api/` - Strapi content types and controllers
- `src/extensions/users-permissions/` - custom user schema extensions
- `config/` - Strapi configuration
- `database/migrations/` - database migration files
## Environment Variables

### Frontend

- `NEXT_PUBLIC_STRAPI_API_URL` - Strapi base URL
- `STRAPI_API_TOKEN` - token used for authenticated Strapi requests
- `GEMINI_API_KEY` or `GOOGLE_API_KEY` - Gemini API key
- `GEMINI_MODEL` - optional model override
- `UNSPLASH_ACCESS_KEY` - Unsplash image search key

### Backend

Strapi uses its own environment configuration for database and deployment settings.

## Installation

1. Install dependencies in both apps.
2. Configure the frontend environment variables.
3. Configure the Strapi environment and database.
4. Start the backend first.
5. Start the frontend second.

Typical local run order:

```bash
cd backend
npm install
npm run dev
```

```bash
cd frontend
npm install
npm run dev
```
## Data Model Summary

The app currently relies on these main Strapi entities:

- `user` - Clerk-linked user record with subscription tier
- `pantry-item` - pantry ingredients and quantities
- `recipe` - generated or browsed recipes
- `saved-recipe` - join table linking users to saved recipes
