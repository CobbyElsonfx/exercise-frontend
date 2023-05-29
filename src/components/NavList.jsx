

const navListItems = [
    {
      label: "Blocks",
      icon: CubeTransparentIcon,
    },
    {
      label: "Docs",
      icon: CodeBracketSquareIcon,
    },
  ];


function NavList() {
    return (
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        <NavListMenu />
        {navListItems.map(({ label, icon }, key) => (
          <Typography
            key={label}
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              {label}
            </MenuItem>
          </Typography>
        ))}
      </ul>
    );
  }

  export default NavList