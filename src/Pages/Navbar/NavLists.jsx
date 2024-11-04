

const NavLists = () => {
    return (
        <div>
            <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                            Shelter Support Network
                            <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                            Green Earth Project
                            <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                            Hope for Health Initiative
                            <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </li>
                        <li className="relative group cursor-pointer hover:text-[var(--tertiary-color)]">
                            Bright Futures Foundation
                            <span className="absolute bottom-0 left-0 w-0 border-b-2 border-[var(--tertiary-color)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </li>
        </div>
    );
};

export default NavLists;