import img1 from '../../assets/Images/3.jpg'
import Button from '../../Custom/Button/Button';
import 'animate.css';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(to right, rgba(88, 47, 14, 1), rgba(231, 233, 210, 0.4), rgba(88, 47, 14, 0) 70%), url(${img1})` }} className='min-h-screen bg-cover rounded-b-[6rem]'>

            <div className='md:px-28 md:py-44 px-8 py-32 space-y-5 text-center md:text-start'>
            <h3 className='text-[var(--primary-color)] animate__animated animate__fadeInLeft'>────────Making a Difference</h3>
          <h2 className='md:text-5xl text-3xl font-semibold animate__animated animate__fadeInLeft animate__delay-1s'>Together We Can <br />Create Positive Change <br />In The World</h2>
            <p className='text-xl text-[var(--primary-color)] animate__animated animate__fadeInLeft animate__slower'>We try to help people with volunteering. Try our programs <br /> and help people for their needs.</p>
            <Button title='Become a Volunteer'></Button>
            </div>
        </div>
    );
};

export default Banner;
