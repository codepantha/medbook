const ThemeToggler = () => {
  const toggleTheme = () => {
    document.getElementsByTagName('html')[0].classList.toggle('dark');
  };
  return (
    <div className="form-check form-switch mt-7 ml-2">
      <label htmlFor="theme-toggler">
        <input
          type="checkbox"
          id="theme-toggler"
          className="cursor-pointer h-8 w-16 rounded-full appearance-none bg-slate-500 checked:bg-blue-600 transition duration-200 ease-in-out relative"
          onChange={toggleTheme}
        />
      </label>
    </div>
  );
};

export default ThemeToggler;
