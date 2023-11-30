import Hero from "../../Share/Hero";
import Table from "../../Share/Table";
import man from '../../assets/images/man-look-graphic-chart-business-analytics-concept-big-data-processing-icon_39422-761.jpg'
const Admin = () => {
    return (
        <div>
            <Hero img={man} title='Admin Home'></Hero>

            <div className="mt-5">
                <Table></Table>
            </div>
        </div>
    );
};

export default Admin;