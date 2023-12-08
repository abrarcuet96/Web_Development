import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg';
import './featured.css';
const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-8 my-20">
            <SectionTitle
            heading="Check It Out"
            subHeading="Featured Item"
            >
            </SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36 bg-black bg-opacity-50">
                <div>
                    <img className="rounded-lg" src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>Aug 20, 2023</p>
                    <p>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat, deleniti soluta natus quam tenetur consequatur voluptates? Vero ullam quo culpa quis cupiditate, repellat magni aliquam facilis ad non itaque totam quas repudiandae expedita a ut. Rem modi aut a sint quisquam fugit assumenda est animi, repellat voluptate vero dicta!</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;