type Mods = Record<string, string | boolean>;

export const classNames = (className: string, mods: Mods, add: string[]): string => (
  [className,
    ...add,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([key, _]) => key)
  ].join(' ')
)