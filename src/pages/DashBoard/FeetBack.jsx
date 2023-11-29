import DataTable from "react-data-table-component";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";

// import useAuth from "../../Hooks/useAuth";

const FeetBack = () => {
    // const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data: report = [] } = useQuery({
        queryKey: ['report'],
        queryFn: async () => {
            // const response = await axiosPublic.get(`/reports/${user.email}`)
            const res = await axiosPublic.get(`/reports`)
            console.log(res.data)
            return res.data
        }
    });


    // useEffect(() => {
    //     report.map(r => setData(r.description))
    // })


    const [selectedReport, setSelectedReport] = useState(null);

    const openModal = (report) => {
        setSelectedReport(report);
        document.getElementById('my_modal_5').showModal();
    };

    const closeModal = () => {
        setSelectedReport(null);
        document.getElementById('my_modal_5').close();
    };

    const columns = [
        {
            name: "No",
            selector: (row, index) => index + 1
        },
        {
            name: "name",
            selector: (row) => row.name
        },

        {
            name: "email",
            selector: (row) => row.userEmail
        },
        {
            name: "Survey Title",
            selector: (row) => row.title

        },
        {
            name: "Report",
            cell: (row) => (
                <button className="bg-[#ed5e68] px-3 py-1 rounded text-white" onClick={() => openModal(row)}>Report</button>
            )
        }
    ];
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Report Details</h3>
                    {selectedReport && (
                        <>
                            <p className='text-lg' >Name: {selectedReport.name}</p>
                            <p>Email: {selectedReport.email}</p>
                            <p>Survey Title: {selectedReport.title}</p>
                            <p>Report: {selectedReport.description}</p>
                            {/* Add more details as needed */}
                        </>
                    )}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" onClick={closeModal}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <div className="my-10 px-6" >
                <DataTable
                    columns={columns}
                    data={report}
                    pagination
                    highlightOnHover
                    responsive
                />
            </div>
        </div>
    );
};

export default FeetBack;