'use client'
import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";

// Renamed to start with an uppercase letter
export default function TopBanner() {
    // useEffect(() => {
    // const fetchData = async () => {
    // try {
    var formdata = new FormData();
    formdata.append("type", "Light Square");
    formdata.append("tags", "music,party");

    var ajax = new XMLHttpRequest();
    ajax.addEventListener("load", completeHandler, false);

    ajax.open("POST", "https://ad.simaneka.com/api/get");
    ajax.setRequestHeader("authorisation", "blBzASr9NULmht7w5Y4fBWmDv8LQJNme");

    ajax.send(formdata);

    function completeHandler(event) {
        var response = JSON.parse(event.target.responseText);

        console.log(response);
        document.querySelector('.advertIMG').src = response.link;
        document.querySelector('.advertIMG').alt = response.alt;
        document.querySelector('.anchorElement').href = response.href;
        document.querySelector('.headerText').innerHTML = response.message;
    }
    // var inputs =
    // {
    //     type: "Thick Horizontal",
    //     tags: "vpn",
    // };

    // var myHeader =
    // {
    //     authorisation: "blBzASr9NULmht7w5Y4fBWmDv8LQJNme",
    // };


    // const response = await axios.post(
    //     "https://ad.simaneka.com/api/get", inputs, { headers: myHeader }
    // );
    // console.log(response.data);
    // document.querySelector(".advertIMG").src = response.data.link;
    // document.querySelector(".advertIMG").alt = response.data.alt;
    // document.querySelector(".anchorElement").href = response.data.href;
    // document.querySelector(".headerText").innerHTML = response.data.message;
    // } catch (error) {
    //     console.error(error);
    // }
    // };

    // fetchData();
    // }, []);


    return (
        <div className="flex flex-col justify-center items-center bg-gray-50 text-center py-4 mb-8 mx-auto ">
            <a className="anchorElement">
                <p className="headerText"></p>
                <img className="advertIMG" alt="Ad Space Top" style={{ width: '100%' }} />

            </a>
        </div>
    );
}