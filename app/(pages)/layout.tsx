'use client';
import Sidebar from '../components/Sidebar';
import { StMain, StMainLayout } from './styled';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <StMainLayout>
            <Sidebar />
            <StMain>{children}</StMain>
        </StMainLayout>
    );
}
