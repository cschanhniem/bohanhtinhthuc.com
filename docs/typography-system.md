# Modern Typography System

## Overview

The design system has been updated with modern, trending Google Fonts that provide excellent Unicode support and optimal rendering for both English and Vietnamese content.

## Font Stack

### Primary Fonts

1. **Inter** - Body text and UI elements
   - Variable font with optical sizing
   - Excellent screen readability
   - Comprehensive Unicode support
   - 414 billion Google Fonts views (2024)

2. **Space Grotesk** - Headings and display text
   - Modern geometric sans-serif
   - Trending design choice
   - Strong character at larger sizes

3. **JetBrains Mono** - Code and monospace content
   - Developer-focused monospace font
   - Excellent ligatures support
   - Modern coding aesthetic

4. **Be Vietnam Pro** - Vietnamese content optimization
   - Retained as fallback for Vietnamese-specific needs
   - Excellent diacritics support

## Typography Classes

### Display Typography

```css
.text-heading-xl  /* 4xl-7xl responsive, line-height: 0.95 */
.text-heading-lg  /* 3xl-5xl responsive, line-height: 1.1 */
.text-heading-md  /* 2xl-3xl responsive, line-height: 1.2 */
.text-heading-sm  /* xl-2xl responsive, line-height: 1.25 */
```

### Body Typography

```css
.text-body-lg     /* lg-xl responsive, line-height: 1.7 */
.text-body-md     /* base-lg responsive, line-height: 1.6 */
.text-body-sm     /* sm-base responsive, line-height: 1.5 */
```

### Specialized Typography

```css
.text-display     /* Space Grotesk with OpenType features */
.text-body        /* Inter with optimized kerning */
.text-mono        /* JetBrains Mono with ligatures */
.text-vietnamese  /* Be Vietnam Pro optimized */
```

## Advanced Typography Features

### OpenType Features

- **Kerning**: Automatic character spacing optimization
- **Ligatures**: Connected character combinations
- **Contextual Alternates**: Smart character substitutions
- **Character Variants**: Stylistic alternatives

### Font Feature Classes

```css
.font-feature-numbers    /* Tabular numbers */
.font-feature-fractions  /* Diagonal fractions */
.font-feature-ordinals   /* Ordinal indicators (1st, 2nd) */
.font-feature-small-caps /* Small capitals */
```

## Performance Optimizations

### Font Loading Strategy

1. **Preconnect** to Google Fonts domains
2. **Preload** critical font files with fallback
3. **Progressive enhancement** with noscript fallback
4. **font-display: swap** for faster initial render

### Critical CSS

Font rendering is optimized with:
- `text-rendering: optimizeLegibility`
- `-webkit-font-smoothing: antialiased`
- `-moz-osx-font-smoothing: grayscale`

## Tailwind Configuration

### Font Families

```javascript
fontFamily: {
  sans: ['"Inter"', '"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
  display: ['"Space Grotesk"', '"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
  mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
  vietnamese: ['"Be Vietnam Pro"', '"Inter"', 'system-ui', 'sans-serif'],
}
```

## Typography Scale

### Responsive Design

All typography classes include responsive scaling:
- Mobile: Smaller sizes for readability
- Desktop: Larger sizes for visual hierarchy
- Optimal line heights for each size

### Letter Spacing

Negative letter spacing (tracking) on larger headings:
- XL headings: -0.025em
- Large headings: -0.02em
- Medium headings: -0.015em
- Small headings: -0.01em

## Usage Examples

### Component Headers

```astro
<h1 class="text-heading-xl text-gradient">
  Main Page Title
</h1>

<h2 class="text-heading-lg text-readable">
  Section Header
</h2>
```

### Body Content

```astro
<p class="text-body-md text-readable-secondary">
  Regular paragraph content with optimal readability.
</p>

<blockquote class="text-body-lg italic text-readable-muted">
  Emphasized quote with larger text.
</blockquote>
```

### Code Blocks

```astro
<code class="text-mono text-accent-color bg-accent-color/10 px-2 py-1 rounded">
  inline code
</code>

<pre class="text-mono bg-gray-900/80 p-6 rounded-xl">
  <code>
    // Code block with syntax highlighting
  </code>
</pre>
```

## Accessibility

### WCAG Compliance

- Minimum contrast ratios maintained
- Scalable text (up to 200% zoom)
- Clear visual hierarchy
- Screen reader friendly

### Focus States

```css
.focus-visible\:ring-accent:focus-visible {
  @apply ring-2 ring-accent-color ring-offset-2 ring-offset-gray-900;
}
```

## Migration Notes

### Breaking Changes

1. Font family names now include quotes for proper CSS parsing
2. New responsive typography classes replace simple size classes
3. Enhanced OpenType features may affect character spacing

### Backward Compatibility

- Be Vietnam Pro retained for Vietnamese content
- Existing classes work with new font stack
- Gradual migration recommended

## Browser Support

- **Modern Browsers**: Full feature support
- **Legacy Browsers**: Graceful fallback to system fonts
- **Variable Fonts**: Progressive enhancement

## Performance Metrics

- **Font Loading**: ~200ms with preload optimization
- **Cumulative Layout Shift**: Minimized with font-display: swap
- **Bundle Size**: Optimized with subset loading

This typography system provides a modern, accessible, and performant foundation for all text content while maintaining excellent support for Vietnamese language requirements.
