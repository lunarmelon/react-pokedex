import React from "react";
import './displayField.css'

interface DisplayFieldProps {
    value: string;
}

const DisplayField: React.FC<DisplayFieldProps> = ({ value }) => {
    return (
        <div className="display-field">
            <span>{value}</span>
        </div>
    );
};

export default DisplayField;