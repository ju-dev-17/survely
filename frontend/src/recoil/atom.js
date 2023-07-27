import { atom } from 'recoil';

export const surveyFormDataState = atom({
    key: 'surveyFormData',
    default: {
        title: "",
        description: "",
        fields: []
    },
});

export const addFieldModalState = atom({
    key: 'addFieldModal',
    default: false,
});