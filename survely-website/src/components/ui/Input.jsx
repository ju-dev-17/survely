/* eslint-disable react/prop-types */

export default function Input({ label, name, type, placeholder, value, onChange, disabled }) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label className="text-accent" htmlFor={name}>{label}</label>
            <input
                id={name}
                className="rounded-lg py-2 px-4 border-2 focus:outline-none w-full"
                type={type}
                name={name}
                placeholder={placeholder || ""}
                value={value}
                onChange={onChange}
                disabled={disabled || false}
            />
        </div>
    );
}
