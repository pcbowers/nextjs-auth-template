import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useSession, getSession, signIn } from 'next-auth/client'

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if(!session) return { props: {} }
  return {
    redirect: {
      destination: '/admin',
      permanent: false,
    }
  }
}

export default function Home() {
  const [session] = useSession();

  const handleSignin = (e) => {
    e.preventDefault()
    signIn()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Bedrock SMS</title>
        <meta name="description" content="Bedrock SMS App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a href="#" onClick={handleSignin}  className="btn-signin">
          Sign in
        </a>
        <h1 className={styles.title}>
          Welcome to Bedrock SMS
        </h1>
      </main>
    </div>
  )
}
