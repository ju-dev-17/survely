import Breadcrumb from "../ui/Breadcrumb.jsx";
import Input from "../ui/Input.jsx";

export default function Email() {
    const isVerified = false;

    return (
        <div className="w-full h-full flex flex-col gap-5">
            <Breadcrumb section="Account settings" view="E-Mail" />
            <h1 className="text-3xl font-semibold">E-Mail</h1>
            <div className="border-t flex flex-col gap-10 py-8">
                <div className="flex flex-col gap-3">
                    <span className="text-xl text-accent font-semibold">Change E-Mail</span>
                    <div className="flex gap-5">
                        <Input
                            label="New E-Mail"
                            name="newEmail"
                            type="email"
                            placeholder="john.doe@survely.com"
                            value=""
                            onChange={() => {}}
                        />
                        <Input
                            label="New E-Mail (repeat)"
                            name="newEmailRepeat"
                            type="email"
                            placeholder="john.doe@survely.com"
                            value=""
                            onChange={() => {}}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-xl text-accent font-semibold">Verify E-Mail</span>
                    <div className="flex justify-between items-center gap-3">
                        <span className="font-semibold">
                            Status: <span className="font-medium">Not verified</span>
                        </span>
                        {!isVerified && (
                            <div>
                                <button className="bg-accent px-4 py-2 rounded-lg text-center text-white font-semibold select-none">
                                    Send E-Mail
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
