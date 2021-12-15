import GrantFilterItem from "./GrantFilterItem";

const MainGrantFilters = () => {
  return (
    <>
      <div className="flex flex-wrap mb-2 justify-center p-8">
        {/* call GrantFilterItem componet and pass heading*/}
        <GrantFilterItem
          name="Grant Status"
          Data ={[
            { id: 0, label_item: "Item 1" },
            { id: 1, label_item: "Item 2" },
          ]}
          key="uniqueId1"
        />
        <GrantFilterItem
          name="Review Status"
          Data ={[
            { id: 0, label_item: "Item 2" },
            { id: 1, label_item: "Item 3" },
          ]}
          key="uniqueId2"
        />
        <GrantFilterItem
          name="Payment Status"
          Data ={[
            { id: 0, label_item: "Item 4" },
            { id: 1, label_item: "Item 5" },
          ]}
          key="uniqueId3"
        />
        <GrantFilterItem
          name="Ball in Count"
          Data ={[
            { id: 0, label_item: "Item 6" },
            { id: 1, label_item: "Item 7" },
          ]}
          key="uniqueId4"
        />
        {/* Submit Button */}
        <button
          className="w-20 shadow bg-zinc-900 hover:bg-zinc-700 transition focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-xl"
          type="button"
        >
          <img
            src="assets/images/download.png"
            className="object-cover h-5 mx-auto"
          />
        </button>
      </div>
    </>
  );
};

export default MainGrantFilters;
