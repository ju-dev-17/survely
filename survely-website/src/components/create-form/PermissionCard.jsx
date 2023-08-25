/* eslint-disable react/prop-types */
export default function PermissionCard({ title, description }) {
    return (
        <div className="w-full flex flex-col gap-1">
            <div className="flex justify-between items-center select-none">
                <span className="font-bold">{title}</span>
                <label className="relative inline-flex items-center mr-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
                </label>
            </div>
            <div className="w-full">
                <span>{description}</span>
            </div>
        </div>
    );
}
