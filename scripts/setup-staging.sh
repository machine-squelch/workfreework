#!/usr/bin/env bash
set -euo pipefail

# Setup a staging branch and preview env scaffold for Vercel
# Usage: scripts/setup-staging.sh [staging_domain]
# Example: scripts/setup-staging.sh https://staging.workfreework.com

STAGING_BRANCH="staging"
STAGING_DOMAIN="${1:-}"

echo "› Checking git status..."
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: Not inside a git repository" >&2
  exit 1
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Error: You have uncommitted changes. Please commit or stash before running." >&2
  exit 1
fi

if git show-ref --verify --quiet "refs/heads/${STAGING_BRANCH}"; then
  echo "› Branch '${STAGING_BRANCH}' already exists. Switching to it..."
  git checkout ${STAGING_BRANCH}
else
  echo "› Creating branch '${STAGING_BRANCH}' from current HEAD..."
  git checkout -b ${STAGING_BRANCH}
fi

echo "› Pushing '${STAGING_BRANCH}' to origin..."
git push -u origin ${STAGING_BRANCH}

# Prepare a preview env file from .env.local if present
PREVIEW_ENV_FILE=".env.preview"
if [[ -f ".env.local" ]]; then
  echo "› Creating ${PREVIEW_ENV_FILE} from .env.local (override site URL if provided)..."
  cp .env.local ${PREVIEW_ENV_FILE}
  if [[ -n "${STAGING_DOMAIN}" ]]; then
    # update NEXT_PUBLIC_SITE_URL or append if missing
    if grep -q '^NEXT_PUBLIC_SITE_URL=' ${PREVIEW_ENV_FILE}; then
      sed -i'' -e "s|^NEXT_PUBLIC_SITE_URL=.*$|NEXT_PUBLIC_SITE_URL=${STAGING_DOMAIN}|" ${PREVIEW_ENV_FILE}
    else
      echo "NEXT_PUBLIC_SITE_URL=${STAGING_DOMAIN}" >> ${PREVIEW_ENV_FILE}
    fi
  fi
else
  echo "! .env.local not found. Skipping creation of ${PREVIEW_ENV_FILE}." >&2
fi

cat <<'NOTE'

Next steps:
  1) In Vercel → Project → Settings → Git, ensure Preview deployments are enabled.
  2) In Vercel → Project → Settings → Environment Variables, duplicate Production vars to Preview.
     You can copy from .env.preview if created by this script.
  3) Push changes to the 'staging' branch to trigger a Preview deploy.
  4) Optional: Add a custom domain like staging.yoursite.com and assign it to the Preview deployment.

Tips:
  - Set NEXT_PUBLIC_SITE_URL (Preview) to your staging domain.
  - Never point staging at production databases or webhooks.

Done.
NOTE


