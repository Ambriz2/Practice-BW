
import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
const Post = () => {
    let params = useParams();

    const { data, error, loading } = useFetch(
        "https://jsonplaceholder.typicode.com/posts/" + params.id
    );

    if (loading) {
        return <Loading />
    }

    if (error !== "") {
        return <h1>{error}</h1>;
    }

    return (
        <div className="card text-white bg-primary mb-3">   
            <div className="card-body">
                <h5 className="card-title">{data.id} - {data.title}</h5>
                <p className="card-text">{data.body}</p>
            </div>
        </div> 
    );
};

export default Post;
