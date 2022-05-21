import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatu component', () => {
  test('status from props shold be in the state', () => {
    const component = create(<ProfileStatus status='it-kamasutra' />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('it-kamasutra')
  })

  test('after creation span should be displayed ', () => {
    const component = create(<ProfileStatus status='it-kamasutra' />)
    const root = component.root
    const span = root.findByType('span')
    expect(span).not.toBeNull()
  })

  test("after creation input should'n be displayed ", () => {
    const component = create(<ProfileStatus status='it-kamasutra' />)
    const root = component.root
    expect(() => {
      const input = root.findByType('input')
    }).toThrow()
  })

  test('after creation <span> should contains correct status', () => {
    const component = create(<ProfileStatus status='it-kamasutra' />)
    const root = component.root
    const span = root.findByType('span')
    expect(span.children[1]).toBe('it-kamasutra')
  })

  test('input should be displayed in editMode instead of span', () => {
    const component = create(<ProfileStatus status='it-kamasutra' />)
    const root = component.root
    let span = root.findByType('span')
    span.props.onDoubleClick()
    let input = root.findByType('input')
    expect(input.props.value).toBe('it-kamasutra')
  })

  test('callback should be called', () => {
    const mockCallbank = jest.fn()
    const component = create(
      <ProfileStatus status='it-kamasutra' updateStatus={mockCallbank} />
    )
    const instance = component.getInstance()
    instance.deactivateEditMode()
    expect(mockCallbank.mock.calls.length).toBe(1)
  })
})
