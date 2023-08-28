/* eslint-disable react/prop-types */
import { useRecoilState } from "recoil";
import { Draggable } from "react-beautiful-dnd";

import trash from "../../assets/trash-outline.svg";
import reorder from "../../assets/reorder-three-outline.svg";
import { surveyFormDataState } from "../../recoil/atom.js";

// eslint-disable-next-line react/prop-types
export default function FormField({ field, index }) {
    const [surveyFormData, setSurveyFormData] = useRecoilState(surveyFormDataState);

    const handleChange = (event) => {
        const updatedFields = surveyFormData.fields.map((field, i) =>
            i === index ? { ...field, title: event.target.value } : field
        );

        setSurveyFormData({
            ...surveyFormData,
            fields: updatedFields
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
        <Draggable draggableId={index.toString()} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="w-full flex gap-1 justify-start text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 select-none"
                >
                    <img
                        onClick={() => deleteField(field, index)}
                        className="cursor-pointer"
                        src={trash}
                        alt="Delete Field"
                        width={24}
                        height={24}
                    />
                    <input
                        className="bg-background rounded-lg flex-grow font-medium p-2 focus:outline-none cursor-pointer"
                        onChange={handleChange}
                        value={field.title.toString()}
                    />
                    <img
                        src={reorder}
                        alt="Reorder Field"
                        width={24}
                        height={24}
                    />
                </div>
            )}
        </Draggable>
    );
}
