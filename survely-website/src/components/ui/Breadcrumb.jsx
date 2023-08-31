/* eslint-disable react/prop-types */

export default function Breadcrumb({ section, view }) {
    return (
        <nav className="w-full rounded-md">
            <ol className="list-reset flex">
                <li className="text-primary">{section}</li>
                <li className="mx-2 text-neutral-500">/</li>
                <li className="text-neutral-500">{view}</li>
            </ol>
        </nav>
    );
}
