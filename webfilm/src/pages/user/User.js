import { useParams } from "react-router-dom";

export default function User(){
    const params = useParams();
    const { id } = params;
    
    return(
        <div>
            This is User { id } page
        </div>
    );
}