/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth';

const CheckoutForm = ({ proUserFee }) => {
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const { user, isLoading } = useAuth()
    const stripe = useStripe();
    const elements = useElements();

    const axiosPublic = useAxiosPublic()
    useEffect(() => {

        axiosPublic.post("/create-payment-intent", { price: proUserFee })
            .then(res => {
                console.log(res)
                setClientSecret(res.data.clientSecret);
                console.log(res.data.clientSecret);
            })
            .catch(error => {
                // Handle errors from the server
                setError('Error fetching client secret:', error.message);
            });
    }, [axiosPublic, proUserFee]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement) //this element come to form > cardElement

        if (card === null) {
            return
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: card
        });

        if (error) {
            // swal(error?.message);
            setError(error?.message);
        } else {
            setSuccess(`Payment success full ${paymentMethod.last4}`)

        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonyms',
                    name: user?.displayName || 'anonyms',

                }
            }
        })
        if (confirmError) {
            // swal(confirmError?.message);
            setError(confirmError?.message);
        } else {
            if (paymentIntent?.status === "succeeded") {

                setSuccess(` Payed success fully your paymentIntent id is ${paymentIntent.id}`)

                // now save the payment
                const payment = {
                    email: user?.email,
                    // price: totalPrice,
                    date: new Date(),
                    transitionId: paymentIntent.id,

                }
                const res = await axiosPublic.post('/payments', payment)

                if (res.data.result.insertedId) {
                    setSuccess('Transaction has been successful and now you are pro-user')
                }
                // setError('')
            }
        }
    }

    if (isLoading) {
        return <div><progress className="progress w-56"></progress></div>
    }

    return (
        <div>
            <p className='text-green-500 mb-5'>{success} Thank you!</p>
            <p className='text-red-500 mb-5'>{error}</p>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
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

                <div className="flex justify-center mt-5">
                    <button type="submit" className="btn bg-yellow-500" disabled={!stripe}>
                        Pay
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;