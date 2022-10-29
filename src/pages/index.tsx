import Head from 'next/head';
import Layout from '../components/layout';
import { trpc } from '../utils/trpc';

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'trainer' });

  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Head>
        <title>Pokemon Battler</title>
        <meta name="description" content="Battle Pokemon!" />
      </Head>

      <div>{hello.data.greeting}</div>
    </Layout>
  );
}
