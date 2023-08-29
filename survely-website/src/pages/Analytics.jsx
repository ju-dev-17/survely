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
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize:  '24px',
                fontWeight:  'bold',
                fontFamily:  undefined,
                color:  '#161816'
            },
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    };

    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ];

    return (
        <div className="w-8/12">
            <Chart
                options={options}
                series={series}
                type="bar"
            />
        </div>
    );
}
