import img from '../../assets/images/flat-design-how-it-works-badges_23-2149522560.jpg'
const HowItWorks = () => {
    return (
        <div className='my-16'>
            <div className="h-60">
                <img className='w-full object-cover max-h-60' src={img} alt="" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12'>
                <div className='flex flex-col btn-outline p-4 hover:bg-blue-300 rounded-xl'>
                    <h4 className="text-xl  font-semibold">Survey Builder</h4>
                    <ul>
                        <li>Utilize an easy-to-use survey builder with drag-and-drop functionality.

                        </li>
                        <li> Choose from various question types: multiple-choice, open-ended, rating scales, etc.</li>
                        <li>Customize questions with formatting options and media embeds.</li>
                    </ul>
                </div>
                <div className='flex flex-col btn-outline p-4 hover:bg-blue-300 rounded-xl'>
                    <h4 className="text-xl  font-semibold">Quick Start?</h4>

                </div>
            </div>
        </div >
    );
};

export default HowItWorks;