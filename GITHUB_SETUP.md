# GitHub Setup Instructions

## Initial Repository Setup

### 1. Create Repository on GitHub
- Go to github.com and create a new repository named `portfolio-react`
- Choose "Public" or "Private" (depends on your preference)
- Do NOT initialize with README (we have one)
- Copy the repository URL

### 2. Initial Push
```bash
# Navigate to project directory
cd portfolio-react

# Initialize git (if not already done)
git init

# Add remote
git remote add origin https://github.com/lroy-stack/portfolio-react.git

# Create and switch to main branch
git checkout -b main

# Add all files
git add .

# Create initial commit
git commit -m "feat: Initial portfolio React scaffold"

# Push to GitHub
git push -u origin main
```

## Subsequent Development

### Feature Branch Workflow
```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "feat: Add feature description"

# Push and create Pull Request
git push -u origin feature/feature-name
```

### Deployment Integration

#### Vercel Integration
1. Go to vercel.com and sign in
2. Click "New Project"
3. Import the GitHub repository
4. Configure build settings (already in `vercel.json`)
5. Deploy!

Vercel automatically deploys:
- `main` branch to production
- Feature branches to preview URLs

#### GitHub Actions (Optional)
Add CI/CD workflows in `.github/workflows/` for:
- Linting
- Testing
- Building

### Secrets Management
Add environment variables to GitHub:
1. Go to Repository Settings → Secrets and variables → Actions
2. Add required secrets:
   - `REACT_APP_GITHUB_TOKEN` (for GitHub API integration)
   - `REACT_APP_EMAIL_API_KEY` (for email service)

## Deployment Checklist

- [ ] Repository created and pushed
- [ ] Environment variables configured
- [ ] Vercel project linked and deployed
- [ ] Custom domain configured (if applicable)
- [ ] GitHub Actions workflows set up (if desired)
- [ ] Branch protection rules configured
- [ ] CI/CD pipeline tested

## Useful GitHub Features

### Branch Protection
1. Go to Settings → Branches → Add rule
2. Require pull request reviews
3. Dismiss stale reviews
4. Require status checks to pass

### Project Board
1. Create a GitHub Project for issue tracking
2. Link issues to the project
3. Organize with columns: To Do, In Progress, Done

### GitHub Pages (Alternative Hosting)
If not using Vercel:
1. Push `dist/` directory to `gh-pages` branch
2. Configure Pages in Settings
3. Set custom domain if desired
