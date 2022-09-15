import { useEffect, useRef } from "react";

interface StringRepresentable {
  toString: () => string;
}

const useCustomProperties = <T extends HTMLElement>(properties: Record<string, StringRepresentable>) => {
  const ref = useRef<T>(null);
  
  const customPropertyEntries = Object.entries(properties).map(([key, value]) => [
    '--' +
      key
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase(),
    value.toString(),
  ])

  useEffect(() => {
    customPropertyEntries.forEach(([name, value]) => {
      ref.current?.style.setProperty(name, value);
    });
  }, [customPropertyEntries]);

  return ref;
}

export default useCustomProperties;