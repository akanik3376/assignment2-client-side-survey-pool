import Container from '../../Share/Container';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';

// TO DO 
const stripePromise = loadStripe('pk_test_51OEGAdFOJWgUXB6qUUEtkGc6GGlYFUGEHXyB3HCywmQE4GbEEDthG1EQuXCVZoAP1fdSvow03BOiXL6NkvwCayFD00e3FaRHOx');

const GetPro = () => {
    const proUserFee = 50;

    return (
        <div>
            <Container>
                <div className='my-12 text-center'>
                    <p className="font-semibold">If you wont to pro-user members pay <span className='border-b-2 border-b-green-600 font-bold text-lg'>$ {proUserFee}</span></p>
                    <h2 className="text-3xl mb-6 font-semibold mt-5 ">Pay now</h2>

                </div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm proUserFee={proUserFee} />
                </Elements>
            </Container>
        </div>
    );
};

export default GetPro;