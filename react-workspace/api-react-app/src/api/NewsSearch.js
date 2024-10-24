import React, {useState} from 'react'

function NewsSearch(){

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchNews = () => {
        const response = axios.get("http://localhost:9090/search/news.json")
    }

}
export default NewsSearch;