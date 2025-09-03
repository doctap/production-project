export type Mods = Record<string, boolean | undefined>

export const classNames = (className: string, mods: Mods = {}, add: string[] = []): string => (
    [
        className,
        ...Object.entries(mods)
        // eslint-disable-next-line
            .filter(([_, value]) => Boolean(value)).map(([key, _]) => key),
        ...add.filter(Boolean),
    ].join(' ').trim()
)
