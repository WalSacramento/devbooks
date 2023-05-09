import { useEffect,useState } from 'react'

export function Books () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Efeito')

    return() => console.log('teste de retirada')
  } 
  , [])
  return (
    <>
      <span>{count} </span>
      <button onClick={() => setCount(count + 1)}>Increment </button>
    </>
  )
}