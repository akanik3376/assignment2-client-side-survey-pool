import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import { useEffect, useState } from "react";

const useSurvey = () => {
    const axiosPublic = useAxiosPublic()

    const { data: survey = [], isPending: loading, refetch } = useQuery({
        queryKey: ['survey',],
        queryFn: async () => {
            const res = await axiosPublic.get('http://localhost:5000/api/v1/survey')
            return res.data
        }
    })
    return [survey, loading, refetch]
};

export default useSurvey;