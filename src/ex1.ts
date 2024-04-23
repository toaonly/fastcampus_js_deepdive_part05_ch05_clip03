export default function getKeys<T extends Record<string, any>>(
  obj: T
): (keyof T)[] {
  return Object.keys(obj)
}

getKeys({ name: '철수', age: 10 })
getKeys({ value: 'Value 1', text: 'Text 1' })
getKeys({ subject: '논리회로', isMajor: true })
