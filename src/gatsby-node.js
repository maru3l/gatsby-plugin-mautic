exports.onPreInit = ({ reporter }, options) => {
  if (!options.hostUrl) {
    reporter.warn(
      `The Mautic plugin requires a hostUrl. Did you mean to add it?`
    )
  }
}
