import React, {useState} from 'react'

function NewsSearch(){

    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // const searchNews = () => {
    //     const response = axios.get("http://localhost:9090/search/news")
    // }

    let scriptUrl = "https://openapi.naver.com/v1/search/book.json";


}
export default NewsSearch;