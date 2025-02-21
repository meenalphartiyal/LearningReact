# Chapter 10 - Jo dikhta hai vo bikta hai
## Q1: Explore all the ways of writing css.
Ans: 
1. Inline CCS
    ```
    <p style="color: red; font-size: 20px;">Hello, world!</p>
    ```

2. Internal CSS
    ```
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: lightgray;
        }
      </style>
    </head>
    ```

3. External CSS

    **styles.css**
    ```
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
    }
    ```
    **index.html**
    ```
    <head>
      <link rel="stylesheet" href="styles.css">
    </head>
    ```

## Q2: How do we configure tailwind?
Ans: 
1. Create your project
    ```
    mkdir my-project
    cd my-project
    npm init -y
    npm install parcel
    mkdir src
    touch src/index.html
    ```
2. Install Tailwind CSS
    ```
    npm install tailwindcss @tailwindcss/postcss
    ```
3. Configure PostCSS in `.postcssrc`
    ```
    {
      "plugins": {
        "@tailwindcss/postcss": {}
      }
    }
    ```
4. Import Tailwind CSS in `index.css`
    ```
    @import "tailwindcss";
    ```
5. Start your build process
    ```
    npx parcel src/index.html
    ```

## Q3: In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?
Ans:
| Key | Purpose |
|-----|---------|
| content |	Defines which files Tailwind should scan for class names (important for purging unused CSS). |
| theme |	Defines the default design system (colors, spacing, typography, etc.). |
| extend |	Extends Tailwind's defaults without overriding them. |
| plugins |	Adds extra functionality using Tailwind or third-party plugins. |

## Q4: Why do we have .postcssrc file?
Ans: The `.postcssrc` file is used to configure PostCSS, a tool that processes CSS and applies plugin like Tailwind CSS.

1. Enables Tailwind CSS processing: Ensures Tailwind’s utility classes are properly generated.
2. Adds Autoprefixer: Automatically adds vendor prefixes for better browser support (e.g., -webkit-, -moz-).
3. Custom PostCSS Plugins: Allows additional CSS transformations like nesting, minification, and optimizations.
