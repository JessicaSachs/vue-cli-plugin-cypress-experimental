// Originally taken from the e2e Vue Plugin

// jest.setTimeout(process.env.APPVEYOR ? 120000 : 60000)
//
// const create = require('@vue/cli-test-utils/createTestProject')
//
// test('should work', async () => {
//   const project = await create('components-cypress', {
//     plugins: {
//       '@vue/cli-plugin-babel': {},
//       '@vue/cli-plugin-e2e-cypress': {},
//       '@vue/cli-plugin-eslint': {
//         config: 'airbnb',
//         lintOn: 'save'
//       }
//     }
//   })
//
//   const config = JSON.parse(await project.read('cypress.json'))
//   config.video = false
//   await project.write('cypress.json', JSON.stringify(config))
//
//   if (!process.env.CI) {
//     await project.run(`vue-cli-service test:components`)
//   } else if (!process.env.APPVEYOR) {
//     await project.run(`vue-cli-service test:components --headless`)
//   }
// })
//
// test('should work with TS', async () => {
//   const project = await create('components-cypress-ts', {
//     plugins: {
//       '@vue/cli-plugin-typescript': {
//         'classComponent': true,
//         'tsLint': true,
//         'lintOn': ['save']
//       },
//       '@vue/cli-plugin-e2e-cypress': {}
//     }
//   })
//
//   const config = JSON.parse(await project.read('cypress.json'))
//   config.video = false
//   await project.write('cypress.json', JSON.stringify(config))
//
//   if (!process.env.CI) {
//     await project.run(`vue-cli-service test:components`)
//   } else if (!process.env.APPVEYOR) {
//     await project.run(`vue-cli-service test:components --headless`)
//   }
// })
