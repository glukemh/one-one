import { useState } from 'react'

type ClassInput = (string | [string, boolean])[]

const useClassNames = (classNames: ClassInput) => {
  const reduceClassNamesToSet = (classNames: ClassInput) => {
    return classNames.reduce((classSet, className) => {
      if (typeof className === 'string') {
        return classSet.add(className)
      } else if (className[1]) {
        return classSet.add(className[0])
      } else {
        classSet.delete(className[0])
        return classSet
      }
    }, new Set<string>())
  }

  const [classes, setClasses] = useState(reduceClassNamesToSet(classNames))

  const setClassSet = (newClassNames: ClassInput | ((prev: ClassInput) => ClassInput)) => {
    if (typeof newClassNames === 'function') {
      setClasses(reduceClassNamesToSet(newClassNames([...classes])))
      return
    }

    setClasses(reduceClassNamesToSet(newClassNames))
  }

  return [[...classes].join(' '), setClassSet] as const
}

export default useClassNames
