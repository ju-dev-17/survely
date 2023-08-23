/* eslint-disable react/prop-types */
import { useState } from "react";

import close from "../../assets/close-outline.svg";

// eslint-disable-next-line react/prop-types
export default function FormField({ surveyFormData, setSurveyFormData, field, index }) {
    const [inputValue, setInputValue] = useState(field?.title.toString());
    const [isDisabled, _setIsDisabled] = useState(true);
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount((prevClickCount) => prevClickCount + 1);
        if (clickCount === 1) {
            handleClick();
            setClickCount(0);
        }
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
        const surveyField = surveyFormData.fields.find((_, i) =>  i === index);
        surveyField.title = inputValue;

        const fields = surveyFormData.fields;

        setSurveyFormData({
            ...surveyFormData,
            fields
        });
    }

    const deleteField = (field, index) => {
        const updatedSurveyFormData = surveyFormData.fields.filter((_, i) => i !== index);
        if (updatedSurveyFormData.length > 0) {
            setSurveyFormData({
                ...surveyFormData,
                fields: updatedSurveyFormData
            });
        }
    }

    return (
        <div onClick={handleClick} className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2">
            <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
            <input
                className="flex-grow font-medium px-2 bg-background hover:bg-blue-100 focus:outline-none cursor-pointer"
                onChange={handleChange}
                value={inputValue}
                disabled={isDisabled}
            />
            <img onClick={() => deleteField(field, index)} src={close} alt="Delete Field" width={24} height={24} />
        </div>
    );
}
