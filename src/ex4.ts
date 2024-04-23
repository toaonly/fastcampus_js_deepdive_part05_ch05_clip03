export default function transformUppercaseKey<
  T extends Record<string, any>,
  K extends keyof T & string,
  U extends {
    [UpperK in K as Uppercase<UpperK>]: T[UpperK]
  }
>(obj: T): U {
  const upperCaseObj = {} as any

  Object.keys(obj).forEach(key => {
    upperCaseObj[key.toUpperCase()] = obj[key]
  })

  return upperCaseObj
}

transformUppercaseKey({ name: '홍길동', age: 10 }).AGE
transformUppercaseKey({ name: '홍길동', age: 10 }).NAME

transformUppercaseKey({ code: '404', message: 'Not found' }).CODE
transformUppercaseKey({ code: '404', message: 'Not found' }).MESSAGE

transformUppercaseKey({ list: [1, 2, 3, 4] }).LIST
