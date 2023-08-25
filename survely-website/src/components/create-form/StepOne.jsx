/* eslint-disable react/prop-types */
import { useRecoilState, useSetRecoilState } from "recoil";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { addFieldModalState, surveyFormDataState } from "../../recoil/atom.js";
import FormField from "./FormField.jsx";

export default function StepOne({ currentStep, nextStep }) {
    const [surveyFormData, setSurveyFormData] = useRecoilState(surveyFormDataState);
    const setIsVisible = useSetRecoilState(addFieldModalState);

    if (currentStep !== 1) {
        return <></>;
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
                <input autoFocus required maxLength={255} value={surveyFormData.title} onChange={handleChange} type="text" name="title" placeholder="Enter a title" className="focus:outline-none bg-background w-full border-2 rounded-lg p-3" />
                <textarea required maxLength={255} value={surveyFormData.description} onChange={handleChange} name="description" placeholder="Enter a description" className="focus:outline-none bg-background w-full border-2 rounded-lg p-3" />
                <button onClick={() => setIsVisible(true)} className="bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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
                onClick={nextStep}
            >
                Next
            </button>
        </div>
    )
}