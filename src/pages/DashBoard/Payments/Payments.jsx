import Hero from "../../../Share/Hero";
import image from '../../../assets/images/hand-holding-phone-with-credit-card-screen-man-making-purchase-shopping-paying-online-using-banking-app-flat-vector-illustration-transaction-e-commerce-concept_74855-26014.jpg'
import usePayment from "../../../Hooks/usePayment";
const Payments = () => {

    const [payments] = usePayment()


    return (
        <div>

            <Hero img={image} title='Manage payments of pro-user'></Hero>

            {/* table */}
            <div>

                <div className="overflow-x-auto mt-4">
                    <table className="table w-full">
                        <thead className="bg-yellow-500 ">

                            <tr >

                                <th></th>
                                <th>Email</th>
                                <th>Date</th>


                                <th>Price</th>
                                <th>TransitionId</th>


                            </tr>
                        </thead>
                        {
                            payments?.map((payment, index) => <tbody key={payment._id}>
                                {/* row 1 */}
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        {payment?.email}
                                    </td>
                                    <td>
                                        {payment?.date}

                                    </td>



                                    <td>

                                        {payment?.price}

                                    </td>
                                    <td>

                                        {payment?.transitionId}

                                    </td>


                                </tr>
                            </tbody>)

                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Payments;