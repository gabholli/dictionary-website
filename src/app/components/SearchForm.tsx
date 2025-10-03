export default function SearchForm({ handleSubmit }: { handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void, search: string }) {
    return (
        <form className="mb-4 flex justify-center items-center gap-x-4" onSubmit={handleSubmit}>
            <input className="py-2 indent-4" name="search" type="text" placeholder="Search for a word..." />
            <button className="bg-black text-white px-4 py-2" type="submit">Search</button>
        </form>
    )
}