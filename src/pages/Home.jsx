import Container from '../Share/Container';
import Banner from '../components/home/Banner';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
        </Container>
    );
};

export default Home;
