import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from '@material-ui/core/Container'
import { api } from './config';
import { Gallery } from './components/Gallery'
import CircularProgress from '@material-ui/core/CircularProgress'
import Pagination from '@material-ui/lab/Pagination'
import { Search } from './components/Search'


export function App() {

    const [photos, setPhotos] = useState([])

    const [loading, setLoading] = useState(true);
    const [formData, setformData] = useState('');
    const [page, setPage] = useState()

    const getData = async (input, page) => {
        setLoading(true)
        const response = await axios.get(
            `https://api.unsplash.com/search/photos?page=${page}&query=${!input ? 'forest' : input}&client_id=${api}&per_page=10`)
        const data = await response.data
        setPhotos(data);
        setLoading(false)
    }
    const handleChange = (event) => {
        setformData(event.target.value)
    }

    const handnleSubmit = (event) => {
        event.preventDefault();
        getData(formData)
    }

    const pageChange = (event, value) => {
        setPage(value)
        getData(formData, value)
    }

    useEffect(() => {
        getData()
    }, []);

    if (loading) return <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress size={130} />
    </div>

    return <Container>
        <Search change={handleChange} submit={handnleSubmit} />
        <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
            <Pagination
                count={3}
                variant="outlined"
                color="secondary"
                size="large"
                onChange={pageChange}
                page={page} />
        </div>
        <Gallery photos={photos.results} />
    </Container>
}

