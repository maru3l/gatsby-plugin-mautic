module.exports = {
  branches: ["master"],
  plugins: [
    [
      'semantic-release-gitmoji', {
        releaseRules: {
          major: [ ':boom:', ':tada:' ],
          minor: [ ':sparkles:' ],
          patch: [
            ':bug:',
            ':ambulance:',
            ':lock:'
          ]
        }
      }
    ],
    '@semantic-release/npm',
    ["@semantic-release/git", {
      "message": ":bookmark: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    // '@semantic-release/github',
  ]
}
