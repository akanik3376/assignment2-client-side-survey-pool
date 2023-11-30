import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import DataTable from "react-data-table-component";

const Table = () => {
    const axiosSecure = useAxiosSecure()
    const { data: voter = [], refetch, isLoading } = useQuery({
        queryKey: ['voter'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get('/user-vote');
                if (res.data) {
                    refetch()
                }
                return res.data;

            } catch (error) {
                console.error('Error fetching user data:', error);

            }
        },
    });

    const columns = [
        {
            name: "No",
            selector: (row, index) => index + 1
        },
        {
            name: "Name",
            selector: (row) => row.name
        },
        {
            name: "Email",
            selector: (row) => row.email
        },
        {
            name: "time",
            selector: (row) => row.time
        },
        {
            name: "voted",
            selector: (row) => row.answer1
        },





    ]


    if (isLoading) {
        return ('Loading...')
    }
    console.log(voter)
    return (
        <div>

            {/* table */}
            <div className="my-10 px-6" >
                <DataTable
                    columns={columns}
                    data={voter}
                    pagination
                    highlightOnHover
                    responsive
                />
            </div>
        </div>
    );
};

export default Table;