"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import SearchForm from "./components/SearchForm"

export default function WordInfo() {
  const [search, setSearch] = useState("")
  const [word, setWord] = useState(null)

  useEffect(() => {

    // Fetch from local API route (not external API)
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
      })
      .finally(() => {
      })
  }, [search])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    setSearch(form.search.value)
  }

  return (
    <main>
      <SearchForm handleSubmit={handleSubmit} search={search} />
    </main>
  )
}
