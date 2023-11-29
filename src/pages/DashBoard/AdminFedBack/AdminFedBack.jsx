import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";
import DataTable from "react-data-table-component";
import useAuth from "../../../Hooks/useAuth";

const AdminFedBack = () => {
    const user = useAuth()
    console.log(user)
    const axiosPublic = useAxiosPublic()
    const { data: survey = [] } = useQuery({
        queryKey: ['survey'],
        queryFn: async () => {
            // const response = await axiosPublic.get(`/surveys/${user.email}`)
            const res = await axiosPublic.get(`/api/v1/survey`)
            console.log(res)
            return res.data
        }
    });

    // Step 3: Filter users based on the selected role
    const filtered = survey.filter(sueve => {
        if (sueve.status !== 'Publish') {
            return true; // Display all sueves if no role is selected
        } else {
            // return sueve.role === selectedRole;
        }
    });


    const [selectedReport, setSelectedReport] = useState(null);

    const openModal = (feedback) => {
        setSelectedReport(feedback);
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
            name: "Category",
            selector: (row) => row.category
        },
        {
            name: "Survey Title",
            selector: (row) => row.surveyTitle

        },
        {
            name: "Report",
            cell: (row) => (
                <button className="bg-[#ed5e68] px-3 py-1 rounded text-white" onClick={() => openModal(row)}>Feedback</button>
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

                            <p>Survey Title: {selectedReport.surveyTitle}</p>
                            <p>Feedback: {selectedReport.feedback}</p>
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
                    data={filtered}
                    pagination
                    highlightOnHover
                    responsive
                />
            </div>
        </div>
    );
};

export default AdminFedBack;