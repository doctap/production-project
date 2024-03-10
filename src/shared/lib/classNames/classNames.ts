type Mods = Record<string, boolean>

export const classNames = (className: string, add: string[] = [], mods: Mods = {}): string => (
  [
    className,
    ...add.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([key, _]) => key),
  ].join(' ').trim()
)
