type Car = {
  name: string
  price: number
  transmission: 'auto' | 'manual'
}

type Laptop = {
  name: string
  price: number
  weight: string
}

export default function getUniqPropValue<
  T extends Car | Laptop,
  R = T extends Car ? Car['transmission'] : Laptop['weight']
>(obj: T): R {
  return ('transmission' in obj ? obj.transmission : obj.weight) as R
}

getUniqPropValue({ name: '자동차 1', price: 10000, transmission: 'auto' })
getUniqPropValue({ name: '자동차 2', price: 10000, transmission: 'manual' })

getUniqPropValue({ name: '노트북 1', price: 10000, weight: '1kg' })
getUniqPropValue({ name: '노트북 2', price: 10000, weight: '2kg' })
