const NavbarComponent = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,1) 100%)",
      }}
      className="w-full h-14 text-white flex items-center"
    >
      <div className="flex justify-between items-center w-full">
        {/* MENU HEAD */}
        <ul>
          <li>Logo</li>
        </ul>

        {/* MENU CENTER */}
        <ul className="flex gap-3">
          <li>Product & Solutions</li>
          <li>Services</li>
          <li>Industries</li>
          <li>Career</li>
          <li>About</li>
        </ul>

        {/* MENU END */}
        <ul>
          <li>Search</li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComponent;
