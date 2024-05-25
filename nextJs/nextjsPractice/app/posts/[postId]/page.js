import { useRouter } from 'next/router'
import React from 'react'

const page = () => {
  const router = useRouter()
  return (
    <div>{router.query.postId}</div>
  )
}

export default page