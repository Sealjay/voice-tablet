import Head from "next/head";
import React, { useRef, useLayoutEffect, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import ButtonBox from "../components/ButtonBox";
import { SpeakerphoneIcon, TrashIcon } from "@heroicons/react/outline";

// TODO: Use SWR https://nextjs.org/docs/basic-features/data-fetching

/*
async function readCanvas(base64String) {
  var buffer = Buffer.from(base64String, "base64");
  var stream = streamifier.createReadStream(buffer);
  const captionLocal = (
    await computerVisionClient.describeImageInStream(() =>
      createReadStream(stream)
    )
  ).captions[0];
  console.log(
    `This may be ${caption.text} (${captionLocal.confidence.toFixed(
      2
    )} confidence)`
  );
}*/

export default function Home() {
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [identifiedText, setIdentifiedText] = useState("");
  let canvasRef;

  const doneDrawing = () => {
    setIdentifiedText("This is where your recognised handwriting would go.");
    // TODO: Pass the data to Computer Vision readCanvas(canvasRef.toDataURL());
    //    TODO: Use SWR https://nextjs.org/docs/basic-features/data-fetching
  };

  const wipeScreen = () => {
    canvasRef.clear();
    setIdentifiedText("");
  };

  const buttons = [
    {
      name: "Speak",
      action: () => {
        alert("This should speak text out loud."); // TODO: Read the identifiedtext variable and read out loud
      },
      icon: SpeakerphoneIcon,
    },
    {
      name: "Trash",
      action: wipeScreen,
      icon: TrashIcon,
    },
  ];

  useLayoutEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight - 100,
      });
    }
  }, []);

  return (
    <main
      ref={containerRef}
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
          penColor="rgb(79, 70, 229)"
          ref={(ref) => {
            canvasRef = ref;
          }}
          onEnd={doneDrawing}
          canvasProps={{
            width: dimensions.width,
            height: dimensions.height,
            className: "sigCanvas border-dashed border-4 border-light-blue-500",
          }}
        />
      </div>
      <p>{identifiedText}</p>
      <footer>
        <small>
          Copyright &copy; Chris Lloyd-Jones 2021.{" "}
          <a
            className="underline hover:no-underline"
            href="https://sealjay.com"
            target="_blank"
          >
            Released under the MIT licence.
          </a>
        </small>
      </footer>
      <ButtonBox buttons={buttons} />
    </main>
  );
}
