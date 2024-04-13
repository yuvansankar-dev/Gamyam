import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import noImage from "../../assets/no-image.png"
import BootstrapCarousel from './BootstrapCarousel/BootstrapCarousel';
import "./Container.css"
import Card from './Card/Card';

export default function Container() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const totalLands = useRef(0)

    const fetchData = () => {
        fetch(`https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${page}&page_size=12`).then((res) => res.json()).then((res) => {
            setData(pre => [...pre, ...res.results]);
            (res.next !== null) ? setPage(res.next) : setHasMore(false);
            totalLands.current = res.count;
        }).catch((err) => console.log(err));
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            {Boolean(totalLands.current) && <h4 className='header'>{`Total Lands : ${totalLands.current}`}</h4>}
            <InfiniteScroll dataLength={data.length} next={fetchData} loader={<div className='loading'><CircularProgress /></div>} hasMore={hasMore}>
                <div className='containerStyle'>{Boolean(data.length) && data.map((land, index) => <Card land={land}><BootstrapCarousel land={land} index={index} key={index} /></Card>)}</div>
            </InfiniteScroll></>
    )
}
