'use client'
import React, { useEffect } from "react";

export default function TopBanner() {
    useEffect(() => {
        const fetchData = async () => {
            const formdata = new FormData();
            formdata.append("type", "Thick Horizontal");
            formdata.append("tags", "");

            try {
                const response = await fetch("https://ad.simaneka.com/api/get", {
                    method: "POST",
                    headers: {
                        "authorisation": "blBzASr9NULmht7w5Y4fBWmDv8LQJNme",
                    },
                    body: formdata,
                });

                const data = await response.json();

                console.log(data);

                document.querySelector('.advertIMG1').src = data.link;
                document.querySelector('.advertIMG1').alt = data.alt;
                document.querySelector('.anchorElement1').href = data.href;
                document.querySelector('.headerText1').innerHTML = data.message;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center text-center py-4 mb-8 mx-auto" style={{ height: '200px' }}>
            <a className="anchorElement1">
                <img className="advertIMG1" style={{ maxHeight: '200px', maxWidth: '100%' }} />
            </a>
        </div>
    );
}