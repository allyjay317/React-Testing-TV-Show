import React from 'react'
import { render, wait, fireEvent } from '@testing-library/react'
import App from './App'
import { mockShow } from './fixtures/show'
import { fetchShow as mockFetchShow } from './api/fetchShow'

import { formatSeasons } from './utils/formatSeasons'

const seasons = formatSeasons(mockShow._embedded.episodes)

jest.mock('./api/fetchShow')

test('Renders component and displays a summary', async () => {
  mockFetchShow.mockResolvedValueOnce({ data: mockShow })
  const { queryByTestId } = render(<App />)

  await wait()
  expect(queryByTestId('summary').innerHTML).toBe(mockShow.summary)
})

test('Renders component and populates dropdown', async () => {
  mockFetchShow.mockResolvedValueOnce({ data: mockShow })
  const { queryByText, qu } = render(<App />)
  await wait()
  expect(queryByText(/Select a season/)).toBeDefined()

  fireEvent.click(queryByText(/Select a season/))

  for (let i = 1; i <= Object.keys(seasons).length; i++) {
    expect(queryByText(`Season ${i}`)).toBeDefined()
  }
})