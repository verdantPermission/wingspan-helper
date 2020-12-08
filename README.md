# Wingspan Helper (Swift Edition)

A small web app dedicated to the beautiful boardgame [Wingspan](https://stonemaiergames.com/games/wingspan/). It currently provides a digital scoresheet.

:arrow_right: Try it out at https://wingspan-helper-swift.vercel.app/

:sparkles: You can add the app to your homescreen and use it offline if you want!

![Screenshot](screenshot.png?raw=true "Screenshot")

## Credits

This project was started by greengiraffe. Kudos for the effort and making such a beautiful app!

This is a fork of the original app, which is found here: https://github.com/greengiraffe/wingspan-helper

I added the ability to provide player names (bragging rights! screenshots!), store all the state data across application runs (so you don't have to enter your names every time), plus adjusting the layout so when selecting the number of players, the scorecard uses the whole width of the display. I also cut out all the Automata stuff, since that was not important to me, and wasn't yet functional anyways.

This is an independent open source project, it is not related to Stonemaier Games or the original boardgame Wingspan in any way.

The graphic of the scissor-tailed flycatcher used as the app icon and for the site header is based on the original artwork by [Natalia Rojas](https://www.nataliarojasart.com/).

The handwritten typeface used is Cardenio Modern by [Nils Cordes](http://nilscordes.com/).

## License

This project is licensed under the terms of the MIT license. Feel free to contribute here on GitHub by creating bug reports or pull requests.

## Development

The website is a single page application based on [Vue.js](https://vuejs.org/) and [vue-cli](https://cli.vuejs.org/).

### Project setup

You need to have [Yarn](https://yarnpkg.com/en/) installed.

```sh
# clone the repository
git clone https://github.com/verdantPermission/wingspan-helper

# change into the project folder
cd wingspan-helper

# Setup all dependencies
yarn install

# Run the development server
yarn run serve
```

### Commands

- `yarn run serve` – Compiles and hot-reloads for development
- `yarn run build` – Compiles and minifies for production
- `yarn run lint` – Lints and fixes files
