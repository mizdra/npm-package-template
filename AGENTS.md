# AGENTS.md

## Project Overview

`app_name` is xxx.

## Commands

```bash
vp run build # Build
vp run dev # Run app in development mode
vp test # Run tests
vp test src/foo.test.ts # Run `vp test` on a specific test file
vp check # Format, lint, and type checks
vp check src/foo.ts # Run `vp check` on a specific file
vp check --fix # Auto-fix all fixable format and lint errors
vp check --fix src/foo.ts # Run `vp check --fix` on a specific file
```

## Architecture

xxx.

## Development Flow

- Write PR descriptions and commit messages in English
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
  - `<type>` is one of: feat, fix, docs, refactor, test, chore, deps
  - Example: `feat: implement some feature`
- Assign appropriate labels when creating a PR
  - `Type: Breaking Change`: Breaking changes
  - `Type: Bug`: Bug fixes
  - `Type: Documentation`: Documentation changes
  - `Type: Feature`: New features
  - `Type: Refactoring`: Refactoring
  - `Type: Testing`: Test additions/modifications
  - `Type: Maintenance`: Repository maintenance
  - `Type: CI`: CI/CD changes
  - `Type: Security`: Security-related changes
  - `Type: Dependencies`: Dependency updates
