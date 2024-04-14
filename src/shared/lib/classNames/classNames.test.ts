import { classNames } from 'shared/lib/classNames/classNames'

describe('test get className string', () => {
  test('without classes', () => {
    expect(classNames('')).toBe('')
  })

  test('with array of classes', () => {
    expect(classNames('', {}, ['class1', 'class2'])).toBe('class1 class2')
  })

  test('with dynamic classes', () => {
    const expected = classNames('', { class3: true, class4: false }, ['class1', 'class2'])
    expect(expected).toBe('class3 class1 class2')
  })

  test('with dynamic classes plus main-class', () => {
    const expected = classNames('main-class', { class3: true, class4: false }, ['class1', 'class2'])
    expect(expected).toBe('main-class class3 class1 class2')
  })
})
