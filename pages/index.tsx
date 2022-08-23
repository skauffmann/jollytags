import { Heading, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';
import { TagConfigurationForm } from '../components/tag-configuration-form';
import { ITagConfiguration } from '../types';

const PDFTagViewer = dynamic<ITagConfiguration>(() =>
  import('../components/pdf-tags').then((module) => module.PDFTagViewer)
);

const Home: NextPage = () => {
  const [tagConfiguration, setTagConfiguration] =
    useState<ITagConfiguration | null>(null);
  return (
    <>
      <Head>
        <title>Jollytags</title>
        <meta name="description" content="Jollytags" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack spacing={6}>
        <Heading mb={10}>Jollytags</Heading>
        <TagConfigurationForm onSubmit={setTagConfiguration} />
        {tagConfiguration && <PDFTagViewer {...tagConfiguration} />}
      </VStack>
    </>
  );
};

export default Home;
