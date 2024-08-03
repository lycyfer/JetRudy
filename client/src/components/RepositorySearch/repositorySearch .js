import React, { useEffect, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { Link } from "react-router-dom";

const RepositorySearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [repositories, setRepositories] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const handleInputChange = async (event) => {
        const { value } = event.target;
        setSearchTerm(value);

        if (value.length > 2) {
            // const response = await apiReq get(`/repository/name?name=${value}`);
            const res = await apiRequest(`/repository/name?name=${value}`);
            console.log(res);
            setRepositories(res.data);
        } else {
            setRepositories([]);
        }
    };

    useEffect(() => {
        if (repositories.length > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [repositories]);

    return (
        <div className="search">
            <div className="group">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
                <input
                    placeholder="Search"
                    type="search"
                    className="input"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </div>
            {repositories.length > 0 && (
                <div className={`response-block ${isVisible ? "visible" : ""}`}>
                    {repositories.map((repo) => (
                        <div className="response-block-item">
                            <Link to={repo.url} className="response-block-link" key={repo.id}>
                                {repo.name}
                            </Link>
                            <div className="response-block-sub">
                                <div className="response-block-sub-lang">{repo.language ? repo.language : "none"}</div>
                                <div className="response-block-sub-forks">{repo.forks}</div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default RepositorySearch;
