'use client';

import React, { PropsWithChildren } from 'react';

import Header from '@components/molecules/header';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
    </>
  );
}
