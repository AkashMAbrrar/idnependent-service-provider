import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';
import Treatments from './Treatments/Treatments';

const Home = () => {



    return (
        <>
            <TopBanner></TopBanner>
            <Services></Services>
            <Treatments></Treatments>
        </>
    );
};

export default Home;