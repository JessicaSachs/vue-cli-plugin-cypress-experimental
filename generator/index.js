module.exports = api => {
  api.render('./template', {
    hasTS: api.hasPlugin('typescript'),
    hasESLint: api.hasPlugin('eslint')
  })

  api.extendPackage({
    devDependencies: {
      'cypress': '*',
      'cypress-vue-unit-test': '*'
    },
    scripts: {
      'test:components': 'vue-cli-service test:components'
    }
  })
}
