export function getCaption(obj, text) {
  let index = obj.lastIndexOf(text) + text.length - 1
  obj = obj.substring(index + 1, obj.length)
  return obj
}
