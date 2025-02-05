import React from "react";

interface InputFieldProps {
    label: string;
    name: string;
    type?: "text" | "textarea" | "url" | "date";
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = "text", value, onChange }) => (
    <label className="block">
        <span className="text-gray-700 font-medium">{label}</span>
        {type === "textarea" ? (
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none h-32"
                required
            />
        ) : (
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
            />
        )}
    </label>
);

export default React.memo(InputField);
