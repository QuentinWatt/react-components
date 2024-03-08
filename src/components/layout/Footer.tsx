const Footer: React.FC = () => {
  const date = new Date();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="border-b border-gray-500">
        <div className="container mx-auto px-3">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 my-6">
            <ul>
              <li>A list item</li>
              <li>Second item</li>
              <li>Third item</li>
              <li>Fourth item</li>
            </ul>

            <ul>
              <li>A list item</li>
              <li>Another item</li>
              <li>Other item</li>
              <li>Last item</li>
            </ul>

            <ul>
              <li>A list item</li>
              <li>Second item</li>
              <li>Third item</li>
              <li>Fourth item</li>
            </ul>

            <div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-3 py-6">
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl">Qcasts</span>

          <span className="text-xs">
            &copy; {date.getFullYear()} Quentin Watt
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
