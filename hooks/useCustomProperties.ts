import { useEffect, useRef, CSSProperties } from 'react'

type CSSCustomProperty = {
  [key: `--${string}`]: string | number
}

type CSSStyleProperties = {
  [K in keyof CSSProperties & keyof CSSStyleDeclaration]: CSSProperties[K] | CSSStyleDeclaration[K]
}

const useCustomProperties = <T extends HTMLElement>(properties: CSSCustomProperty | CSSProperties) => {
  const ref = useRef<T>(null)

  const propertyEntries = Object.entries(properties) as [
    keyof CSSCustomProperty | keyof CSSProperties,
    CSSCustomProperty[keyof CSSCustomProperty] | CSSProperties[keyof CSSProperties]
  ][]

  useEffect(() => {
    propertyEntries.forEach(([name, value]) => {
      if (!ref.current) return

      if (name.toString().startsWith('--')) {
        name = <keyof CSSCustomProperty>name
        ref.current.style.setProperty(name, value?.toString() || '')
      } else {
        name = <keyof CSSStyleProperties>name
        ref.current.style[name] = value?.toString() || ''
      }
    })
  }, [propertyEntries])

  return ref
}

export default useCustomProperties
