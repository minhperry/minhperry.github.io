# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## How to use

First, clone this repository.  
HTTPS:
```shell
git clone https://github.com/minhperry/minhperry.github.io.git
```

SSH:
```shell
git clone git@github.com:minhperry/minhperry.github.io.git
```

Run `npm install` to install all dependencies and wait for it to finish.

Run `ng serve` for a dev server. Navigate to [`http://localhost:4200/`](http://localhost:4200/).
The app will automatically reload if you change any of the source files.

For SSR-based development, run `npm run`

## Build

Run `ng build --configuration=production` to build the project. 
The build artifacts will be stored in the desired directory listed in [`angular.json`](/angular.json).

By default, this is an SSR app, however, you can pre-render the site to be used with static hosting services like GitHub Pages, Cloudflare Pages or Netlify by running using the content of `dist/browser`.

For true SSR apps, it is recommended to use `pm2` for easier process management.

# Technology used

* [Angular 19](https://angular.dev/) as the main skeleton.
* [Bootstrap 5.3](https://getbootstrap.com/) for styling and pre-styled components.
* [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS.
* ~~[Cloudflare Pages](https://pages.cloudflare.com/) for deploying, however this will soon be moved to my personal VPS on [Hetzner Cloud](https://www.hetzner.com/cloud/) for SSR and improvements.~~
* [Hetzner Cloud](https://www.hetzner.com/cloud/) for hosting and SSR.