'use client'
import React, { useEffect } from "react";
import axios from "axios";

// Renamed to start with an uppercase letter
export default function MiddleBanner() {
    // useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.post(
                "https://ad.simaneka.com/api/get",
                {
                    type: "Thick Horizontal",
                    tags: "vpn",
                },
                {
                    headers: {
                        authorisation: "blBzASr9NULmht7w5Y4fBWmDv8LQJNme",
                    },
                }
            );
            console.log(response.data);
            document.querySelector(".advertIMG").src = response.data.link;
            document.querySelector(".advertIMG").alt = response.data.alt;
            document.querySelector(".anchorElement").href = response.data.href;
            document.querySelector(".headerText").innerHTML = response.data.message;
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
    // }, []);


    return (
        <div className="flex flex-col justify-center items-center bg-gray-50 text-center py-4 mb-8 mx-auto ">
            <a className="anchorElement">
                <p className="headerText"></p>
                <img className="advertIMG" style={{ width: '100%' }} alt="Ad Space Middle" />

            </a>
        </div>
    );
}