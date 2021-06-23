import Head from 'next/head'

import { useSession, getSession, signOut } from 'next-auth/client'

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if(session) return { props: { session } }
  return {
    redirect: {
      destination: '/',
      permanent: false,
    }
  }
}

export default function Admin() {
  const [ session ] = useSession()

  const handleSignout = (e) => {
    e.preventDefault()
    signOut()
  }

  return <>
    <Head>
      <title>Bedrock SMS Admin</title>
      <meta name="description" content="Bedrock SMS App Admin Page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Protected Page</h1>
    <p>You can view this page because you are signed in.</p>
    <a href="#" onClick={handleSignout} className="btn-signin">Sign out from {session.user.email} </a>
  </>
}
