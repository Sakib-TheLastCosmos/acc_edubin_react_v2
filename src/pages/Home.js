import Slider from '../components/Slider';
import Motto from '../components/Motto';
import Notice from '../components/Notice';
import Result from '../components/Result';
import Faculty from '../components/Faculty';
import Facilities from '../components/Facilities';
import Principal from '../components/Principal';
import Testimonial from '../components/Testimonial';
import Articles from '../components/Articles';
import { Component, useEffect } from 'react';
import Helmet from 'react-helmet';


// class Home extends Component {
//     render () {
//         return (
//             <div id='home'>
//                 <Slider></Slider>
//                 <Motto></Motto>
//                 <Notice></Notice>
//                 <Result></Result>
//                 <Faculty></Faculty>
//                 <Facilities></Facilities>
//                 <Principal></Principal>
//                 <Testimonial></Testimonial>
//                 <Articles></Articles>
//             </div>
//         )
//     }
// }




const Home = () => {

    // useEffect(() => {
    //     const script = document.createElement('script');
      
    //     script.src = "js/main.js";
    //     script.async = false;
      
    //     document.body.appendChild(script);
      
    //     return () => {
    //       document.body.removeChild(script);
    //     }
    //   }, []);

    return (
        <div id='home'>
            <Helmet>
                <script src='js/main.js'></script>
            </Helmet>

            <Slider></Slider>
            <Motto></Motto>
            <Notice></Notice>
            <Result></Result>
            <Faculty></Faculty>
            <Facilities></Facilities>
            <Principal></Principal>
            <Testimonial></Testimonial>
            <Articles></Articles>
        </div>
    )
}


export default Home

