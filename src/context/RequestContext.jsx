import { createContext, useContext, useState, useEffect } from "react";
import requestsData from "../data/requests";

const RequestContext = createContext();

export function RequestProvider({ children }) {
    const [requests, setRequests] = useState(() => {
        const savedRequests = localStorage.getItem("requests");
        return savedRequests ? JSON.parse(savedRequests) : requestsData;
    });

    function addRequest(request) {
        setRequests((prev) => [request, ...prev]);
    }

    function deleteRequest(id) {
        setRequests((prev) =>
            prev.filter((request) => request.id !== id)
        );
    }
    function updateRequest(updatedRequest) {
        setRequests((prev) =>
            prev.map((request) =>
                request.id === updatedRequest.id
                    ? updatedRequest
                    : request
            )
        );
    }

    useEffect(() => {
        localStorage.setItem(
            "requests",
            JSON.stringify(requests)
        );
    }, [requests]);

    return (
        <RequestContext.Provider  value={{requests,addRequest,deleteRequest,updateRequest,}}>
            {children}
        </RequestContext.Provider>
    );
}

export function useRequests() {
    return useContext(RequestContext);
}