import React , {useState} from 'react'

const Items2 = () => {

  const [vegetables,setvegetables] = useState(
    [
      {
        id: 1,
        image: 'veg1',
        name: 'Tomato',
        price: 120
      },
      {
        id: 2,
        image: 'veg2',
        name: 'Carrot',
        price: 170
      },
      {
        id: 3,
        image: 'veg3',
        name: 'Lady Finger',
        price: 200
      },
      {
        id: 4,
        image: 'veg4',
        name: 'Raddish',
        price: 250
      },
      {
        id: 5,
        image: 'veg5',
        name: 'Cabbage',
        price: 190
      },
      {
        id: 6,
        image: 'veg6',
        name: 'Bitter Guard',
        price: 110
      }
    ])
  return (
    <section>
      {
        vegetables.map((vegetable) => {
          return<vegetablesCard key={vegetable.id} vegetable={vegetable} />
        }
      )
      }
      </section>
  )
}

export default Items2 ;
