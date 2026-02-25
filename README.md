# npm-package-template

npm package template for @mizdra

## Tech Stack

- npm
- TypeScript
- ESM
- Oxfmt
- Oxlint
- Vitest
- GitHub Actions
- VSCode configuration files (`extensions.json`, `launch.json`, `settings.json`)

## Usage

- Create a repository from https://github.com/new?template_name=npm-package-template&template_owner=mizdra
- Clone the created repository

## Repository Configuration

Perform the following configuration after cloning the repository:

```bash
OWNER=$(gh repo view --json owner -q .owner.login)
REPO=$(gh repo view --json name  -q .name)
# Change license
gh repo license view mit | sed "s/\[year\]/$(date +%Y)/;s/\[fullname\]/mizdra/" > LICENSE
npm pkg set license=MIT && npm i
# Setup labels
GITHUB_TOKEN=$(gh auth token) npx github-label-setup --labels @mizdra/github-label-presets
# Setup common repository settings
gh repo edit \
  --delete-branch-on-merge \
  --enable-auto-merge \
  --enable-discussions=false \
  --enable-projects=false \
  --enable-secret-scanning \
  --enable-secret-scanning-push-protection \
  --enable-wiki=false
# Enable Code scanning
gh api -X PATCH /repos/$OWNER/$REPO/code-scanning/default-setup -f state=configured
# Enable immutable releases
gh api -X PUT /repos/$OWNER/$REPO/immutable-releases
# Setup rulesets
DEFAULT_BRANCH_PROTECTION=$(gh api /repos/mizdra/npm-package-template/rulesets/13184851)
VERSION_TAG_PROTECTION=$(gh api /repos/mizdra/npm-package-template/rulesets/13184887)
gh api -X POST /repos/$OWNER/$REPO/rulesets --input - <<< $DEFAULT_BRANCH_PROTECTION
gh api -X POST /repos/$OWNER/$REPO/rulesets --input - <<< $VERSION_TAG_PROTECTION
# Require actions to be pinned to a full-length commit SHA
gh api -X PUT /repos/$OWNER/$REPO/actions/permissions -F enabled=true -F sha_pinning_required=true
```

## License

CC0-1.0
