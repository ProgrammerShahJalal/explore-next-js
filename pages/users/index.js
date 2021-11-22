import React from 'react';
import Link from 'next/link'

const index = ({ users }) => {
    return (
        <div>
            <h2>Our total users: {users.length}</h2>
            {
                users.map(user => <p key={user.id}>{user.name}
                    <br />< Link href={`/users/${user.id}`}>
                        <a>Explore</a>
                    </Link>
                </p>)
            }
        </div >
    );
};

export default index;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return {
        props: { users }
    }
}
