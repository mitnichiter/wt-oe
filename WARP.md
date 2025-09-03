# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static website for the Computer Engineering Department at Carmel Polytechnic College, featuring a retro Y2K-inspired design theme. The site showcases department information, faculty details, labs, and a comprehensive syllabus search system.

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES5)
- **Styling**: CSS with Y2K retro theme using "Press Start 2P" pixel font
- **External Dependencies**: 
  - Font Awesome 6.0.0-beta3 (CDN)
  - Google Fonts (Press Start 2P)
- **Assets**: Placeholder images from placehold.co

## Common Development Commands

### Local Development
```bash
# Serve the site locally using Python (if available)
python -m http.server 8000
# Or using Node.js (if http-server is installed)
npx http-server -p 8000
# Or using PHP (if available)
php -S localhost:8000
```

### File Operations
```bash
# Open main pages for editing
notepad index.html        # Main homepage
notepad syllabus.html     # Syllabus page with search functionality
notepad style.css         # Main stylesheet
notepad syllabus.css      # Syllabus-specific styles
notepad script.js         # JavaScript functionality
```

### Validation and Testing
```bash
# Validate HTML (using online tools or validators)
# Check CSS syntax
# Test JavaScript functionality in browser console
# Test responsive design across different screen sizes
```

## Architecture and Code Structure

### Page Structure
- **index.html**: Main homepage with department overview, mission, labs, and faculty spotlights
- **syllabus.html**: Interactive syllabus browser with search functionality across all semesters

### Styling Architecture
- **style.css**: Main stylesheet containing:
  - Y2K retro theme with #ff6600 orange and black color scheme
  - Pixel-perfect "Press Start 2P" font implementation
  - Responsive flexbox layouts for sections
  - CSS animations (blinking cursor effect)
  - Hover effects and transitions
- **syllabus.css**: Specialized styles for the syllabus page including table layouts and search interface

### JavaScript Functionality
- **script.js**: Contains `searchSyllabus()` function for real-time course search
  - Searches across course codes, names, and categories
  - Filters by semester titles
  - Dynamically shows/hides table rows and entire semesters
  - Case-insensitive search functionality

### Design System
- **Primary Color**: #ff6600 (orange) - used for accents, borders, and hover states
- **Background**: #000 (black) - main background
- **Text**: #fff (white) - primary text color
- **Typography**: "Press Start 2P" monospace font for retro gaming aesthetic
- **Border Style**: 2px solid borders throughout for pixelated look
- **Interactive Elements**: Hover effects with color inversions and shadows

### Content Structure
The site follows a modular section-based layout:
- Navigation with logo animation
- Hero section with overlay effects
- About section (flexbox with image and text)
- Mission/PEO/PSO three-column layout
- Labs showcase with hover effects
- Faculty and alumni spotlights
- Gallery preview grid
- Contact footer with social links

### Syllabus Data Structure
The syllabus is organized by semesters (1-6) with each course containing:
- Course Code (e.g., "3131", "4001")
- Course Name (e.g., "Programming in C", "Database Management Systems")
- Category classification (Programme core, Basic Science, etc.)

## Development Notes

### Image Assets
- Hero background image referenced as `imgs/hp/hero.png` but uses placeholder
- All images use placeholder.co for development
- Faculty and alumni photos are 100x100px with pixelated rendering

### External Links
- College main website: https://www.carmelpoly.in/
- Font Awesome and Google Fonts loaded via CDN
- Social media links are placeholder anchors

### Browser Compatibility
- Uses modern CSS features (flexbox, grid)
- JavaScript uses ES5 syntax for broader compatibility
- CSS transitions and animations for enhanced UX

### Performance Considerations
- Minimal JavaScript footprint
- CSS-only animations where possible
- External font and icon libraries loaded via CDN
- Optimized for fast loading on static hosting

## File Organization

```
├── index.html          # Main homepage
├── syllabus.html       # Syllabus page with search
├── style.css          # Main stylesheet (Y2K theme)
├── syllabus.css       # Syllabus-specific styles
├── script.js          # Search functionality
├── image.png          # Local image asset
└── .gitignore         # Standard web development ignores
```

This is a straightforward static website project with no build process required - files can be directly opened in browsers or served via any static web server.
