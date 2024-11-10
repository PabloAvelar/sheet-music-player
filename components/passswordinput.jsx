'use client';

import React from 'react'
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function PasswordInput({ label, variant, placeholder }) {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <Input
            label={label}
            variant={variant}
            placeholder={placeholder}
            endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                    <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
                </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs"
        />
    )
}

export default PasswordInput
