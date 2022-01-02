# PSF Eleventy Starter

This is a _slightly_ opinionated and _very_ bare bones starter theme for building sites with 11ty.

In essence, this is a fork of [Andy Bell's](https://twitter.com/piccalilli_) [11ty-base](https://github.com/hankchizljaw/11ty-base) with a few extra personal seasonings thrown in for flavour. As it develops and matures, I anticipate it taking on more of an identity of it's own - but until then constant reference in search of best practice means that it starts as something of an imitation.

It uses a fluid type scale that utilises `CSS clamp()` to grow at a Major Third ratio on small screens and a Perfect Fourth on larger ones. The legwork behind this was done with the very clever [type tool](https://utopia.fyi/type/calculator/?c=320,14,1.25,1140,16,1.333,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l) from the people at [Utopia](https://utopia.fyi/).

## Getting Started

This guide assumes you have Node and NPM installed.

1. 📦 **Install dependencies**.

   ```sh
   npm i
   ```

2. 🚧 **Run for local development.** Kicks off a hot-reloading server at `localhost:8080`.

   ```sh
   npm run start
   ```

3. 🛳 **Build for deployment.** Serves from `dist/` directory.

   ```sh
   npm run build
   ```
