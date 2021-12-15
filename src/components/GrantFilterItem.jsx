import { useState } from "react";
const GrantFilterItem = (props) => {

  const [isOpen, setOpen] = useState(false);

  // Fetch value form data
  const [items, setItem] = useState(props.Data);
  // usestare for handle selected item
  const [selectedItem, setSelectedItem] = useState(null);

  // handle dropdown
  const toggleDropdown = () => setOpen(!isOpen);

  // fetch selected item value and update (setSelectedItem)
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setOpen(false);
  };
 
  return (
    <>
      <div className="dropdown m-4 relative">
        {/* Dropdown Name */}
        <p
          className="block tracking-wide text-gray-400 text-xs font-medium"
          htmlFor="grid-state"
        >
          {props.name}
        </p>
        {/* Toggle selected value useing onclick menthod*/}
        <div
          className="dropdown-header flex w-56 justify-between"
          onClick={toggleDropdown}
        >
          {selectedItem
            ? items.find((item) => item.id == selectedItem).label_item
            : "Select"}
          <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
          <div className="pointer-events-none relative inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div
          className={`p-4 rounded-xl absolute dropdown-body bg-slate-800 text-white w-full translate-y-5 ${
            isOpen && "open"
          }`}
        >
          {/* Get data and handle click function */}
          {items.map((item) => (
            <div key={ Math.random().toString(36).substr(2, 9) }
              className="dropdown-item mb-2"
              onClick={(e) => handleItemClick(e.target.id)}
              id={item.id}
            >
              {item.label_item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GrantFilterItem;
