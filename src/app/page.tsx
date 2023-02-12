"use client";

import { Inter } from "@next/font/google";
import Link from "next/link";
import { getPredictions } from "@/lib/api";
import { FormEvent, useRef, useState } from "react";
import clsx from "clsx";
import { Correction } from "@/components/correction";
import { AnimatePresence } from "framer-motion";
import { Button, Resources } from "@/components";

export default function Home() {
  const [results, setResults] = useState<Array<any>>([]);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null); // TODO: Replace this with useForm if more complex logic is required

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputRef?.current?.value.toString();
    if (!input) return;

    setError(undefined);
    setLoading(true);

    try {
      const predictions = await getPredictions(input);

      const data = predictions.data;
      setResults((prev) => [{ sentence: data.input?.sentence, positions: data.output?.positions, results: data.output?.results }, ...prev]);
      (e.target as HTMLFormElement).reset();
    } catch (e) {
      setError((e as Error).message);
    }

    setLoading(false);
  };

  return (
    <>
      <header>
        <h1 className="font-medium font-serif text-lg tracking-tight">Das oder Dass</h1>
      </header>

      <main className="">
        <p className="text-brand-500 max-w-prose dark:text-brand-300 font-sans text-sm sm:text-tiny">Der Gebrauch von &quot;das&quot; und &quot;dass&quot; ist in der deutschen Sprache häufig nicht richtig. Dieses Tool basiert auf einem KI Modell und zeigt dir für deinen Eingabesatz ob du &quot;das&quot; und &quot;dass&quot; richtig benutzt hast.</p>
        <form onSubmit={submit} className="mt-5 flex flex-col items-start">
          <input
            ref={inputRef}
            required={true}
            placeholder='z.B. "Dass meine Hose am Knie kaputt ist, habe ich erst beim Bügeln gesehen."'
            className="relative w-full sm:text-tiny focus:outline-none focus:ring-2 transition-all dark:text-brand-200 bg-white dark:bg-brand-800 placeholder:text-brand-500 dark:placeholder:text-brand-500 px-3.5 py-2 rounded-md border border-black/5 shadow-input shadow-black/5 dark:shadow-black/10 !outline-none"
          />
          <Button loading={loading} disabled={loading} className="mt-2">
            Korrigiere den Satz
          </Button>
        </form>
        {error && <p className="text-red-600 sm:text-tiny font-serif font-medium py-3">{error}</p>}

        <section aria-labelledby="corrections" className="pt-10 pb-4">
          <h2 id="corrections" className="dark:text-brand-300 tracking-tight">
            Korrekturen
          </h2>

          <div className="text-sm sm:text-tiny mt-2">
            <ol className="space-y-2">
              <AnimatePresence>
                {results.map((result) => (
                  <Correction key={result.sentence} result={result} />
                ))}
              </AnimatePresence>
            </ol>
            {results.length == 0 && <p className="text-brand-500">Es gibt noch keine Korrekturen. Gib einen Satz ein und schaue ob dein Gebrauch von &quot;das&quot; und &quot;dass&quot; richtig war.</p>}
          </div>
        </section>

        <section aria-labelledby="resources" className="pt-4 pb-10">
          <h2 id="resources" className="dark:text-brand-300 tracking-tight">
            Wie wird &quot;das&quot; und &quot;dass&quot; richtig benutzt?
          </h2>

          <Resources />
        </section>
      </main>
    </>
  );
}
