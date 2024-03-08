import Navbar from "@/components/Navbar";
import FormComponent from "@/components/Step/Form";
import Initial from "@/components/Step/Initial";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function Home() {
  const [step, setStep] = useState(0);
  const [fid, setFid] = useState<Number>(0);
  const [phrase, setPhrase] = useState<string>("");
  const [isPhrase, setIsPhrase] = useState<Boolean>(false);


  return (
    <div>
      <Navbar />
      <main
        className={`flex flex-col items-center justify-center p-24 ${inter.variable}`}
      >
        {step == 0 && <Initial setStep={setStep} />}
        {step == 1 && (
          <FormComponent
            isPhrase={isPhrase}
            setIsPhrase={setIsPhrase}
            setFid={setFid}
            setStep={setStep}
            setPhrase={setPhrase}
          />
        )}
      </main>
    </div>
  );
}
