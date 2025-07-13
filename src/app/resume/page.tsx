import React from "react";

export default function ResumePage() {
    return (
        <div className="relative h-[70vh] w-full m-4 z-20">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <iframe
                    src="YuYouChenResume.pdf"
                    title="Resume PDF"
                    width="80%"
                    height="650px"
                />
            </div>
        </div>
    )
};