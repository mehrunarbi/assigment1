import Link from "next/link";
const HomePage =()=>{
  return(
  <div>

  <ul>
    <li>
      <Link href="/" >Home</Link>
    </li>
    <li>
      <Link href="/about" target="_blank">About</Link>
    </li>
    <li>
      <Link href="/contact" target="_blank">Contact</Link>
    </li>
  </ul>
  <h1 className="green">Welcome to Homepage</h1>
  
  </div>
  );
}
export default HomePage;