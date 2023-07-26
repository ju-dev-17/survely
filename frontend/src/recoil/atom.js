import { atom } from 'recoil';

export const surveyFormDataState = atom({
    key: 'surveyFormData',
    default: {
        title: "",
        description: ""
    },
});

export const addFieldModalState = atom({
    key: 'addFieldModal',
    default: false,
});