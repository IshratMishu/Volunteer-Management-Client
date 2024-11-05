import Button from "../../Custom/Button/Button";
import img2 from '../../assets/Images/1.jpg'

const BeforeFooter = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(rgba(88, 47, 14, 0.7), rgba(88, 47, 14, 0.6)), url(${img2})` }} className='h-96 bg-cover mt-32 text-[var(--primary-color)]'>

            <div className='max-w-screen-xl mx-auto text-center md:pt-28 pt-12 px-8 space-y-3'>
                <h3 className='text-3xl font-semibold'>Are you ready to be a volunteer?</h3>
                <p className='text-xl'>start one of our program today and help people in need</p>
                <p>────────</p>
                <Button title='Become a Volunteer'></Button>
                <button className="border border-[var(--secondary-color)] hover:bg-[var(--tertiary-color)] hover:text-white px-2 py-1 rounded-md md:ml-5">Make a Donation</button>
            </div>
        </div>
    );
};

export default BeforeFooter;