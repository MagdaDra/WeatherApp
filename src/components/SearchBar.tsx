import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
    onSearch: (city: string) => void; // onSearch takes a city name and executes search action. '=> void' means that the function doesn't return anything
    isLoading?: boolean; // it disables input while data is loading
}

export default function SearchBar({onSearch, isLoading = false}: SearchBarProps) { // the function receives onSearch and isLoading as props
    const [query, setQuery] = useState(''); // query stores the user input text
    const handleSubmit = (e: React.FormEvent) => { // e - event object is of type React.FormEvent. It's a typescript thing. It's a type from React that represents form-related events (submit, change, etc.). It ensures that e contains form specfic properties and methods. It helps with typescript type-checking and common errors.
        e.preventDefault(); // prevents the page from reloading on form submission
        if (query.trim()) { // trim ensures no empty or white space - only queries are submitted
            onSearch(query.trim()); // here we pass the query to the onSearch function. IF ensures that onSearch is only called if query.trim() it true which means is NOT an empty string. We don't want to make unnecessary API calls with an empty strings
        }
    };
    return (
        // the form submits the search query when the user presses enter / button
        <form onSubmit={handleSubmit} className='w-full max-w-md'>
            <div className='relative'>
                <input
                    type='text'
                    value={query} // ensures thei nout reflects the state
                    onChange={(e) => setQuery(e.target.value)} // updates query when user types
                    placeholder='Search for a city...'
                    className='w-full px-4 py-2 pr-10 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500'
                    disabled={isLoading} // prevents input when isLoading is true
                />
                <button
                    type='submit'
                    disabled={isLoading} // disables button when loading
                    className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
                >
                    <Search size={20} />
                </button>
            </div>

        </form>
    )
}
