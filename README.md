## Ui-elements

This is not some awesome tool that will make your life better.
This is a library of UI elements that I adapted or wrote.
This library is public, and I hope you find something useful here,
but its main goal is so I can find things later.

---
# \<fancy-button>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i fancy-button
```

## Usage

```html
<script type="module">
  import 'fancy-button/fancy-button.js';
</script>

<fancy-button></fancy-button>
```



## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
