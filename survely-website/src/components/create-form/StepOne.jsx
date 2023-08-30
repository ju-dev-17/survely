/* eslint-disable react/prop-types */
import {useState} from "react";
import { useRecoilState } from "recoil";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { surveyFormDataState } from "../../recoil/atom.js";
import FormField from "./FormField.jsx";
import Modal from "../ui/Modal.jsx";
import simpleQuestion from "../../json/simpleQuestion.js";

export default function StepOne({ currentStep, nextStep }) {
    const [surveyFormData, setSurveyFormData] = useRecoilState(surveyFormDataState);
    const [isModalVisible, setIsModalVisible] = useState(false);

    if (currentStep !== 1) {
        return <></>;
    }

    const handleClick = () => {
        setSurveyFormData({
            ...surveyFormData,
            fields: [...surveyFormData.fields, simpleQuestion]
        });
        setIsModalVisible(false);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setSurveyFormData({
            ...surveyFormData,
            [name]: value,
        });
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const updatedFields = Array.from(surveyFormData.fields);
        const [reorderedItem] = updatedFields.splice(result.source.index, 1);
        updatedFields.splice(result.destination.index, 0, reorderedItem);

        setSurveyFormData({
            ...surveyFormData,
            fields: updatedFields,
        });
    }

    return (
        <div className="flex flex-col h-full">
            <h1 className="text-2xl font-bold mb-4">Step 1: Design Form</h1>
            <div className="w-full flex-1 flex flex-col gap-5">
                <input autoFocus required maxLength={75} value={surveyFormData.title} onChange={handleChange} type="text" name="title" placeholder="Enter a title" className="focus:outline-none bg-background w-full border-2 rounded-lg p-3" />
                <textarea required maxLength={255} value={surveyFormData.description} onChange={handleChange} name="description" placeholder="Enter a description" className="focus:outline-none bg-background w-full border-2 rounded-lg p-3 resize-none" />
                <button onClick={() => setIsModalVisible(true)} className="bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add field
                </button>
                {surveyFormData.fields.length > 0 && (
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="formFields">
                            {(provided) => (
                                <div
                                    className="flex flex-col gap-2"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {surveyFormData.fields.map((field, i) => (
                                        <FormField key={i} field={field} index={i} />
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                )}
            </div>
            <button
                className="bg-primary text-white font-bold py-2 px-4 mb-12 rounded focus:outline-none focus:shadow-outline"
                onClick={() => surveyFormData.title.length > 0 && nextStep()}
            >
                Next
            </button>
            <Modal title="Choose a type of Field" isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
                <div onClick={handleClick} className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                    <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                    <div className="flex-grow font-medium px-2">Simple Question</div>
                </div>
            </Modal>
        </div>
    )
}