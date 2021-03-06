import axios from "axios";
import { useEffect } from "react";


function Payment() {
    const [payment] = useState([]);


    useEffect(() => {
        axios.post('http://54.38.54.4:1323/orders', payment)
            .then(response => this.setState({paymentId: response.data.id}));
    })

}

export default Payment;