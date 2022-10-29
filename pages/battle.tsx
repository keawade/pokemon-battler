import Head from 'next/head';
import { useEffect } from 'react';
import io from 'socket.io-client';
import Layout from '../components/layout';

export default function Home() {
  useEffect(() => {
    fetch('/api/socket').finally(() => {
      const socket = io();

      socket.on('connect', () => {
        console.log('connect');
        socket.emit('hello');
      });

      socket.on('hello', (data) => {
        console.log('hello', data);
      });

      socket.on('a user connected', () => {
        console.log('a user connected');
      });

      socket.on('disconnect', () => {
        console.log('disconnect');
      });
    });
  }, []); // Added [] as useEffect filter so it will be executed only once, when component is mounted

  return (
    <Layout>
      <Head>
        <title>Pokemon Battler</title>
        <meta name="description" content="Battle Pokemon!" />
      </Head>

      <div>Battle</div>
    </Layout>
  );
}
