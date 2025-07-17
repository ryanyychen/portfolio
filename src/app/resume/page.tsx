import React from "react";

export default function ResumePage() {
    return (
        <main className="relative h-[70vh] w-full z-20">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <iframe
                    src="YuYouChenResume.pdf"
                    title="Resume PDF"
                    width="80%"
                    height="650px"
                />
            </div>
        </main>
    )
};