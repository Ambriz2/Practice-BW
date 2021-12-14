
const Characters= ({ character = "" }) => {
    const { name, image, species } = character;

    return (
        <div className="col-md-4 mb-2">
            <div className="card">
                <img src={image} alt={`${name}`} className="card-img-top"/>
                <div className="card-body">
                    <h5>{name}</h5>
                    <p>{species}</p>
                </div>
            </div> 
        </div>
    );
};

export default Characters;