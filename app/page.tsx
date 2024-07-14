import Image from "next/image";
import Link from 'next/link';
import Head from 'next/head';
import LayoutMain from "../components/LayoutMain";
import MainComponent from "@/components/MainComponent";

export default function Home() {
  return (
    <>
<LayoutMain>
    <MainComponent></MainComponent>
</LayoutMain>
    </>
  );
}
