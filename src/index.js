// eslint-disable-next-line consistent-return
export function serialize(values) {
  if (typeof window !== `undefined` && window.mt) {
    return window.mt.serialize(values)
  }
}
