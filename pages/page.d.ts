import { NextPage } from 'next';
import { ComponentType, ReactElement } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactElement;
  layout?: ComponentType;
};
