import Link from 'next/link';

const Index = () => (
    <div>
        <h1>SSR Magician</h1>
        {/*If once server called and page loaded then not calling server anymore*/}
        <Link href='/about'>
            <button>About</button>
            {/*<a>About</a>*/}
        </Link>
        {/*Server called with every time when page opened*/}
        <br/><a href='/about'>About</a>
    </div>
);

export default Index;