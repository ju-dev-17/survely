import close from "../../assets/close-outline.svg";

// eslint-disable-next-line react/prop-types
export default function Modal({ children, title, isVisible, setIsVisible }) {
    if (!isVisible) {
        return <></>;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="modal-overlay absolute inset-0 bg-black opacity-50" />
            <div className="modal-container w-full max-w-screen-xl mx-auto px-6 z-50">
                <div className="flex justify-center p-4 px-3 py-10">
                    <div className="w-full max-w-md">
                        <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                            <div className="text-gray-700 text-lg font-semibold py-2 px-2 flex justify-between items-center">
                                <span>{title}</span>
                                <img
                                    onClick={() => setIsVisible(false)}
                                    className="cursor-pointer" src={close}
                                    alt="Close Modal"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="py-3 text-sm">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
