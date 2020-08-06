import React from 'react'
import { render } from '@testing-library/react'
import Episodes from './Episodes'
import { formatSeasons } from '../utils/formatSeasons'
import { mockShow } from '../fixtures/show'

const seasons = formatSeasons(mockShow._embedded.episodes)

test('renders episode component', () => {
  render(<Episodes episodes={seasons['Season 1']} />)
})

test('season one contains all episodes', () => {
  const { queryAllByTestId } = render(<Episodes episodes={seasons['Season 1']} />)

  expect(queryAllByTestId('episode')).toHaveLength(seasons['Season 1'].length)
})