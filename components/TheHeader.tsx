import Link from 'next/link';

const theHeader = () => {
  return (
    <header>
      <nav className="p-2">
        <ul className="flex items-center space-x-2">
          <li>
           <strong className='font-zendots'>_Factory</strong>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/test">Test</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default theHeader;