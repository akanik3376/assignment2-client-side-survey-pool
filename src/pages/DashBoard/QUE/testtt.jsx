import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const CheckOutForm = () => {
    const { user } = useContext(AuthContext)
    const [error, setError] = useState()
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const totalPrice = 50

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post("/create-payment-intent", { price: totalPrice })
                .then(res => {

                    console.log(res.data.clientSecret);

                    setClientSecret(res.data?.clientSecret);
                })
        }

    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error.message);
        }
        else {
            console.log(paymentMethod, 'paymentmethod');
            setError('')
        }

        // confirm payment card method
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'User'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error', confirmError);
        }
        else {
            console.log(paymentIntent, 'paymentIntent');
            if (paymentIntent?.status === 'succeeded') {
                console.log('transition successfull', paymentIntent?.id);
            }
        }

        // send data in serverside
        const payment = {
            email: user?.email,
            price: totalPrice,
            transtionId: paymentIntent?.id,
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }),
        }

        const res = await axiosSecure.post("/payments", payment)
        // console.log(res.data);
        //   console.log(res.data);
        //   console.log(res.data.result.insertedId);
        if (res.data.result.insertedId) {
            toast.success('Transaction has been successful and now you are pro-user')
        }




    }


    return (
        <div>

            <form onSubmit={handleSubmit} >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <p className="text-red-500">
                    {error}</p>
                <button className="bg-blue-600 text-white font-bold my-5 px-3 py-1 rounded text-lg" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>

            </form>

            <ToastContainer />

        </div>
    );
};

export default CheckOutForm;