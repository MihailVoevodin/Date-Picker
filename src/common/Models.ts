import {ReactNode} from 'react';

export interface ITab {
    id: number,
    label: string,
    children: ReactNode,
}