export default function Analytics() {
    return (
        <div className="w-full h-full flex gap-1 px-32 items-center">
            <div className="w-3/4 h-full">

            </div>
            <div className="w-1/4 h-full border-2 rounded-lg flex flex-col">
                <div className="flex items-center gap-2 border-b-2 p-3">
                    <label htmlFor="searchbar">🔍</label>
                    <input
                        className="bg-background w-full focus:outline-none"
                        id="searchbar"
                        type="text"
                        placeholder="Search for Survey in Collection.."
                    />
                </div>
                <div className="w-full h-full">

                </div>
            </div>
        </div>
    );
}
