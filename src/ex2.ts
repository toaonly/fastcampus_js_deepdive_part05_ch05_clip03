export default function getValueByKey<
  T extends Record<string, any>,
  K extends keyof T
>(obj: T, key: K) {
  return obj[key]
}

getValueByKey({ name: '철수', age: 10 }, 'age')
getValueByKey({ name: '철수', age: 10 }, 'name')

getValueByKey({ value: 'Value 1', text: 'Text 1' }, 'value')
getValueByKey({ value: 'Value 1', text: 'Text 1' }, 'text')

getValueByKey({ subject: '논리회로', isMajor: true }, 'subject')
getValueByKey({ subject: '논리회로', isMajor: true }, 'isMajor')
