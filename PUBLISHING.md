# Publishing Guide

This guide explains how to set up automatic npm publishing for the Khaojai Design System.

## Prerequisites

1. An [npm account](https://www.npmjs.com/signup)
2. A GitHub repository for this project

## Initial Setup

### 1. Update Package Configuration

Update `package.json` with your details:

```json
{
  "name": "khaojai-design-system",  // Or your preferred package name
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/khaojai-design.git"
  },
  "homepage": "https://YOUR_USERNAME.github.io/khaojai-design",
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/khaojai-design/issues"
  }
}
```

### 2. Create npm Access Token

1. Log in to [npmjs.com](https://www.npmjs.com)
2. Go to **Access Tokens** (click your avatar → Access Tokens)
3. Click **Generate New Token** → **Classic Token**
4. Select **Automation** type (for CI/CD)
5. Copy the token (you won't see it again!)

### 3. Add Token to GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `NPM_TOKEN`
5. Value: Paste your npm token
6. Click **Add secret**

### 4. Enable GitHub Pages (for Storybook)

1. Go to **Settings** → **Pages**
2. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **(root)**
3. Save

## GitHub Actions Workflows

### CI Workflow (`.github/workflows/ci.yml`)

Runs on every push and pull request:
- Installs dependencies
- Generates tokens
- Type checks
- Builds package
- Builds Storybook

### Release Workflow (`.github/workflows/release.yml`)

Runs on push to `main`:
- All CI steps
- **Publishes to npm**
- **Deploys Storybook to GitHub Pages**

### Version Bump Workflow (`.github/workflows/version-bump.yml`)

Manual trigger to bump version:
1. Go to **Actions** tab
2. Select **Version Bump**
3. Click **Run workflow**
4. Choose: `patch`, `minor`, or `major`

## Publishing Workflow

### Automatic (Recommended)

1. Make your changes
2. Commit and push to `main`
3. GitHub Actions will:
   - Build the package
   - Publish to npm (same version = skip)
   - Deploy Storybook

### Manual Version Bump

When you need a new version:

1. Go to **Actions** → **Version Bump**
2. Choose version type:
   - `patch`: 0.1.0 → 0.1.1 (bug fixes)
   - `minor`: 0.1.0 → 0.2.0 (new features)
   - `major`: 0.1.0 → 1.0.0 (breaking changes)
3. Click **Run workflow**
4. This commits the version bump and triggers release

### Local Version Bump (Alternative)

```bash
# Bump patch version (0.1.0 → 0.1.1)
npm version patch

# Bump minor version (0.1.0 → 0.2.0)
npm version minor

# Bump major version (0.1.0 → 1.0.0)
npm version major

# Push with tags
git push && git push --tags
```

## Package Name Considerations

### Option A: Scoped Package (Recommended)

Use your npm username as scope:

```json
{
  "name": "@your-username/khaojai-design-system"
}
```

Benefits:
- Guaranteed unique name
- Groups your packages together
- Free for public packages

### Option B: Unscoped Package

```json
{
  "name": "khaojai-design-system"
}
```

Note: Name must be unique on npm. Check availability:
```bash
npm view khaojai-design-system
```

## Verifying Publication

After the workflow runs:

1. Check npm: `https://www.npmjs.com/package/khaojai-design-system`
2. Check Storybook: `https://YOUR_USERNAME.github.io/khaojai-design`
3. Test install:
   ```bash
   pnpm add khaojai-design-system
   ```

## Troubleshooting

### "npm ERR! 403 Forbidden"
- Check NPM_TOKEN is set correctly in GitHub Secrets
- Ensure token has publish permissions
- For scoped packages, ensure `"access": "public"` in publishConfig

### "Package version already exists"
- Bump the version before pushing
- Use the Version Bump workflow

### Storybook not deploying
- Enable GitHub Pages in repo settings
- Ensure gh-pages branch is selected
- Check workflow has `contents: write` permission

## Quick Reference

| Action | Command/Steps |
|--------|---------------|
| Bump patch | `npm version patch && git push --tags` |
| Bump minor | `npm version minor && git push --tags` |
| Bump major | `npm version major && git push --tags` |
| Manual publish | `pnpm build && pnpm publish` |
| Check npm status | `npm view khaojai-design-system` |
