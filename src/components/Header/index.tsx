export const Header = () => {
  return (
    <div className="hidden md:table-header-group border border-gray-50 bg-gray-50">
      <div className="table-row text-xs font-semibold text-gray-500 h-12">
        <span className="table-cell align-middle w-1/4 pl-4">CAR</span>
        <span className="table-cell align-middle w-1/4 pl-4">NEXT RESERVATION</span>
        <span className="table-cell align-middle w-1/4 pl-4">STATUS</span>
        <span className="table-cell align-middle w-1/4 pl-4">RATING</span>
        <span className="table-cell align-middle w-24 text-center pr-4">ACTIONS</span>
      </div>
    </div>
  );
};
