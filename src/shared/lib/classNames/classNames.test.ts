import { classNames } from 'shared/lib/classNames/classNames'

describe('test get className string', () => {
  test('without classes', () => {
    expect(classNames('')).toBe('')
  })

  test('with array of classes', () => {
    expect(classNames('', ['class1', 'class2'])).toBe('class1 class2')
  })

  test('with dynamic classes', () => {
    const expected = classNames('', ['class1', 'class2'], { class3: true, class4: false })
    expect(expected).toBe('class1 class2 class3')
  })

  test('with dynamic classes plus main-class', () => {
    const expected = classNames('main-class', ['class1', 'class2'], { class3: true, class4: false })
    expect(expected).toBe('main-class class1 class2 class3')
  })
})
