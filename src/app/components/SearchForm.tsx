export default function SearchForm({ handleSubmit }: { handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void, search: string }) {
    return (
        <form onSubmit={handleSubmit}>
            <input name="search" type="text" placeholder="Search for a word..." />
            <button type="submit">Search</button>
        </form>
    )
}