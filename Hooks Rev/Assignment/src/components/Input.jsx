

const Input = ({  inputValue = "", setInputValue, handleSearch , selectedState }) => {

    const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
        "Uttar Pradesh", "Uttarakhand", "West Bengal"
      ];
      

    const onSubmitButton = (e) => {
        e.preventDefault();
        const trimmed = (selectedState || "").trim();
        if (!trimmed) {
            alert("Enter a state");
            return;
        }
        if (!states.includes(trimmed)) {
            alert("Invalid state");
            return;
        }
        handleSearch(trimmed);
    };

    return (

        <div>
            <h3 className="text-center mt-7 mb-5 text-2xl font-semibold text-gray-400 "> Please enter the name of state you want to check weather </h3>
            <form class="max-w-md mx-auto" onClick={onSubmitButton}>
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-700 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search"  value={inputValue} list="states" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Maharastra, Gujrat..." required  onChange={(e) => setInputValue(e.target.value)}  // ✅ CORRECT
                    />
                    <datalist id="states">
                        {states.map((state) => (
                            <option key={state} value={state} />
                        ))}
                    </datalist>
                    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Input;