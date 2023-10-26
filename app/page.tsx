import Link from 'next/link';

export default function Wtf() {
    return (
        <div className="welcome">
            <div>
                <h1>Welcome!</h1>
                <br />
                <h2>This is entry page for my test-task</h2>
                <br />
                <h3>Technologies:</h3>
                <ul>
                    <li>
                        <a href="https://nextjs.org/" target="_blank">
                            Next.js 13.5.6 - base
                        </a>
                    </li>
                    <li>
                        <a href="https://styled-components.com/" target="_blank">
                            Styled-components - for styles
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/bvaughn/react-window" target="_blank">
                            React-window - for table with infinite scroll
                        </a>
                    </li>
                </ul>
                <br />
                <br />
                <Link href={'/dashboard'} style={{ border: '1px solid', padding: '10px 20px' }}>
                    <strong>Click for watch</strong>
                </Link>
            </div>
        </div>
    );
}
