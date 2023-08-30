import Chart from "react-apexcharts";

export default function Analytics() {
    const options = {
        chart: {
            id: "basic-area",
            background: "#f7f8f7",
        },
        fill: {
            type: 'solid',
            colors: ["#bfc5c1"]
        },
        title: {
            text: "Completed Surveys",
            align: 'center',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize:  '28px',
                fontWeight:  'bold',
                fontFamily:  undefined,
                color:  '#161816'
            },
        },
        xaxis: {
            categories: ["TITLE", "TITLE", "TITLE", "TITLE", "TITLE", "TITLE", "TITLE", "TITLE", "TITLE"]
        }
    };

    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91, 50]
        }
    ];

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-8/12">
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                />
            </div>
            <div className="bg-background w-full h-full flex justify-center">
                <div className="w-3/4 flex flex-col overflow-x-auto shadow-md border border-gray-300 bg-background">
                    <div className="sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-left text-sm font-light bg-background">
                                    <thead className="border-b font-medium">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">
                                            COLUMN
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            COLUMN
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            COLUMN
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            COLUMN
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            COLUMN
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            COLUMN
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            COLUMN
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t">
                                            <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                            <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                            <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                            <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                            <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                            <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                            <td className="whitespace-nowrap px-6 py-4">Cell</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
