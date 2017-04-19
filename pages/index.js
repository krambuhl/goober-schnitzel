import Head from 'next/head'

import Heading from '../tags/Heading';

export const Index = () => (
  <div>
    <Head>
      <title>Yo</title>
    </Head>

		<Heading>Yo</Heading>
		<Heading Tag="h2">Yo</Heading>
		<Heading Tag="h3">Yo</Heading>
  </div>
);

export default Index;