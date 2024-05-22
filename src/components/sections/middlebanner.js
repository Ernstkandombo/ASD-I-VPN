'use client'
import React, { useEffect } from 'react';

// Renamed to start with an uppercase letter
export default function MiddleBanner() {
    useEffect(() => {
        const fetchData = async () => {
            const formdata = new FormData();
            formdata.append("type", "Horizontal strip");
            formdata.append("tags", "network");

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

                document.querySelector('.advertIMG').src = data.link;
                document.querySelector('.advertIMG').alt = data.alt;
                document.querySelector('.anchorElement').href = data.href;
                document.querySelector('.headerText').innerHTML = data.message;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center text-center py-4 mb-8 mx-auto" style={{ height: '200px' }}>
            <a className="anchorElement">
                <img className="advertIMG" style={{ maxHeight: '200px', maxWidth: '100%' }} />
            </a>
        </div>
    );
}