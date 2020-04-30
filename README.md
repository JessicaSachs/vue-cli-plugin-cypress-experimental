# vue-cli-plugin-cypress-experimental 👩🏻‍🔬
️
> Experimental Cypress Plugin, provides component testing among other feature flags

[Cypress](https://www.cypress.io/) offers a rich interactive interface for running tests in the browser. This Vue plugin is a quick way to install experimental features like component testing. Find out more about component testing [here](https://docs.cypress.io/guides/references/experiments.html).

⚠️ This plugin and the features inside of it are experimental. We want to collect developer feedback, but they are not stable or fully-featured yet. Please read other experiments [here](https://docs.cypress.io/guides/references/experiments.html)

⚠️ Requires Cypress **v4.5.0** or later

## Installing in an Already Created Project 💎

``` sh
# Add it
vue add cypress-experimental

# Run it
npm run test:component # yarn test:components
```

## Injected Commands ⚙️

- **`vue-cli-service test:components`**

  Run component tests with `cypress open`.

  By default it launches Cypress in interactive mode with a GUI. This allows you to view the components as they are being tested. If you want to run the tests in headless mode (e.g. for CI), you can do so with the `cypress run` option.

  Options:

  ```
  --headless run in headless mode without GUI
  -s, --spec (headless only) runs a specific spec file. defaults to "all"
  ```

  Additionally:

  - In GUI mode, [all Cypress CLI options for `cypress open` are also supported](https://docs.cypress.io/guides/guides/command-line.html#cypress-open);
  - In `--headless` mode, [all Cypress CLI options for `cypress run` are also supported](https://docs.cypress.io/guides/guides/command-line.html#cypress-run).

  Examples :
  - Run Cypress in headless mode for a specific file: `vue-cli-service test:component --headless --spec tests/components/specs/actions.spec.js`

## Configuration 🛠

We've pre-configured Cypress to place most of the component testing related files under `<projectRoot>/tests/components`. You can also check out [how to configure Cypress via `cypress.json`](https://docs.cypress.io/guides/references/configuration.html#Options).

To place the component tests sibling to your source files, just change the `componentFolder` option in your cypress.json file to point to the root of your source directory.

## Environment Variables 🌲

Cypress doesn't load .env files for your test files the same way as `vue-cli` does for your [application code](https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code). Cypress supports a few ways to [define env variables](https://docs.cypress.io/guides/guides/environment-variables.html#) but the easiest one is to use .json files (either `cypress.json` or `cypress.env.json`) to define environment variables. Keep in mind those variables are accessible via `Cypress.env` function instead of regular `process.env` object.
