import React from "react";

const useForm = (initialState) => {
    const [formData, setFormData] = React.useState(initialState);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    return {
        formData,
        handleChange
    }
}

export default useForm;