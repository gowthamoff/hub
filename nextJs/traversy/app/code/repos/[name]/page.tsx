import Repo from '@/app/components/Repo'
import RepoDir from '@/app/components/RepoDir'
import Link from 'next/link'
import { Suspense } from 'react'

const DetailsPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to repos
      </Link>
      <Suspense fallback={<div>Loading Repo</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Dir</div>}>
        <RepoDir name={name} />
      </Suspense>
    </div>
  )
}

export default DetailsPage
