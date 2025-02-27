import ItemCard from "./ItemCard";

const Accordion = ({ item, index, activeIndex, setActiveIndex }) => {
  const isOpen = index === activeIndex;
  const handleClick = () => {
    setActiveIndex(isOpen ? null : index);
  };

  return (
    <div className="mx-30 p-5">
      {/* Accordion Header */}
      <div
        className="text-2xl font-bold flex justify-between align-center cursor-pointer"
        onClick={handleClick}
      >
        <div>{item.title} ({item.itemCards.length})</div>
        <div>{isOpen ? '⯅' : '⯆'}</div>
      </div>
      {/* Accrodion Body */}
      {isOpen && (
        <div className="flex flex-wrap items-center justify-center">
          {item.itemCards.map((itemCard) => (
              <ItemCard data={itemCard} key={itemCard?.card?.info?.id} />
          ))}
        </div>
      )}
      <hr className="mt-2"/>
    </div>
  );
};

export default Accordion;
