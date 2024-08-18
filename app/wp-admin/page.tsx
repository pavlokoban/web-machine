import LayoutMain from "@/components/LayoutMain";
import IpInfo from '@/components/ipinfo/IpInfo';
import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head';
import MainComponent from "@/components/MainComponent";

export default function WpAdmin () {
    return (
    <LayoutMain>
    <h1 className="unbounded centered-texts big-padding-top-desc">Wp-admin... Seriously?</h1>
    <IpInfo />
    </LayoutMain>
    )
};