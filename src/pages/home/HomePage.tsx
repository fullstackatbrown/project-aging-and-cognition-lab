import React from 'react'
import Navbar from '../../components/Navbar'
import Publication from '../../components/Publication'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div>
        <Publication
          title="Cognitive Decline in Aging: A Comprehensive Review"
          authors="John Doe, Jane Smith"
          journal="Journal of Cognitive Science"
          date="2023"
        />
        <Publication
          title="Effects of Sleep on Memory Retention in Older Adults"
          authors="Alice Johnson, Michael Lee"
          journal="Aging & Cognition Research"
          date="2022"
        />
      </div>

    </>
  )
}
