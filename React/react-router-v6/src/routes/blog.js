import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";


const Blog = () => {

    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
       // console.log(searchParams.get('pepe'))
    }, [searchParams]);

    const { data, error, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (loading) {
        return <Loading />
    }

    if (error !== '') {
        return <h2>{error}</h2>
    }

    const handleChange = (e) => {
        let filter = e.target.value;
        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    };
    return (
        <div>
            <h1 className="text-center">Blog</h1>
            <input
                className="form-control mb-2"
                type="text"
                value={searchParams.get("filter") || ""}
                onChange={handleChange}
                placeholder="Enter title search"
            />
            {data
                .filter((item) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = item.title.toLowerCase();
                    return name.indexOf(filter.toLowerCase()) !== -1;
                }).map((item) => (
                    <h4 key={item.id}>
                        <Link to={`/blog/${item.id}`}>{item.id} - {item.title}</Link>
                    </h4>
                ))
            }

        </div>
    );
};

export default Blog;
