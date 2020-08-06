import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Episode = (props) => {
  const params = useParams()
  const [episode, setEpisode] = useState(null)

  useEffect(() => {
    setEpisode(props.episodes.id)
  }, [params.id])
  return (
    <div style={{ display: 'flex' }}>
      <p>Previous Episode</p>
      <div>

      </div>
      <p>Next Episode</p>
    </div>
  )
}

export default Episode