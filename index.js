module.exports = (api, options) => {
  const { info, chalk, execa } = require('@vue/cli-shared-utils')

  api.registerCommand('test:components', {
    description: 'run components tests with Cypress',
    usage: 'vue-cli-service test:components [options]',
    options: {
      '--headless': 'run in headless mode without GUI',
      '-s, --spec': '(headless only) runs a specific spec file. defaults to "all"'
    },
    details:
      `All Cypress CLI options are also supported:\n` +
      chalk.yellow(`https://docs.cypress.io/guides/guides/command-line.html#cypress-run`)
  }, async (args, rawArgs) => {
    info(`Starting component tests...`)

    const configs = typeof args.config === 'string' ? args.config.split(',') : []
    const cyArgs = [
      args.headless ? 'run' : 'open', // open or run
      '--config', [...configs].join(','),
      ...rawArgs
    ]

    const cypressBinPath = require.resolve('cypress/bin/cypress')
    const runner = execa(cypressBinPath, cyArgs, { stdio: 'inherit' })

    if (process.env.VUE_CLI_TEST) {
      runner.on('exit', code => {
        process.exit(code)
      })
    }

    return runner
  })
}

module.exports.defaultModes = {
  'test:components': 'test'
}
