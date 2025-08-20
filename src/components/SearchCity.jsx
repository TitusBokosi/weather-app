export const SearchCity = ({ data }) => {
  return (
    <form
      action=""
      onSubmit={data.handleSearchCity}
      className="flex items-center justify-center gap-5"
    >
      <input
        type="search"
        placeholder="Enter city"
        onChange={data.handleCityChange}
        onInput={data.handleCityChange}
        required
        className="p-2 outline-2 rounded-4xl border-0"
      />
      <button type="submit" className="p-2 bg-white text-blue-600 rounded-full">
        {" "}
        Search
      </button>
    </form>
  );
};
