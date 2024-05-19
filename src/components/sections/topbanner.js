'use client'
import React, { useEffect } from "react";
import axios from "axios";

export default function Topbanner() {
    useEffect(() => {
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
                document.querySelectorAll(".advertIMG").forEach((img) => {
                    img.src = response.data.link;
                    img.alt = response.data.alt;
                });
                document.querySelectorAll(".anchorElement").forEach((a) => {
                    a.href = response.data.href;
                });
                document.querySelectorAll(".headerText").forEach((p) => {
                    p.innerHTML = response.data.message;
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="bg-gray-200 text-center py-4 mb-8">
            <a className="anchorElement" href="#">
                <p className="headerText">Ad Space Top</p>
                <img className="advertIMG mx-auto" alt="Ad Space Top" />
            </a>
        </div>
    );
}
