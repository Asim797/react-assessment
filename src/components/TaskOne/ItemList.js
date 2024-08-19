import React, { useEffect, useState, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

function ItemList() {
    const controller = new AbortController();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${apiBaseUrl}/api/v1/items?page=${page}`);
                const data = await response.json();
                if (data?.success){
                    if (page === 1){
                        setItems(data?.items?.data);
                    }else{
                        setItems(prevItems => [...prevItems, ...data?.items?.data]);
                    }
                }
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Failed to fetch items', error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchItems();

        return () => {
            // Cleanup function to cancel async operation if the component is unmounted
            controller.abort();
        };
    }, [page]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <Fragment>
            <Header />
            <Link style={{marginTop: 20}} to={"/users"}>Users</Link>
            <Link style={{marginTop: 20, marginLeft: 20}} to={"/conditional-rendering"}>Conditional Rendering</Link>
            <Link style={{marginTop: 20, marginLeft: 20}} to={"/step-form"}>Step Form</Link>
            <ul>
                {items.map(item => (
                    <li key={item.id} style={{marginTop:4}}>{item.country}</li>
                ))}
            </ul>
            <Footer loading={loading} />
            <button onClick={loadMore} disabled={loading}>Load More</button>
        </Fragment>
    );
}

export default ItemList;
