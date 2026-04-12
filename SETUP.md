# Setup & Installation Guide

## Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager
- Git for version control

## Step 1: Clone or Download

### Option A: Clone from GitHub
```bash
git clone https://github.com/lroy-stack/portfolio-react.git
cd portfolio-react
```

### Option B: Create from Template
```bash
npm create vite@latest portfolio-react -- --template react
cd portfolio-react
```

## Step 2: Install Dependencies

```bash
npm install
```

This installs:
- React 18 and React DOM
- React Router for navigation
- Axios for HTTP requests
- Tailwind CSS for styling
- Vite as the build tool
- ESLint and Prettier for code quality

## Step 3: Environment Configuration

### Create .env.local file

```bash
cp .env.example .env.local
```

### Configure variables

Edit `.env.local`:

```env
# API Configuration
REACT_APP_API_URL=https://api.example.com

# GitHub Integration
REACT_APP_GITHUB_USER=your-github-username
REACT_APP_GITHUB_TOKEN=your-github-token-here

# Analytics
REACT_APP_GA_ID=your-google-analytics-id

# Email Service
REACT_APP_EMAIL_SERVICE=formsubmit

# Environment
REACT_APP_ENV=development
```

## Step 4: Start Development Server

```bash
npm run dev
```

Server will start at `http://localhost:5173`

### Hot Module Replacement (HMR)
- Changes automatically reflect in browser
- No page reload needed
- Instant feedback during development

## Step 5: Customize Portfolio Data

Edit `src/data/portfolio.json` with:

### Projects
```json
{
  "id": "project-1",
  "title": "Project Name",
  "description": "Brief description",
  "image": "path/to/image.jpg",
  "tags": ["React", "Tailwind"],
  "links": {
    "github": "https://github.com/...",
    "live": "https://project.com"
  }
}
```

### Skills
```json
{
  "category": "Frontend",
  "skills": ["React", "JavaScript", "CSS"]
}
```

### Experience
```json
{
  "company": "Company Name",
  "position": "Job Title",
  "period": "2020 - 2024",
  "description": "What you did"
}
```

## Step 6: Customize Styling

### Tailwind Configuration
Edit `tailwind.config.js` to customize:
- Colors
- Fonts
- Breakpoints
- Plugins

### Custom CSS
Edit files in `src/styles/`:
- `variables.css` - CSS custom properties
- `globals.css` - Global styles
- `components.css` - Component styles
- `animations.css` - Animations
- `responsive.css` - Media queries

## Step 7: Code Quality

### Lint Code
```bash
# Check for issues
npm run lint

# Fix issues automatically
npm run lint:fix
```

### Format Code
```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

### ESLint Rules
Edit `.eslintrc.cjs` to customize rules.

### Prettier Options
Edit `.prettierrc` to customize formatting.

## Step 8: Build for Production

```bash
npm run build
```

This creates:
- `dist/` folder with optimized production bundle
- Minified CSS and JavaScript
- Optimized assets

### Preview Production Build
```bash
npm run preview
```

## Step 9: Deploy

### Vercel (Recommended)

1. Push code to GitHub
2. Visit vercel.com
3. Click "New Project"
4. Import GitHub repository
5. Configure build settings (defaults work)
6. Deploy!

Vercel automatically:
- Deploys main branch to production
- Creates preview URLs for branches
- Configures domains

### Manual Deployment

1. Build locally: `npm run build`
2. Upload `dist/` folder to your host
3. Configure server to serve `index.html` for all routes

## Step 10: Add Custom Domain (Optional)

### For Vercel
1. Go to Project Settings
2. Click Domains
3. Add your custom domain
4. Follow DNS instructions

### For Other Hosts
Point your domain DNS to your hosting provider.

## Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear dist and rebuild
rm -rf dist
npm run build
```

### Styling Not Applied
- Clear browser cache
- Restart dev server
- Check Tailwind config

## Next Steps

1. ✅ Complete setup
2. 🎨 Customize portfolio data
3. 🎯 Add your own projects
4. 📝 Update content and styling
5. 🚀 Deploy to production
6. 📊 Monitor and iterate

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)

## Getting Help

If you encounter issues:
1. Check the documentation
2. Search GitHub issues
3. Ask in community forums
4. Create detailed issue reports

## Keep Learning

- Read through component code
- Experiment with changes
- Build additional features
- Deploy and iterate

Happy coding! 🚀
