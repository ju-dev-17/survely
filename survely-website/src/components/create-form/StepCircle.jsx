import checkmark from "../../assets/checkmark-outline.svg";

// eslint-disable-next-line react/prop-types
export default function StepCircle({ ownStep, currentStep }) {
    return (
        <div className='rounded-full h-10 w-10 flex items-center justify-center mr-2 bg-primary text-white'>
            {currentStep > ownStep ? <img src={checkmark} alt="Checkmark" width={20} height={20} /> : <>{ownStep}</>}
        </div>
    );
}
