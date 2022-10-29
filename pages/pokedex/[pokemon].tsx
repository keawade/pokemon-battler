import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';

export default function Pokedex() {
  const router = useRouter();
  const { pokemon } = router.query;

  return (
    <Layout>
      <Head>
        <title>{pokemon} | PokeDex</title>
        <meta name="description" content="Battle Pokemon!" />
      </Head>

      <div>{pokemon}</div>
    </Layout>
  );
}
