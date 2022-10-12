import { useParams } from "react-router-dom";
import "./FigureDetails.css"

const FigureDetails = () => {
    const params = useParams();
    const figureId = params.figureId;
    return (
        <section>
            <h2>Details about figure {figureId}</h2>
        </section>
    );
};

export default FigureDetails;