import Head from "next/head";
import React, { useRef, useLayoutEffect, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import ButtonBox from "../components/ButtonBox";
import { SpeakerphoneIcon, TrashIcon } from "@heroicons/react/outline";

const buttons = [
  {
    name: "Speak",
    action: () => {
      alert("This should speak text out loud.");
    },
    icon: SpeakerphoneIcon,
  },
  {
    name: "Trash",
    action: () => {
      alert("This should wipe what's been written.");
    },
    icon: TrashIcon,
  },
];

export default function Home() {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const identifiedText = useState("");

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight - 100,
      });
    }
  }, []);

  return (
    <main
      ref={targetRef}
      className="max-w-7xl mx-auto sm:px-6 lg:px-8 min-h-screen"
    >
      <Head>
        <title>Voice Tablet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
        Voice Tablet
      </h1>
      <div className="min-h-300 h-5/6">
        <SignatureCanvas
          penColor="green"
          canvasProps={{
            width: dimensions.width,
            height: dimensions.height,
            className: "sigCanvas border-dashed border-4 border-light-blue-500",
          }}
        />
      </div>
      <p>{identifiedText}</p>
      <ButtonBox buttons={buttons} />
    </main>
  );
}
