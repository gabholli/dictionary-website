"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import SearchForm from "./components/SearchForm"
import { Definition, Meaning, Word } from "./types/types"

export default function WordInfo() {
  const [search, setSearch] = useState("")
  const [word, setWord] = useState<Word | null>(null)

  useEffect(() => {
    if (!search) return
    // Fetch from local API route (not external API)
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((response) => {
        console.log(response.data)
        setWord(response.data[0])
      })
      .catch((error) => {
        console.error("Fetch error: ", error)
      })
  }, [search])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    setSearch(form.search.value)
  }

  const wordData = word ? (
    <div className="flex flex-col items-center gap-y-2 text-center mt-2 px-4">
      <audio controls src={word.phonetics?.[0]?.audio || undefined} />
      <h2 className="text-4xl md:text-5xl">{word.word}</h2>
      {word.meanings.map((meaning: Meaning, index: number) => (
        <div key={index} className="flex flex-col items-center gap-y-4 mt-2">
          <h3 className="text-2xl md:text-4xl underline">{meaning.partOfSpeech}</h3>
          <div className="flex flex-col gap-y-4">
            {meaning.definitions.map((def: Definition, i: number) => (
              <p className="md:text-2xl" key={i}>{def.definition}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  ) : null

  return (
    <main className="flex flex-col items-center mt-10 mb-10">
      <SearchForm handleSubmit={handleSubmit} search={search} />
      {wordData}
    </main>
  )
}
