import Head from 'next/head';
import Layout from '../../components/layout';

export default function Pokedex() {
  return (
    <Layout>
      <Head>
        <title>Pokemon Battler</title>
        <meta name="description" content="Battle Pokemon!" />
      </Head>

      <div>PokeDex</div>
    </Layout>
  );
}
