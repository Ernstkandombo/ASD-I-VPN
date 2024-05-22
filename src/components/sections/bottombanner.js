'use client'
import React, { useEffect } from "react";


// Renamed to start with an uppercase letter
export default function BottomBanner() {
    useEffect(() => {
        const fetchData = async () => {
            const formdata = new FormData();
            formdata.append("type", "Light Square");
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

                document.querySelector('.advertIMG2').src = data.link;
                document.querySelector('.advertIMG2').alt = data.alt;
                document.querySelector('.anchorElement2').href = data.href;
                document.querySelector('.headerText2').innerHTML = data.message;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="flex flex-col justify-center items-center text-center py-4 mb-8 mx-auto" style={{ height: '250px' }}>
            <a className="anchorElement2">

                <img className="advertIMG2" style={{ maxHeight: '250px', maxWidth: '100%' }} />
            </a>
        </div>
    );
}