import dns from 'node:dns';

const getSiteHeader = async () => {

    // fix localhost bug, if it does not work, use 127.0.0.1
    dns.setDefaultResultOrder('ipv4first');

    const reqOptions = {
        headers: {Authorization: `Bearer ${process.env.API_TOKEN}`}
    };
    const response = await fetch(`${process.env.BASE_URL}/api/site-header?populate=*`, reqOptions);

    if (!response.ok) {
        throw new Error("Failed to fetch");
    }
    return await response.json();
}

export default getSiteHeader();