module.exports = {
  extends: 'expo',
  rules: {
    'import/no-unresolved': [
      2,
      {
        ignore: ['@/']
      }
    ]
  }
};