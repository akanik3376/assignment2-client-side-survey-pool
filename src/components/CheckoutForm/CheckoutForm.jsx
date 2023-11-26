/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth';

const CheckoutForm = ({ proUserFee }) => {
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useAuth()
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
                console.error('Error fetching client secret:', error);
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
            console.log(error?.message);
        } else {
            console.log(`Payment success full ${paymentMethod.last4}`)

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
            console.log(confirmError?.message);
        } else {
            if (paymentIntent?.status === "succeeded") {

                console.log(` Payed success fully your paymentIntent id is ${paymentIntent.id}`)

                // now save the payment
                const payment = {
                    email: user?.email,
                    // price: totalPrice,
                    date: new Date(), //utc date convert by using use moment js
                    transitionId: paymentIntent.id,
                    // cardIds: cart.map(item => item?._id),
                    // menuIds: cart.map(item => item?.menuId),
                    // category: cart.map(item => item?.name),
                    // status: 'pending'
                }
                const res = await axiosPublic.post('/payments', payment)
                console.log(res.data)
                // if (res.data?.paymentResult.insertedId) {
                //     swal('Thank You for your payment ')
                // }
                // refetch()
                // navigate('/dashboard/payment-history')
            }
        }
    }

    return (
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
    );
};

export default CheckoutForm;