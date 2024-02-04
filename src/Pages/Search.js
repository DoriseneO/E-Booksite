export default function Search({ search, handleSearch }) {
  return (
    <div className="flex justify-center items-center w-[100%] md:h-[100px] h-[70px]">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        id="voice-search"
        className="bg-gray-50 border h-[50%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
        required
      />
    </div>
  );
}
