# Base repo for reproducing https://github.com/aerni/statamic-advanced-seo/issues/60

(tested under Windows)

## Manual Steps to repro

- serve site with `php artisan serve`
- go to "SEO -> site -> general"
- add "site name"
- save
- go to "Utilities" -> "Cache Manager" -> "Content Stache" -> "Clear All"
- in the sidebar, you will see "Duplicate IDs". This is probably a symptom of the problem
- go to "SEO -> site -> general"

## Run the cypress test

- `npx cypress run`
