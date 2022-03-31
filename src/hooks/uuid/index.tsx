import React from 'react'

const getRandomNumber = (): number =>
    Math.floor(Math.random() * Math.pow(10, 9))

export function useUUID(): number {
    const ref = React.useRef<number>()

    if (ref.current === undefined) {
        ref.current = getRandomNumber()
    }

    return ref.current
}
