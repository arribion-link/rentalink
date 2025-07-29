# RentaLink 
# Rental management platform
# https://rentalink.co.ke/

# Landing page Structure
    Hero / CTA section
      --strong heading
      --subtitle and value props
      --landlord: Start Manageing Properties  
      --tenants: Search Vacant Houses
      --hero section image/illustration

    How it works
      --visual steps
      --icons or mini graphics
      --simpal explanation for both landlords and tenants
    
    Key Services / Features
      =>  cards or icons for each core feature
      --house listings
      --payment tracking
      --Tenants communication
      --maintenance Management
      --vacacy Search


    Why Us
    --Quick bullets points or comparison chart
    --Highlights whta sets RentaLink apart

    
    Pricing
     --bASED On House units
     --show value tiers
     --Highlight most populer plan


    Landlord Testimonials
     --Real Names (or initials)
     --Short Quotes
     --Trust-building


    FAQs
     --Expandable Dropdown
     --SEO opportunity with keywords

    
    Blog / Insight Preview
     --2-3posts or topics
     --Helps With SEO & builds expertise

    
    Call to Action (Repeate)
     --Short CTA again
     --Reinforce the Value Before the Footer



    Footer
     --Links: About, Contact, Blog, Legal, Socials
     --Newsletter signUp

# LandLord Dashboard components
  1. Payments
  2. Tenants
  3. Maintenance
  4. House Listings
  5. Analytics
  6. Reports


# ARRIBION TECHNOLOGIES COLOR PALLETES
{
  primary:     #1E90FF
  secondary:   #ffffff
  blendor:     #040e1fff
  blender-v2:  #090118ff
}
# product color palletes
{
  #0A1F44

  #87CEFA

  #FF6F61
  #FFA07A

  #20B2AA
   
  #F5F7FA
  #DCE1E7



}



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```